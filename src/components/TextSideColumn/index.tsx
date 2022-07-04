import Button from 'components/Button'
import * as S from './styles'

export type TextSideColumnProps = {
  leftButtonLabel?: string
  leftButtonIcon?: JSX.Element | null
  isLeftButtonOutline?: boolean
  handleOnLeftButtonClick?: () => void
  rightButtonLabel?: string
  rightButtonIcon?: JSX.Element | null
  handleOnRightButtonClick?: () => void
  urlLinkRightButtonClick?: string
}

const TextSideColumn = ({
  leftButtonLabel,
  rightButtonLabel,
  handleOnLeftButtonClick,
  leftButtonIcon,
  rightButtonIcon,
  handleOnRightButtonClick,
  isLeftButtonOutline = true,
  urlLinkRightButtonClick
}: TextSideColumnProps) => (
  <S.Wrapper>
    <S.ButtonsWrapper>
      <S.ButtonsTopWrapper>
        <Button
          icon={leftButtonIcon}
          outline={isLeftButtonOutline}
          onClick={handleOnLeftButtonClick}
        >
          {leftButtonLabel}
        </Button>
        <Button
          icon={rightButtonIcon}
          outline={true}
          as={'a'}
          href={urlLinkRightButtonClick}
          target={'_blank'}
          onClick={handleOnRightButtonClick}
        >
          {rightButtonLabel}
        </Button>
      </S.ButtonsTopWrapper>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default TextSideColumn
