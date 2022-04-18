import * as S from './styles'

export type SummaryProps = {
  topics: string[]
  focusedIndex: number
  isManySections?: boolean
  numberOfSection?: string
}

const Summary = ({
  focusedIndex,
  topics,
  isManySections,
  numberOfSection = '1'
}: SummaryProps) => (
  <S.Wrapper>
    <S.Title>SUMÁRIO {isManySections && `- SEÇÃO ${numberOfSection}`}</S.Title>
    {topics.map((topic, index) => (
      <S.SummaryList key={index} isFocused={focusedIndex === index}>
        {index + 1}. {topic}
      </S.SummaryList>
    ))}
  </S.Wrapper>
)

export default Summary
