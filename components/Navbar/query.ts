import gql from "graphql-tag";

export const GET_LINKS = gql`
  query GetLinks {
    linksCollection {
      items {
        title
        url
      }
    }
  }
`;