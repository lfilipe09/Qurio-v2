import FormProfile from 'components/FormProfile'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import protectedRoutes from 'utils/protected-routes'

export default function Dados() {
  return (
    <Profile>
      <FormProfile />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  //fez esse if para evitar a chamada do apollo caso esteja logado e saia nessa pág
  if (!session) {
    return { props: {} }
  }

  return {
    props: { session }
  }
}
