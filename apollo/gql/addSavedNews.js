import gql from 'graphql-tag';

export default gql`
  mutation (
    $id: String
    $addSavedNewsBody: String
    $addSavedNewsUrlToImage: String
    $addSavedNewsPublishedAt: String
    $addSavedNewsTitle: String
  ) {
    addSavedNews(
      id: $id
      body: $addSavedNewsBody
      urlToImage: $addSavedNewsUrlToImage
      publishedAt: $addSavedNewsPublishedAt
      title: $addSavedNewsTitle
    ) {
      title
      body
      urlToImage
      publishedAt
      error
    }
  }
`;
