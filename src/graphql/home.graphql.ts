import { gql } from "graphql-request";

export const HOME_PAGE_STATIC_PROPS = gql`
  query homePageStaticProps {
    projectCollection(limit: 4) {
      items {
        sys {
          id
        }
        image {
          url
          width
          height
        }
        slug
        name
        shortDescription
        category
      }
    }
    talksCollection(limit: 4) {
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

export const PROJECT_STATIC_PROPS = gql`
  query projectStaticProps {
    projectCollection {
      items {
        sys {
          id
        }
        image {
          url
          width
          height
        }
        slug
        name
        shortDescription
        category
      }
    }
  }
`;

export const TALK_STATIC_PROPS = gql`
  query talktStaticProps {
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
