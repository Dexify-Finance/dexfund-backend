import { AssetPriceDto } from "./assetPrice"
type AssetPriceDailyData = {
    open: string,
}
export type AssetDto = {
    id: string,
    symbol: string,
    name: string,
    decimals: number,
    price?: AssetPriceDto,
    priceHistory?: AssetPriceDto[]
}