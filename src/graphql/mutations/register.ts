import { gql } from 'graphql-request'

export const CREATE_REGISTER = gql`
  mutation CREATE_REGISTER($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        id
      }
    }
  }
`

export const UPDATE_USER = gql`
  mutation UPDATE_USER($id: ID!, $data: UsersPermissionsUserInput!) {
    updateUsersPermissionsUser(id: $id, data: $data) {
      data {
        id
        attributes {
          username
          email
          provider
          lastLogin
          phone
          company
          position
        }
      }
    }
  }
`
