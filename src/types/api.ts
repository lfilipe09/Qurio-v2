export type PackInsideGroup = {
  attributes: {
    slug: string
  }
}

export type Formats = {
  attributes: {
    name: string
  }
}

export type PostInsideGroup = {
  id: string
  attributes: {
    title: string
    slug: string
    cover: {
      data: {
        attributes: {
          alternativeText: string
          url: string
        }
      }
    }
    formats: {
      data: Formats[]
    }
  }
}

export type PostThumbProps = {
  id: string
  slug: string
  title: string
  imageUrl: string
  imageAlt: string
  formats: string[]
}

export type PackProps = {
  title: string
  slug: string
  chaptersSlug?: string[]
  description: string
  release: Date
  authors: string[]
  readingHours: number
  readingMinutes: number
  backgroundUrl: string
  posts: PostThumbProps[]
}

export type ResultObject = {
  id?: string | null
  title?: string | null
  description?: string | null
}

export type OptionObject = {
  id?: string
  title: string
  points?: number
  quizResult?: ResultObject
}

export type QuestionObject = {
  id?: string
  title: string
  options: OptionObject[]
}

export type PointQuizResultProps = {
  title: string
  description?: string
  minPoint: number
  maxPoint: number
}

export type QuizProps = {
  quizType: 'point' | 'frequency'
  title: string
  description?: string
  questions: QuestionObject[]
  pointQuizResults?: PointQuizResultProps[]
  frequencyQuizResults?: ResultObject[]
}

export type ImageAPIProps = {
  id: string
  desktop: {
    data: {
      id: string
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
  mobile: {
    data: {
      id: string
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

export type QuizResultAPIProps = {
  id: string
  attributes: {
    title: string
    description?: string
  }
}

export type OptionAPIProps = {
  id: string
  title: string
  quiz_result?: {
    data: QuizResultAPIProps
  }
  points?: number
}

export type QuestionAPIProps = {
  id: string
  title: string
  option: OptionAPIProps[]
}

export type PointQuizAPIProps = {
  id: string
  title: string
  description?: string
  min_point: number
  max_point: number
}

export type QuizzesAPIProps = {
  id: string
  attributes: {
    title: string
    quiz_type: 'Quiz_de_pontuacao' | 'Quiz_de_frequencia'
    question: QuestionAPIProps[]
    description?: string
    point_quiz_result?: PointQuizAPIProps[]
  }
}

export type OptionSurveyAPIProps = {
  id: string
  title: string
  frequency: number
}

export type SurveysAPIProps = {
  id: string
  attributes: {
    title: string
    description?: string
    option: OptionSurveyAPIProps[]
  }
}

export type OptionSurveyObject = {
  id?: string
  title: string
  frequency?: number
}

export type SurveyDataProps = {
  title: string
  description?: string | null
  option: OptionSurveyObject[]
}

export type Survey = {
  id: string
  data: SurveyDataProps
}

export type SurveyProps = {
  id: string
  title: string
  description?: string | null
  options: OptionSurveyObject[]
  handleOnClick?: (survey: Survey) => void
}

export type ContentAPIProps = {
  id: string
  content: string
  images_display: ImageAPIProps[]
  quizzes: {
    data: QuizzesAPIProps[]
  }
  surveys: {
    data: SurveysAPIProps[]
  }
}

export type ResponsiveImageProps = {
  desktop: {
    url: string
    alternativeText: string
  }
  mobile: {
    url: string
    alternativeText: string
  }
}

export type PostProps = {
  title: string
  packSlug: string
  authors: string[]
  category: string
  createdAt: string
  imageUrl: string
  reference: string
  slideUrl: string
  originUrl: string
  contents: (string | QuizProps | SurveyProps | ResponsiveImageProps)[]
}

export type PostSlugAPI = {
  id: string
  attributes: {
    slug: string
  }
}
