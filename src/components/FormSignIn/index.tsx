import { useState } from 'react'
import Link from 'next/link'

import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'

import { FormError, FormLoading, FormWrapper } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'
import { FieldErrors, signInValidate } from 'utils/validations'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    //Antes de fazer o signIn, valida primeiro
    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    setLoading(false)

    // jogar o erro
    setFormError('username or password is invalid')
  }

  return (
    <FormWrapper>
      <S.Title>Boas-vindas</S.Title>
      <S.Subtitle>
        Não possui um cadastro?{' '}
        <Link href="/sign-up" passHref>
          <a>Faça o cadastro</a>
        </Link>
      </S.Subtitle>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <Link href="/forgot-password" passHref>
          <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
        </Link>
        <Button type="submit" disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
