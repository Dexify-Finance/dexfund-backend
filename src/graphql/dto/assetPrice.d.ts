import { AssetDto } from "./asset"

export type AssetPriceDto = {
    timestamp?: string
    price: string
}

export type AssetPriceCandleDto = {
    asset: AssetDto,
    from: string,
    to: string,
    open: string,
    high: string,
    low: string,
    close: string
}