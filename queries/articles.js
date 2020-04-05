import gql from 'graphql-tag';

export const GET_ALL_ARTICLES = gql`
  query Articles {
    articleCollection {
      items {
        sys {
          id
        }
        tag
        title
        image {
          url
          description
        }
        author {
          authorName
          role
        }
        publishDate
      }
    }
  }
`;

export const GET_ARTICLE = gql`
  query Article($tag: String!) {
    articleCollection(where: { tag: $tag }, limit: 1) {
      items {
        tag
        title
        image {
          url
          description
        }
        author {
          authorName
          role
        }
        publishDate
        body {
          json
        }
      }
    }
  }
`;
