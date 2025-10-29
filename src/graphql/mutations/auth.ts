import { gql } from '@apollo/client';

// Admin/User login mutation
export const LOGIN_MUTATION = gql`
  mutation TokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      refreshToken
      payload
      user {
        id
        username
        email
        firstName
        lastName
        userType
      }
    }
  }
`;

