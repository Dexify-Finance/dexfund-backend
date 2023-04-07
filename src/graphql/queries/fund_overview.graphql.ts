import { DocumentNode, gql } from '@apollo/client/core';
import { FundOverviewFragment } from '../fragments/fundOverview.fragment';
import { PortfolioFragment } from '../fragments/portfolio.fragment';
import { FundMonthlyDataFragment } from '../fragments/fundMonthlyData.fragment';

export const fundOverviewQuery = (id: string): DocumentNode => {
  return gql`
    ${FundOverviewFragment}
    query getFundOverview {
      fund(id: "${id.toLowerCase()}") {
       ...fundOverviewFragment
      }
    }
  `;
};

export const fundOverviewWithHistoryQuery = (
  id: string,
  from: number,
  to: number = Math.ceil(new Date().getTime() / 1000),
): DocumentNode => {

  return gql`
    ${FundOverviewFragment}
    ${PortfolioFragment}
    ${FundMonthlyDataFragment}
    query getFundOverviewWithHistory {
      fund(id: "${id.toLowerCase()}") {
        ...fundOverviewFragment

        # Portfolio history from, to
        portfolioHistory(
          where: { timestamp_gte: ${from.toString()} }
          orderBy: timestamp
          orderDirection: asc
        ) {
          ...portfolioFragment
        }
        lastPortfolio: portfolioHistory(
          where: { timestamp_lt: ${to.toString()} }
          orderBy: timestamp
          orderDirection: desc
          first: 1
        ) {
          timestamp
          ...portfolioFragment
        }

        firstPortfolio: portfolioHistory(
          where: { timestamp_lt: ${from.toString()} }
          orderBy: timestamp
          orderDirection: desc
          first: 1
        ) {
          timestamp
          ...portfolioFragment
        }

        # Share history from, to
        sharesHistory (
          where: { timestamp_gte: ${from.toString()} }
          orderBy: timestamp
          orderDirection: asc
        ) {
          timestamp
          totalSupply
        }
        lastShare: sharesHistory (
          where: { timestamp_lt: ${to.toString()} }
          orderBy: timestamp
          orderDirection: desc
          first: 1
        ) {
          timestamp
          totalSupply
        }
        firstShare: sharesHistory (
          where: { timestamp_lt: ${from.toString()} }
          orderBy: timestamp
          orderDirection: desc
          first: 1
        ) {
          timestamp
          totalSupply
        }

        monthlyStates {
          ...fundMonthlyDataFragment
        }
      }
    }
  `;
};
