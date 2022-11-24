import { mockFolderCard } from 'components/FolderSliderProfile/mock'
import { GetServerSidePropsContext } from 'next'
import FolderTemplate from 'templates/Folder'
import protectedRoutes from 'utils/protected-routes'

export default function Folder() {
  return (
    <FolderTemplate
      amount={31}
      creationDate={new Date()}
      packs={mockFolderCard}
      title={'Workshop 31/11'}
      posts={mockFolderCard.slice(2, 4)}
    />
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
