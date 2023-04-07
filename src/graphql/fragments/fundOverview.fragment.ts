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
