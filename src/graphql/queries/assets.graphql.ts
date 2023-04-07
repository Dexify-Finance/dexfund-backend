import { DocumentNode, gql } from '@apollo/client/core';

export const assetsQuery = (): DocumentNode => {
  return gql`
    query getAssets {
      assets {
        id
        name
        symbol
        decimals
      }
    }
  `;
};

export const assetPriceHistoryQuery = (
  id: string,
  from: number,
  to: number,
  interval: number,
) => {
  let queries = '';
  for (let i = from; i <= to; i += interval) {
    const subQuery = constructSubQuery(i.toString());
    queries += subQuery;
  }

  return gql`
    query currencyPriceHistory {
      asset(id: "${id}") {
        ${queries}
      }
    }
  `;
};

const constructSubQuery = (timestamp: string): string => {
  return `
      id
      name
      symbol
      decimals
      price_history_${timestamp}: priceHistory(
          where: { timestamp_lte: ${timestamp} }
          orderBy: timestamp
          orderDirection: desc
          first: 1
      ) {
          timestamp
          price
      }
    `;
};
