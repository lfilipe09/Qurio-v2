import Link from 'next/link'
import {
  AccountCircle,
  Call,
  Email,
  ErrorOutline,
  Lock,
  Store,
  Work
} from '@styled-icons/material-outlined'

import { FormWrapper, FormLoading, FormError } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'
import React, { useState } from 'react'
import { FieldErrors, signUpValidate } from 'utils/validations'
import * as S from './styles'
import Dropdown from 'components/Dropdown'
import client from 'graphql/client'
import { CREATE_REGISTER, UPDATE_USER } from 'graphql/mutations/register'

const FormSignUp = () => {
  const [formError, setFormError] = useState('')
  const [loading] = useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({
    username: '',
    phone: '',
    company: '',
    position: 'CEO/Presidente',
    email: '',
    password: ''
  })

  const handleInput = (field: string, value: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValues((s: any) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('')

    const errors = signUpValidate(values)

    console.log('executei em cima')

    console.log('errors', errors)
    if (Object.keys(errors).length) {
      console.log('executei dentro')
      setFieldError(errors)
      return
    }

    console.log('executei embaixo')

    setFieldError({})

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let data: any = {}

    try {
      data = await client.request(CREATE_REGISTER, {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      })
    } catch (err) {
      console.log(err)
    }

    console.log(data)
    try {
      await client.request(UPDATE_USER, {
        id: data?.register.user.id,
        data: {
          phone: values.phone,
          company: values.company,
          position: values.position
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <FormWrapper>
      <S.Title>Crie sua conta</S.Title>
      <S.Subtitle>
        Já possui um cadastro?{' '}
        <Link href="/sign-in" passHref>
          <a>Faça o login</a>
        </Link>
      </S.Subtitle>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          placeholder="Nome completo"
          type="text"
          error={fieldError?.username}
          onInputChange={(v) => handleInput('username', v)}
          icon={<AccountCircle />}
        />
        <S.TextFieldSideBySide>
          <TextField
            name="phone"
            placeholder="Telefone"
            type="text"
            error={fieldError?.phone}
            onInputChange={(v) => handleInput('phone', v)}
            icon={<Call />}
          />
          <TextField
            name="company"
            placeholder="Empresa"
            type="text"
            error={fieldError?.company}
            onInputChange={(v) => handleInput('company', v)}
            icon={<Store />}
          />
        </S.TextFieldSideBySide>
        <TextField
          name="email"
          placeholder="E-mail"
          type="text"
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <Dropdown
          label={'Cargo'}
          icon={<Work size={'1.5rem'} />}
          options={[
            'CEO/Presidente',
            'VP/C-Level',
            'Diretor/Superintendente',
            'Gerente/Coordenador(a)',
            'Analista',
            'Trainee',
            'Estagiário(a)',
            'Consultor(a)',
            'Empreendedor(a)',
            'Autônomo/Freelancer',
            'Professor(a)',
            'Conselheiro(a)',
            'Estudante',
            'Outro'
          ]}
          initialValue={'CEO/Presidente'}
          onDropdownChange={(v) => handleInput('position', v)}
        />
        <TextField
          name="password"
          placeholder="Senha"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirma a senha"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(v) => handleInput('confirm_password', v)}
          icon={<Lock />}
        />

        <Button type="submit">
          {loading ? <FormLoading /> : <span>Sign up now</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}
export default FormSignUp
