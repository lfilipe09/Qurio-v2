import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

export type TextContentProps = {
  content?: string
  imgUrlDesktop?: string
  imgAltDesktop?: string
  imgUrlMobile?: string
  imgAltMobile?: string
  quiz?: JSX.Element
  survey?: JSX.Element
}

const TextContent = ({
  content,
  imgUrlDesktop,
  imgAltDesktop,
  imgUrlMobile,
  imgAltMobile,
  quiz,
  survey
}: TextContentProps) => {
  return (
    <S.Wrapper data-cy="content">
      {!!content && <div dangerouslySetInnerHTML={{ __html: content }} />}

      {!!quiz && <S.QuizWrapper>{quiz}</S.QuizWrapper>}

      {!!survey && <S.QuizWrapper>{survey}</S.QuizWrapper>}

      {!!imgUrlDesktop && (
        <MediaMatch greaterThan="medium">
          <S.Image alt={imgAltDesktop ?? ''} src={imgUrlDesktop} />
        </MediaMatch>
      )}

      {!!imgUrlMobile && (
        <MediaMatch lessThan="medium">
          <S.Image alt={imgAltMobile ?? ''} src={imgUrlMobile} />
        </MediaMatch>
      )}
    </S.Wrapper>
  )
}

export default TextContent
