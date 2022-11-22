import FolderSliderProfile from 'components/FolderSliderProfile'
import { mockFolderCard } from 'components/FolderSliderProfile/mock'
import Profile from 'templates/Profile'

export default function Dados() {
  return (
    <Profile>
      <FolderSliderProfile items={mockFolderCard} />
    </Profile>
  )
}
