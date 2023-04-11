import { DocumentNode, gql } from '@apollo/client/core';
import { START_YEAR } from 'src/utils/constants';

export const currencyPriceHistoryQuery = (
  id: string,
  from: number,
  to: number,
  interval: number,
): DocumentNode => {
  let queries = '';
  for (let i = from; i <= to; i += interval) {
    const subQuery = constructSubQuery(i.toString());
    queries += subQuery;
  }

  return gql`
    query currencyPriceHistory {
      currency(id: "${id}") {
        ${queries}
      }
    }
  `;
};

const constructSubQuery = (timestamp: string): string => {
  return `
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

export const currency = (id: string): DocumentNode => {
  return gql`
  query getCurrency {
    currency(id: "${id}") {
      id
      price {
        price
      }
    }
  }
`;
};

export const monthlyEthPriceQuery = (): DocumentNode => {
  let queries = '';
  const currentYear = new Date().getUTCFullYear();
  const currentMonth = new Date().getUTCMonth();
  
  for (let i = START_YEAR; i <= currentYear; i ++) {
    for (let j = 0; j < 12; j ++) {
      const timestamp = (new Date(`${i}-${j + 1}`).getTime() + 30 * 24 * 3600 * 1000) / 1000;
      const subQuery = constructSubQuery(timestamp.toString());
      queries += subQuery;
      if (i === currentYear && j === currentMonth) {
        break;
      }
    }
  }

  const id = "ETH";
  return gql`
    query currencyPriceHistory {
      currency(id: "${id}") {
        ${queries}
      }
    }
  `;
}
