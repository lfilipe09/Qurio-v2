import { gql } from 'graphql-request'

export const CREATE_REGISTER = gql`
  mutation CREATE_REGISTER($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        username
        email
        confirmed
        blocked
        role {
          name
        }
      }
    }
  }
`
