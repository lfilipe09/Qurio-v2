import { Landscape } from '@styled-icons/remix-fill'
import * as S from './styles'

export type MultipleFoldersProps = {
  imgsUrl?: string[]
}

const MultipleFolders = ({ imgsUrl }: MultipleFoldersProps) => (
  <S.Wrapper>
    {imgsUrl && imgsUrl.length > 0 ? (
      imgsUrl.map((imgUrl, index) => {
        return index === 0 ? (
          <S.ImageFull bg={imgUrl}></S.ImageFull>
        ) : (
          <S.ImageHalf bg={imgUrl} index={index}></S.ImageHalf>
        )
      })
    ) : (
      <S.ImageEmpty>
        <Landscape />
      </S.ImageEmpty>
    )}
  </S.Wrapper>
)

export default MultipleFolders
