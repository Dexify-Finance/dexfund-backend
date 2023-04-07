import { gql } from '@apollo/client/core';

export const FundMonthlyDataFragment = gql`
  fragment fundMonthlyDataFragment on MonthlyFundState {
    start
    end
    last {
      shares {
        totalSupply
      }
      currencyPrices(where: { currency: "ETH" }) {
        price
      }
      portfolio {
        holdings {
          price {
            price
          }
          amount
        }
      }
    }
  }
`;
