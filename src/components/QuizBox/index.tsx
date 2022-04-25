import Button from 'components/Button'
import Radio from 'components/Radio'
import { useState } from 'react'
import * as S from './styles'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

export type itemQuestionProps = {
  questions: string[]
  results: string[]
}

export type QuizBoxProps = {
  items: itemQuestionProps
  isYesOrNo?: boolean
  ChartResult?: boolean
}

const QuizBox = ({
  items
}: // ChartResult = true,
// isYesOrNo = true
QuizBoxProps) => {
  const [indexQuestion, setIndexQuestion] = useState(0)
  const [yesOrNo, setYesOrNo] = useState('yes')
  const [result, setResult] = useState<string[]>([])
  const [finalResult, setFinalResult] = useState<number[]>([1, 1, 1, 1])
  // const result: string[] = []

  const resultCalculate = (value: string[]) => {
    const tempArray = [1, 1, 1, 1]
    value.map((point, index) => {
      if (point === 'yes') {
        switch (index) {
          case 0:
            tempArray[0] += 1
            break
          case 1:
            tempArray[1] += 1
            break
          case 2:
            tempArray[3] += 1
            break
          case 3:
            tempArray[1] += 1
            break
          case 4:
            tempArray[2] += 1
            break
          case 5:
            tempArray[2] += 1
            break
          case 6:
            tempArray[3] += 1
            break
          case 7:
            tempArray[0] += 1
            break
        }
      }
      console.log('olha como tá ficando o final result', tempArray)
    })
    setFinalResult(tempArray)
  }

  ChartJS.register(ArcElement, Tooltip, Legend)

  const labels = items.results

  const data = {
    labels: labels,
    datasets: [
      {
        label: '# of Votes',
        data: finalResult,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }
    ]
  }

  return (
    <S.Wrapper>
      {items.questions.map((question, index) => (
        <S.ItemWrapper isHidden={index !== indexQuestion} key={question}>
          <p>Pergunta {`${indexQuestion + 1}/${items.questions.length}`}</p>
          <h3>{question}</h3>
          <div>
            <Radio
              label="Sim"
              labelFor={`yes${index}`}
              id={`yes${index}`}
              name="nome"
              value={`yes${index}`}
              labelColor={'black'}
              defaultChecked
              onCheck={() => setYesOrNo('yes')}
            />
          </div>
          <div>
            <Radio
              label="Não"
              labelFor={`no${index}`}
              id={`no${index}`}
              name="nome"
              value={`no${index}`}
              labelColor={'black'}
              onCheck={() => setYesOrNo('no')}
            />
          </div>
        </S.ItemWrapper>
      ))}
      {items.questions.length <= indexQuestion ? (
        <Pie data={data} />
      ) : (
        <Button
          onClick={() => {
            // result.push(yesOrNo)
            setResult([...result, yesOrNo])
            setIndexQuestion(indexQuestion + 1)
            indexQuestion === items.questions.length - 1 &&
              resultCalculate(result)
          }}
        >
          Próximo
        </Button>
      )}
    </S.Wrapper>
  )
}

export default QuizBox
