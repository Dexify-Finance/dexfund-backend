import { CurrencyPriceDto } from "./currency"
import { HoldingDto } from "./holding"
import { PortfolioDto } from "./portfolio"

export type MonthlyDataDto = {
    shares: {
        totalSupply: string
    },
    currencyPrices: CurrencyPriceDto[],
    portfolio: PortfolioDto
}
export type MonthlyStateDto = {
    start: string,
    end: string,
    last: MonthlyDataDto
}