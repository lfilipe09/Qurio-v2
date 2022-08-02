import { gql } from 'graphql-request'

export const GET_HOMEPAGE = gql`
  query GET_HOMEPAGE {
    homePage {
      data {
        id
        attributes {
          hero_carousel {
            id
            banner {
              id
              ribbon
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              pack {
                data {
                  id
                  attributes {
                    title
                    slug
                    posts {
                      data {
                        id
                        attributes {
                          title
                          slug
                          formats {
                            data {
                              id
                              attributes {
                                name
                              }
                            }
                          }
                        }
                      }
                    }
                    reading_hours
                    reading_minutes
                  }
                }
              }
            }
          }
          simple_carousel {
            id
            title
            pack_card {
              ribbon
              pack {
                data {
                  id
                  attributes {
                    title
                    slug
                    cover {
                      data {
                        attributes {
                          url
                          alternativeText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          highlight {
            id
            title
            cover {
              data {
                id
                attributes {
                  url
                  alternativeText
                }
              }
            }
            button_text
            pack {
              data {
                id
                attributes {
                  title
                  reading_hours
                  reading_minutes
                  posts {
                    data {
                      id
                      attributes {
                        title
                        formats {
                          data {
                            id
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
          upcoming_carousel {
            id
            title
            upcoming_pack {
              id
              title
              cover {
                data {
                  id
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              ribbon
            }
          }
          card_carousel {
            id
            title
            external_pack_card {
              id
              format
              title
              cover {
                data {
                  id
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              link
            }
          }
        }
      }
    }
  }
`
