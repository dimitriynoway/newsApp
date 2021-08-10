import gql from 'graphql-tag';

export default gql`
  mutation (
    $registerEmail: String!
    $registerUsername: String!
    $registerPassword: String!
  ) {
    register(
      email: $registerEmail
      username: $registerUsername
      password: $registerPassword
    ) {
      email
      username
    }
  }
`;
