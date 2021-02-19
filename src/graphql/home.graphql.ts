import { gql } from "graphql-request";

export const HOME_PAGE_STATIC_PROPS = gql`
  query homePageStaticProps {
    projectCollection {
      items {
        sys {
          id
        }
        slug
        name
        linkWebsite
        shortDescription
      }
    }
    talksCollection {
      items {
        sys {
          id
        }
        name
        description
        date
        links
      }
    }
  }
`;
