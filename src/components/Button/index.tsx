import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  icon?: JSX.Element | null
  minimal?: boolean
  outline?: boolean
  side?: 'left' | 'right'
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  icon,
  minimal,
  outline,
  side = 'left',
  ...props
}: ButtonProps) => (
  <S.Wrapper
    hasIcon={!!icon && true}
    minimal={minimal}
    outline={outline}
    {...props}
  >
    {!!icon && side === 'left' && icon} {!!children && <span>{children}</span>}{' '}
    {!!icon && side === 'right' && icon}
  </S.Wrapper>
)

export default Button
