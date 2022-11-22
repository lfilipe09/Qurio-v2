import CardFolderSlider, {
  CardFolderSliderProps
} from 'components/CardFolderSlider'
import Heading from 'components/Heading'
import * as S from './styles'

const FolderSliderProfile = ({ items }: CardFolderSliderProps) => (
  <S.Wrapper>
    <Heading lineBottom size="small">
      Minhas pastas
    </Heading>
    <CardFolderSlider items={items} />
  </S.Wrapper>
)

export default FolderSliderProfile
