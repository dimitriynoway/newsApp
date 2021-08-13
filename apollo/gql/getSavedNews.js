import gql from 'graphql-tag';

export default gql`
  query ($getSavedNewsId: String!) {
    getSavedNews(id: $getSavedNewsId) {
      title
      body
      urlToImage
      createdAt
      error
    }
  }
`;
