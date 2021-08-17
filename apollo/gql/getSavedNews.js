import gql from 'graphql-tag';

export default gql`
  mutation ($getSavedNewsId: String!) {
    getSavedNews(id: $getSavedNewsId) {
      title
      body
      urlToImage
      publishedAt
      error
    }
  }
`;
