import { DocumentNode, gql } from '@apollo/client/core';
import { FundOverviewFragment } from '../fragments/fundOverview.fragment';

export const allFunds = (skip: number, from: number): DocumentNode => {
    return gql`
    ${FundOverviewFragment}
    query funds {
      funds(skip: ${skip}, first: 1000) {
        ...fundOverviewFragment
        # Portfolio history from, to
        firstPortfolio:portfolioHistory(
          where: { timestamp_lt: ${from.toString()} }
          orderBy: timestamp
          orderDirection: desc
          first: 1
        ) {
          ...portfolioFragment
        }
      }
    }
  `;
  }