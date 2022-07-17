import { gql } from 'graphql-request'

export const GET_PACK_SLUGS = gql`
  query GET_PACK_SLUGS($limit: Int!) {
    packs(pagination: { limit: $limit }) {
      data {
        id
        attributes {
          slug
        }
      }
    }
  }
`

export const GET_PACK_BY_SLUG = gql`
  query QUERY_PACK_BY_SLUG($filter: String) {
    packs(filters: { slug: { eq: $filter } }) {
      data {
        id
        attributes {
          title
          chapter
          description
          slug
          release
          group_pack {
            data {
              attributes {
                title
                slug
                packs {
                  data {
                    attributes {
                      title
                    }
                  }
                }
              }
            }
          }
          authors {
            data {
              attributes {
                name
              }
            }
          }
          reading_hours
          reading_minutes
          cover {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          posts {
            data {
              id
              attributes {
                title
                slug
                cover {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
                formats {
                  data {
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
export const GET_GROUP_PACK_BY_SLUG = gql`
  query GET_GROUP_PACK_BY_SLUG($filter: String) {
    groupPacks(filters: { slug: { eq: $filter } }) {
      data {
        id
        attributes {
          packs {
            data {
              attributes {
                slug
              }
            }
          }
        }
      }
    }
  }
`
