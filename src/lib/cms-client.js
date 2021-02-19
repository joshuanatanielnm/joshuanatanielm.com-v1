const { GraphQLClient, gql } = require("graphql-request");

const CMS_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/houvt9hwn2b5`;

const CMS_HEADERS = {
  Authorization: `Bearer UdlUp7DrBo6SNDsMBLeidsw-Bc6BTDeP2OBz4JEKdS8`,
};

const client = new GraphQLClient(CMS_ENDPOINT, { headers: CMS_HEADERS });

module.exports = {
  CMS_ENDPOINT,
  CMS_HEADERS,
  client,
  gql,
};
