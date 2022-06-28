import Button from 'components/Button'
import Radio from 'components/Radio'
import { useState } from 'react'
import * as S from './styles'

export type item = {
  [key: string]: string[]
}

export type itemQuestionProps = {
  questions: item
  results: item
}

export type QuizPointProps = {
  items: itemQuestionProps
  isYesOrNo?: boolean
  ChartResult?: boolean
}

const QuizPoint = ({
  items
}: // ChartResult = true,
// isYesOrNo = true
QuizPointProps) => {
  const [indexQuestion, setIndexQuestion] = useState(0)
  const [points, setPoints] = useState(0)
  const [finalResult, setFinalResult] = useState<number>(0)

  return (
    <S.Wrapper>
      {Object.keys(items.questions).map((key, index) => (
        <S.ItemWrapper isHidden={index !== indexQuestion} key={key}>
          <p>
            Pergunta{' '}
            {`${indexQuestion + 1}/${Object.keys(items.questions).length}`}
          </p>
          <h3>{key}</h3>
          {items.questions[key].map((option, indexOption) => (
            <div key={option}>
              <Radio
                label={option}
                labelFor={`${option}${indexOption}`}
                id={`${option}${indexOption}`}
                name="nome"
                value={`${option}${indexOption}`}
                labelColor={'black'}
                onCheck={() =>
                  setPoints(
                    indexOption !== items.questions[key].length - 1
                      ? indexOption + 1
                      : 0
                  )
                }
              />
            </div>
          ))}
        </S.ItemWrapper>
      ))}
      {Object.keys(items.questions).length <= indexQuestion ? (
        <>
          {finalResult >= 17 ? (
            <>
              <div>Lifelong Learner</div>
              <div>{items.results['Lifelong Learner']}</div>
            </>
          ) : finalResult >= 9 ? (
            <>
              <div>Repertório elástico</div>
              <div>{items.results['Repertório elástico']}</div>
            </>
          ) : (
            <>
              <div>Oportunidade de crescimento</div>
              <div>{items.results['Oportunidade de crescimento']}</div>
            </>
          )}
        </>
      ) : (
        <Button
          onClick={() => {
            setIndexQuestion(indexQuestion + 1)
            setFinalResult(finalResult + points)
            console.log(points)
            console.log(finalResult)
          }}
        >
          Próximo
        </Button>
      )}
    </S.Wrapper>
  )
}

export default QuizPoint
