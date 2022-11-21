import FormSignUp from 'components/FormSignUp'
import Auth from 'templates/Auth'

export default function SignUp() {
  return (
    <Auth signType="sign-up">
      <FormSignUp />
    </Auth>
  )
}
