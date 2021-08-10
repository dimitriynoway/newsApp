import gql from 'graphql-tag';

export default gql`
  mutation ($loginEmail: String!, $loginPassword: String!) {
    login(email: $loginEmail, password: $loginPassword) {
      email
      username
      error
    }
  }
`;
