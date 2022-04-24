import Button from 'components/Button'
import TextBoxInput, { TextBoxInputProps } from 'components/TextBoxInput'
import * as S from './styles'

export type TextSideColumnProps = {
  leftButtonLabel: string
  leftButtonIcon: JSX.Element
  isLeftButtonOutline: boolean
  handleOnLeftButtonClick: () => void
  rightButtonLabel: string
  rightButtonIcon: JSX.Element | null
  isRightButtonOutline: boolean
  handleOnRightButtonClick: () => void
  bottomButtonLabel: string
  bottomButtonIcon: JSX.Element
  urlLinkBottomButtonClick: string
} & TextBoxInputProps

const TextSideColumn = ({
  label: textBoxLabel,
  placeholder: textBoxPlaceholder,
  onInput: textBoxOnInput,
  leftButtonLabel,
  rightButtonLabel,
  handleOnLeftButtonClick,
  leftButtonIcon,
  rightButtonIcon,
  handleOnRightButtonClick,
  isLeftButtonOutline = true,
  isRightButtonOutline = true,
  bottomButtonLabel,
  bottomButtonIcon,
  urlLinkBottomButtonClick
}: TextSideColumnProps) => (
  <S.Wrapper>
    <TextBoxInput
      label={textBoxLabel}
      placeholder={textBoxPlaceholder}
      onInput={textBoxOnInput}
    />
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
          outline={isRightButtonOutline}
          onClick={handleOnRightButtonClick}
        >
          {rightButtonLabel}
        </Button>
      </S.ButtonsTopWrapper>
      <Button
        icon={bottomButtonIcon}
        minimal={true}
        as={'a'}
        href={urlLinkBottomButtonClick}
        target={'_blank'}
      >
        {bottomButtonLabel}
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default TextSideColumn
