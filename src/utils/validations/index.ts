import Joi from 'joi'
import { UsersPermissionsRegisterInput } from 'types/api'

const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const fieldsValidations = {
  fullName: Joi.string().min(5).required().messages({
    'string.empty': `O nome completo não pode ser vazio`,
    'string.min': `O nome completo precisa ter no mínimo 5 dígitos`,
    'any.required': `O campo nome completo é obrigatório`
  }), //tem que ter no min 5 caracteres
  phone: Joi.string().min(9).required().messages({
    'string.empty': `O telefone não pode ser vazio`,
    'string.min': `O telefone precisa ter no mínimo 9 dígitos`,
    'any.required': `O campo telefone é obrigatório`
  }),
  company: Joi.string().required().messages({
    'string.empty': `A empresa não pode ser vazia`,
    'any.required': `O campo empresa é obrigatório`
  }),
  position: Joi.string().required().messages({
    'string.empty': `O cargo não pode ser vazio`,
    'any.required': `O campo cargo é obrigatório`
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .pattern(emailValidation)
    .messages({
      'string.empty': `O e-mail não pode ser vazio`,
      'string.pattern.base': `Este não é um e-mail válido`,
      'any.required': `O campo de e-mail é obrigatório`
    }), //aqui tira a validação se o email digitado é gmail, yahoo, outlook, entre outros, tirou pq nao quer sermto restritivo e nem sempre tá 100% atualizado
  password: Joi.string().required().messages({
    'string.empty': `A senha não pode ser vazio`,
    'string.pattern.base': `Esta não é uma senha válida`,
    'any.required': `O campo senha é obrigatório`
  }),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.required': `confirmar a senha  é obrigatório`,
      'any.only': 'As senhas precisam ser iguais'
    })
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

export function signUpValidate(values: UsersPermissionsRegisterInput) {
  const schema = Joi.object(fieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type SignInValues = Omit<UsersPermissionsRegisterInput, 'username'>
export function signInValidate(values: SignInValues) {
  const { email, password } = fieldsValidations
  const schema = Joi.object({ email, password })

  return getFieldErrors(schema.validate(values, { abortEarly: false })) //O abort false é para ele não parar no primeiro erro, ele verificar todos e avisar ao usuário
}

type ForgotValidateParams = Pick<UsersPermissionsRegisterInput, 'email'>
export function forgotValidate(values: ForgotValidateParams) {
  const { email } = fieldsValidations
  const schema = Joi.object({ email })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ResetValidateParams = {
  password: string
  confirm_password: string
}

export function resetValidate(values: ResetValidateParams) {
  const { confirm_password, password } = fieldsValidations
  const schema = Joi.object({ password, confirm_password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
