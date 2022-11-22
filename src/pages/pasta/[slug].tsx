import { mockFolderCard } from 'components/FolderSliderProfile/mock'
import FolderTemplate from 'templates/Folder'

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
