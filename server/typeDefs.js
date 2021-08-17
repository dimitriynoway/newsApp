import {gql} from 'apollo-server-express';
export default gql`
  type Query {
    getUser: User!
  }
  type SavedNews {
    title: String
    body: String
    urlToImage: String
    publishedAt: String
    error: String
  }
  type User {
    email: String!
    username: String!
  }
  type RegisterRes {
    email: String
    username: String
    error: String
  }
  type LoginRes {
    email: String
    username: String
    error: String
    id: String
  }
  type SavedNewsRes {
    title: String
    body: String
    urlToImage: String
    publishedAt: String
    error: String
  }
  type Mutation {
    register(email: String!, username: String!, password: String!): RegisterRes!
    login(email: String!, password: String!): LoginRes!
    getSavedNews(id: String!): [SavedNews]
    addSavedNews(
      id: String
      title: String
      body: String
      urlToImage: String
      publishedAt: String
    ): SavedNewsRes
  }
`;
