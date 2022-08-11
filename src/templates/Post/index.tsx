import { Container } from 'components/Container'
import Quiz from 'components/Quiz'
import Survey from 'components/Survey'
import TextChapterOpener from 'components/TextChapterOpener'
import TextContent from 'components/TextContent'
import client from 'graphql/client'
import { UPDATE_SURVEY } from 'graphql/queries/getPost'
import Base from 'templates/Base'
import { PostProps } from 'types/api'
import * as S from './styles'

const Post = ({
  title,
  authors,
  category,
  createdAt,
  imageUrl,
  contents,
  reference,
  originUrl,
  slideUrl
}: PostProps) => {
  return (
    <Base>
      <Container>
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
        </S.WrapperMenuFull>
      </Container>
    </Base>
  )
}

export default Post
