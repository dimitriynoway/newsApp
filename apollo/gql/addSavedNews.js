import gql from 'graphql-tag';

export default gql`
  mutation (
    $id: String
    $addSavedNewsBody: String
    $addSavedNewsUrlToImage: String
    $addSavedNewsCreatedAt: String
    $addSavedNewsTitle: String
  ) {
    addSavedNews(
      id: $id
      body: $addSavedNewsBody
      urlToImage: $addSavedNewsUrlToImage
      createdAt: $addSavedNewsCreatedAt
      title: $addSavedNewsTitle
    ) {
      title
      body
      urlToImage
      createdAt
      error
    }
  }
`;
