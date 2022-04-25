import Button from 'components/Button'
import { useState, useRef, useEffect } from 'react'
import * as S from './styles'

export type TextBoxInputProps = {
  label: string
  placeholder: string
  onInput?: (value: string) => void
}

const TextBoxInput = ({ label, placeholder, onInput }: TextBoxInputProps) => {
  const [isFocused, setisFocused] = useState(false)
  const [textInput, setTextInput] = useState('')
  const [isSubmitted, setisSubmitted] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setisFocused(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return (
    <S.Wrapper ref={ref}>
      {isSubmitted ? (
        <S.SumbitWrapper>
          <S.Image src="/img/party.png" alt="thank you"></S.Image>
          <p>Obrigada pela sua contribuição!</p>
        </S.SumbitWrapper>
      ) : (
        <>
          <S.Label>{label}</S.Label>
          <S.Input
            isFocused={isFocused}
            onFocus={() => setisFocused(true)}
            onChange={({ currentTarget: { value } }) => {
              setTextInput(value)
            }}
            placeholder={placeholder}
          />
          <S.ButtonWrapper isFocused={isFocused}>
            {isFocused && (
              <div>
                <Button
                  onClick={async () => {
                    setisSubmitted(true)
                    onInput?.(textInput)
                    setTimeout(() => {
                      setisSubmitted(false)
                    }, 4000)
                  }}
                >
                  Enviar
                </Button>
              </div>
            )}
          </S.ButtonWrapper>
        </>
      )}
    </S.Wrapper>
  )
}

export default TextBoxInput
