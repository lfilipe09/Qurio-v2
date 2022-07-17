import Button from 'components/Button'
import Radio from 'components/Radio'
import { useState } from 'react'
import * as S from './styles'
import { QuizProps } from 'types/api'
import { getMostFrequent } from 'utils/mostFrequent'

const Quiz = ({
  questions,
  quizType,
  title,
  description,
  pointQuizResults,
  frequencyQuizResults
}: QuizProps) => {
  const [indexQuestion, setIndexQuestion] = useState(0)
  const [points, setPoints] = useState<number | null>(null)
  const [optionSelected, setOptionSelected] = useState<string>('')
  const [result, setResult] = useState<string[] | number | string>(
    quizType === 'point' ? 0 : []
  )

  return (
    <>
      <S.Header>
        <div>QUIZ</div>
        <div>
          <h2>{title}</h2>{' '}
          <div dangerouslySetInnerHTML={{ __html: description as string }} />
        </div>
      </S.Header>
      <S.Wrapper>
        {!(questions.length === indexQuestion) ? (
          <>
            {questions.map((question, index) => (
              <>
                <S.ItemWrapper
                  isHidden={index !== indexQuestion}
                  key={question.title}
                >
                  <p>Pergunta {`${indexQuestion + 1}/${questions.length}`}</p>
                  <h3>{question.title}</h3>
                  {question.options.map((option, indexOption) => {
                    return (
                      <div key={option.id}>
                        <Radio
                          label={`${option.title}`}
                          labelFor={`${option.title}${option.id}${question.id}`}
                          id={`${option.title}${option.id}${question.id}`}
                          name={`${question.id}`}
                          value={`${option.title}`}
                          defaultChecked={indexOption === 0}
                          labelColor={'black'}
                          onCheck={() => {
                            quizType === 'point'
                              ? setPoints(option.points as number)
                              : setOptionSelected(
                                  option.quizResult?.title as string
                                )
                          }}
                        />
                      </div>
                    )
                  })}
                  <Button
                    type={'button'}
                    onClick={() => {
                      setIndexQuestion(indexQuestion + 1)
                      if (quizType === 'point') {
                        setResult(
                          (result as number) +
                            (points === null
                              ? (question.options[0].points as number)
                              : points)
                        )
                        setPoints(null)
                      } else {
                        result instanceof Array &&
                          setResult([
                            ...result,
                            optionSelected === ''
                              ? (question.options[0].quizResult
                                  ?.title as string)
                              : optionSelected
                          ])
                        setOptionSelected('')
                      }
                      quizType === 'frequency' &&
                        questions.length === indexQuestion + 1 &&
                        setResult(
                          getMostFrequent(
                            (result as string[]).filter(
                              (result) => result !== null
                            )
                          )
                        )
                    }}
                  >
                    Próximo
                  </Button>
                </S.ItemWrapper>
              </>
            ))}
          </>
        ) : (
          <>
            {quizType === 'point' ? (
              pointQuizResults?.map((pointQuizResult) => {
                return (
                  pointQuizResult.minPoint <= result &&
                  result <= pointQuizResult.maxPoint && (
                    <>
                      <S.TitleResult>{pointQuizResult.title}</S.TitleResult>
                      <S.DescriptionResult>
                        {pointQuizResult.description}
                      </S.DescriptionResult>
                    </>
                  )
                )
              })
            ) : (
              <>
                <S.TitleResult>{result}</S.TitleResult>
                <S.DescriptionResult>
                  {frequencyQuizResults?.map((frequencyQuizResult) => {
                    frequencyQuizResult.title === result &&
                      frequencyQuizResult.description
                  })}
                </S.DescriptionResult>
              </>
            )}
          </>
        )}
      </S.Wrapper>
    </>
  )
}

export default Quiz
