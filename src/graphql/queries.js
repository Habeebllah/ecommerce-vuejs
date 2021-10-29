/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
      id
      name
      category
      price
      old_price
      quantity
      image_url
      description
      createdAt
      updatedAt
    }
  }
`;
export const listProductss = /* GraphQL */ `
  query ListProductss(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        category
        price
        old_price
        quantity
        image_url
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
