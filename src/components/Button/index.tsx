import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  icon?: JSX.Element | null
  minimal?: boolean
  animated?: boolean
  outline?: boolean
  side?: 'left' | 'right'
  color?: 'primary' | 'black' | 'secondary' | 'white'
  size?: 'small' | 'medium'
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  icon,
  minimal,
  animated,
  outline,
  side = 'left',
  size = 'medium',
  color = 'black',
  ...props
}: ButtonProps) => (
  <S.Wrapper
    hasIcon={!!icon && true}
    minimal={minimal}
    animated={animated}
    outline={outline}
    color={color}
    size={size}
    {...props}
  >
    {!!icon && side === 'left' && icon} {!!children && <span>{children}</span>}{' '}
    {!!icon && side === 'right' && icon}
  </S.Wrapper>
)

export default Button
