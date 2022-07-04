import { gql } from 'graphql-request'

export const GET_POST_BY_SLUG = gql`
  query QUERY_POST_BY_SLUG($filter: String) {
    posts(filters: { slug: { eq: $filter } }) {
      data {
        id
        attributes {
          title
          slug
          likes
          release
          slide_url
          reference
          authors {
            data {
              id
              attributes {
                name
              }
            }
          }
          cover {
            data {
              id
              attributes {
                url
                alternativeText
              }
            }
          }
          origin_url
          category {
            data {
              id
              attributes {
                name
              }
            }
          }
          tags {
            data {
              id
              attributes {
                name
              }
            }
          }
          comments {
            data {
              id
              attributes {
                name
                email
                text
                createdAt
              }
            }
          }
          content {
            id
            content
            images_display {
              id
              desktop {
                data {
                  id
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
              mobile {
                data {
                  id
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
            }
            quizzes {
              data {
                id
                attributes {
                  title
                  question {
                    id
                    title
                    option {
                      id
                      title
                      quiz_result {
                        data {
                          id
                          attributes {
                            title
                            description
                          }
                        }
                      }
                      points
                    }
                  }
                  description
                  point_quiz_result {
                    id
                    title
                    description
                    min_point
                    max_point
                  }
                  quiz_type
                }
              }
            }
            surveys {
              data {
                id
                attributes {
                  title
                  description
                  option {
                    id
                    title
                    frequency
                  }
                }
              }
            }
          }
          pack {
            data {
              id
              attributes {
                slug
                title
              }
            }
          }
          formats {
            data {
              id
              attributes {
                name
              }
            }
          }
          createdAt
        }
      }
    }
  }
`

export const GET_QUIZ_RESULTS = gql`
  query QUERY_QUIZ_RESULT {
    quizResults {
      data {
        id
        attributes {
          title
          description
        }
      }
    }
  }
`

export const UPDATE_SURVEY = gql`
  mutation UPDATE_SURVEY($id: ID!, $data: SurveyInput!) {
    updateSurvey(id: $id, data: $data) {
      data {
        attributes {
          title
          description
          option {
            id
            title
            frequency
          }
        }
      }
    }
  }
`
