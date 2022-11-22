import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'
import Link from 'next/link'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ username, email }: FormProfileProps) => (
  <>
    <Heading lineBottom size="small">
      Meu perfil
    </Heading>

    <S.Form>
      <TextField
        name="Nome completo"
        placeholder="Nome completo"
        label="Nome Completo"
        initialValue={username}
        minimal
      />

      <TextField
        name="email"
        type="email"
        placeholder="E-mail"
        label="E-mail"
        initialValue={email}
        minimal
      />
      <S.ButtonContainer>
        <Link href={`/forgot-password?email=${email}`} passHref>
          <Button minimal size="medium" as="a">
            Resetar senha
          </Button>
        </Link>
        <Button size="medium">Salvar</Button>
      </S.ButtonContainer>
    </S.Form>
  </>
)

export default FormProfile
