import Button from 'components/Button'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import Radio from 'components/Radio'
import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { OptionSurveyObject, SurveyProps } from 'types/api'
import * as S from './styles'
import theme from 'styles/theme'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Survey = ({
  options,
  title,
  description,
  handleOnClick,
  id
}: SurveyProps) => {
  const [surveyOption, setSurveyOption] = useState(options[0].title)
  const [surveySubmited, setSurveySumbited] = useState(false)
  const [surveyKeys, setSurveyKeys] = useState(
    options.map((option) => ({ [option.title]: option.frequency }))
  )
  const [surveyResult, setSurveyResults] = useState<(number | undefined)[]>()
  const surveyResultsKeys: string[] = []

  useEffect(() => {
    surveyKeys.map((surveyKey) =>
      surveyResultsKeys.push(Object.keys(surveyKey)[0])
    )
    const temp = surveyKeys.map(
      (option, index) => option[surveyResultsKeys[index]]
    )
    setSurveyResults(temp)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [surveyKeys])

  const optionsTable = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: title
      }
    }
  }

  const labels = options.map((option) => option.title)
  const data = {
    labels,
    datasets: [
      {
        label: 'Votos gerais',
        data: surveyResult,
        backgroundColor: theme.colors.primary
      }
    ]
  }

  return (
    <>
      <S.Header>
        <div>ENQUETE</div>
        <div>
          <h2>{title}</h2>{' '}
          <div dangerouslySetInnerHTML={{ __html: description as string }} />
        </div>
      </S.Header>
      <S.Wrapper surveySubmited={surveySubmited}>
        {!surveySubmited ? (
          <S.ItemWrapper>
            {options.map((option, indexOption) => (
              <div key={option.id}>
                <Radio
                  label={option.title}
                  labelFor={`${option.title}${option.id}`}
                  id={`${option.title}${option.id}`}
                  name={`${id}`}
                  defaultChecked={indexOption === 0}
                  value={`${option.title}${option.id}`}
                  labelColor={'black'}
                  onCheck={() => setSurveyOption(option.title)}
                />
              </div>
            ))}
            <Button
              type={'button'}
              onClick={() => {
                setSurveySumbited(true)
                setSurveyKeys(
                  surveyKeys.map((surveyKey) =>
                    surveyOption in surveyKey
                      ? {
                          [surveyOption]:
                            (surveyKey[surveyOption] as number) + 1
                        }
                      : surveyKey
                  )
                )
                const newSurvey: OptionSurveyObject[] = []
                options.map((optionMapped) => {
                  optionMapped.title === surveyOption
                    ? newSurvey.push({
                        id: optionMapped.id,
                        frequency: (optionMapped.frequency as number) + 1,
                        title: optionMapped.title
                      })
                    : newSurvey.push({
                        id: optionMapped.id,
                        frequency: optionMapped.frequency,
                        title: optionMapped.title
                      })
                })
                handleOnClick?.({
                  id,
                  data: {
                    title,
                    description,
                    option: newSurvey
                  }
                })
              }}
            >
              Próximo
            </Button>
          </S.ItemWrapper>
        ) : (
          <Bar options={optionsTable} data={data} />
        )}
      </S.Wrapper>
    </>
  )
}

export default Survey
