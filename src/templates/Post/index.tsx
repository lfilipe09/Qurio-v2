import { Container } from 'components/Container'
import { CloseIcon } from 'components/Icons'
import Quiz from 'components/Quiz'
import Survey from 'components/Survey'
import TextChapterOpener from 'components/TextChapterOpener'
import TextContent from 'components/TextContent'
import client from 'graphql/client'
import { UPDATE_SURVEY } from 'graphql/queries/getPost'
import { useRouter } from 'next/router'
import { PostProps } from 'types/api'
import * as S from './styles'

const Post = ({
  title,
  packSlug,
  authors,
  category,
  createdAt,
  imageUrl,
  contents,
  reference,
  originUrl,
  slideUrl
}: PostProps) => {
  const routes = useRouter()
  const { push } = routes
  return (
    <Container>
      <S.MenuFullClose>
        <S.Icon onClick={() => push(`/pack/${packSlug}`)}>
          <CloseIcon />
        </S.Icon>
      </S.MenuFullClose>
      <S.ChapterOpenerWrapper>
        <TextChapterOpener
          authors={authors}
          category={category}
          publicationDate={new Date(createdAt)}
          title={title}
          urlImage={imageUrl}
          reference={reference}
          slideUrl={slideUrl}
          originUrl={originUrl}
        />
      </S.ChapterOpenerWrapper>
      <S.WrapperMenuFull>
        <S.ContentWrapper>
          {contents.map((content) => {
            return typeof content === 'string' ? (
              <TextContent content={content} />
            ) : 'quizType' in content ? (
              <TextContent
                quiz={
                  <Quiz
                    questions={content.questions}
                    quizType={content.quizType}
                    title={content.title}
                    description={content.description}
                    pointQuizResults={
                      content.quizType === 'point'
                        ? content.pointQuizResults
                        : undefined
                    }
                    frequencyQuizResults={
                      content.quizType === 'frequency'
                        ? content.frequencyQuizResults
                        : undefined
                    }
                  />
                }
              />
            ) : 'desktop' in content ? (
              <TextContent
                imgUrlDesktop={content.desktop.url}
                imgAltDesktop={content.desktop.url}
                imgUrlMobile={content.mobile.url}
                imgAltMobile={content.mobile.url}
              />
            ) : (
              <TextContent
                survey={
                  <Survey
                    description={content.description}
                    handleOnClick={({ id, data }) => {
                      client.request(UPDATE_SURVEY, {
                        id,
                        data
                      })
                    }}
                    id={content.id}
                    options={content.options}
                    title={content.title}
                  />
                }
              />
            )
          })}
        </S.ContentWrapper>
        <S.TextColumnWrapper>
          <></>
        </S.TextColumnWrapper>
      </S.WrapperMenuFull>
    </Container>
  )
}

export default Post
