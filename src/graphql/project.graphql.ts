import { gql } from "graphql-request";

export const PROJECT_PAGE_STATIC_PROPS = gql`
  query projectPageStaticProps($slug: String!) {
    projectCollection(limit: 1, where: { slug: $slug }) {
      items {
        name
        image {
          url
          width
          height
        }
        shortDescription
        longDescription
        stack
        linkRepo
        linkWebsite
        slug
        category
      }
    }
  }
`;

export const PROJECT_STATIC_PATH = gql`
  query projectStaticPath {
    projectCollection {
      items {
        slug
      }
    }
  }
`;
