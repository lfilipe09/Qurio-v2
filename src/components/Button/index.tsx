import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  icon?: JSX.Element
  minimal?: boolean
  outline?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  icon,
  minimal,
  outline,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    hasIcon={!!icon && true}
    minimal={minimal}
    outline={outline}
    {...props}
  >
    {!!icon && icon} {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
