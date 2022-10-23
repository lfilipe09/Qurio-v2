import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  initialValue?: string
  onInputChange?: (value: string) => void
  disabled?: boolean
  error?: string
  label?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  minimal?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  initialValue,
  onInputChange,
  disabled,
  error,
  name,
  label,
  icon,
  minimal,
  iconPosition,
  placeholder,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error} minimal={minimal}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          placeholder={placeholder}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
