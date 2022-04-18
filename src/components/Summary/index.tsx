import * as S from './styles'

export type SummaryProps = {
  topics: string[]
  focusedIndex: number
  isManySections?: boolean
  numberOfSection?: string
  sticky?: boolean
  stickyHeight?: number
}

const Summary = ({
  focusedIndex,
  topics,
  isManySections,
  numberOfSection = '1',
  sticky = false,
  stickyHeight = 0
}: SummaryProps) => (
  <S.Wrapper sticky={sticky} stickyHeight={stickyHeight}>
    <S.Title>SUMÁRIO {isManySections && `- SEÇÃO ${numberOfSection}`}</S.Title>
    {topics.map((topic, index) => (
      <S.SummaryList key={index} isFocused={focusedIndex === index}>
        {index + 1}. {topic}
      </S.SummaryList>
    ))}
  </S.Wrapper>
)

export default Summary
