import { gql } from '@apollo/client/core';

export const PortfolioFragment = gql`
  fragment portfolioFragment on PortfolioState {
    timestamp
    holdings {
      amount
      asset {
        id
        symbol
        name
        decimals
        price {
          price
        }
      }
      price {
        price
      }
    }
  }
`;
