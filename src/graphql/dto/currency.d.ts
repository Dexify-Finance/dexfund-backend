export type CurrencyDto = {
    id: string;
    price?: CurrencyPriceDto,
    priceHistory?: CurrencyPriceDto[]
}

export type CurrencyPriceDto = {
    timestamp?: string,
    price: string
}


export type CurrencyPriceCandleDto = {
    currency?: CurrencyDto,
    from: string,
    to: string,
    open: string,
    high: string,
    low: string,
    close: string
}