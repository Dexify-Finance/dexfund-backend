import { gql } from '@apollo/client/core';
import { PortfolioFragment } from './portfolio.fragment';

export const FundOverviewFragment = gql`
  ${PortfolioFragment}
  fragment fundOverviewFragment on Fund {
    id
    name
    inception,
    accessor {
      id
      denominationAsset {
        id
        name
        symbol
        decimals
      }
    }
    creator {
      id
      firstSeen
      manager
    }
    manager {
      id
      firstSeen
      manager
    }
    portfolio {
      ...portfolioFragment
    }
  }
`;
