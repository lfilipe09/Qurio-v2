import client from 'graphql/client'
import {
  GET_POSTS_SLUGS,
  GET_POST_BY_SLUG,
  GET_QUIZ_RESULTS
} from 'graphql/queries/getPost'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Post from 'templates/Post'
import {
  ContentAPIProps,
  Formats,
  PostProps,
  QuizProps,
  QuizResultAPIProps,
  ResponsiveImageProps,
  SurveyProps,
  PostSlugAPI
} from 'types/api'

export default function PostPage(props: PostProps) {
  const router = useRouter()

  // se a rota não tiver sido gerada ainda
  // você pode mostrar um loading
  // uma tela de esqueleto
  if (router.isFallback) return null
  return <Post {...props} />
}

// gerar em build time (/game/bla, /bame/foo ...)
export async function getStaticPaths() {
  const { posts } = await client.request(GET_POSTS_SLUGS, {
    limit: 100
  })

  const paths = posts.data.map((post: PostSlugAPI) => {
    return {
      params: { slug: post.attributes.slug }
    }
  })

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await client.request(GET_POST_BY_SLUG, {
    filter: `${params?.slug}`
  })

  const quizResultData = await client.request(GET_QUIZ_RESULTS)

  const post = postData.posts.data[0].attributes

  const quizResults: QuizResultAPIProps[] = quizResultData.quizResults.data

  const contents: (string | QuizProps | SurveyProps | ResponsiveImageProps)[] =
    []

  post.content.map((content: ContentAPIProps) => {
    content.content !== '' && contents.push(content.content)
    content.quizzes.data.length > 0 &&
      content.quizzes.data.map((quiz) => {
        quiz.attributes.quiz_type === 'Quiz_de_pontuacao'
          ? contents.push({
              quizType: 'point',
              title: quiz.attributes.title,
              description: quiz.attributes.description,
              questions: quiz.attributes.question.map((question) => ({
                id: question.id,
                title: question.title,
                options: question.option.map((option) => ({
                  id: option.id,
                  title: option.title,
                  points: option.points
                }))
              })),
              pointQuizResults: quiz.attributes?.point_quiz_result
                ? quiz.attributes.point_quiz_result.map(
                    (point_quiz_result) => ({
                      title: point_quiz_result.title,
                      description: point_quiz_result.description,
                      minPoint: point_quiz_result.min_point,
                      maxPoint: point_quiz_result.max_point
                    })
                  )
                : []
            })
          : quiz.attributes.quiz_type === 'Quiz_de_frequencia' &&
            contents.push({
              quizType: 'frequency',
              title: quiz.attributes.title,
              description: quiz.attributes.description,
              questions: quiz.attributes.question.map((question) => ({
                id: question.id,
                title: question.title,
                options: question.option.map((option) => {
                  return {
                    id: option.id,
                    title: option.title,
                    quizResult: {
                      id: option.quiz_result?.data?.id ?? null,
                      title:
                        option.quiz_result?.data?.attributes?.title ?? null,
                      description:
                        option.quiz_result?.data?.attributes?.description ??
                        null
                    }
                  }
                })
              })),
              frequencyQuizResults: quizResults.map((quizResult) => ({
                id: quizResult.id,
                title: quizResult.attributes.title,
                description: quizResult.attributes.description
              }))
            })
      })
    content.surveys.data.length > 0 &&
      content.surveys.data.map((survey) => {
        contents.push({
          id: survey.id,
          title: survey.attributes.title,
          description: survey.attributes.description,
          options: survey.attributes.option.map((option) => ({
            id: option.id,
            title: option.title,
            frequency: option.frequency
          }))
        })
      })
    content.images_display.length > 0 &&
      content.images_display.map((image_display) =>
        contents.push({
          desktop: {
            url: image_display.desktop.data.attributes.url,
            alternativeText:
              image_display.desktop.data.attributes.alternativeText
          },
          mobile: {
            url: image_display.mobile.data.attributes.url,
            alternativeText:
              image_display.mobile.data.attributes.alternativeText
          }
        })
      )
  })

  return {
    revalidate: 60,
    props: {
      title: post.title,
      packSlug: post.pack.data.attributes.slug,
      authors: post.authors.data?.map(
        (author: Formats) => author.attributes.name
      ),
      category: post.category.data.attributes.name,
      createdAt: post.createdAt,
      imageUrl: post.cover.data.attributes.url,
      reference: post.reference,
      slideUrl: post.slide_url,
      originUrl: post.origin_url,
      contents
    }
  }
}
