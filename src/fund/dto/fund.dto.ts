import { ApiProperty } from "@nestjs/swagger";
import { AssetDto } from "src/graphql/dto/asset";
import { ComptrollerDto } from "src/graphql/dto/comptroller";
import { FundUserDto } from "src/graphql/dto/fundUser";
import { FundCategoryType } from "../entity/fund.entity";

export class FundOverviewDto {
    id: string;
}

export class FundOverviewWithHistoryDto {
    timeRange: string
}

type Monthly = {
    year: number,
    month: number,
    aumChangeBips: number,
    sharePriceChangeBips: number
}


export class FundOverviewResponse {
    id: string;
    name?: string;
    inception: string;
    accessor?: ComptrollerDto;
    creator?: FundUserDto;
    manager?: FundUserDto;
    assets?: (AssetDto & {aum: number, amount: number})[];
    aum?: number;
    aum1WAgo?: number;
    totalShares?: number;
    image?: string;
    category?: FundCategoryType;
    description?: string;

    sharePrice?: number;
    sharePrice1WAgo?: number;
    totalShareSupply?: number;
    totalShareSupply1WAgo: number;
}

export class FundOverviewWithHistoryResponse extends FundOverviewResponse {
    sparkline?: string;
    sparkline_shares?: string;
    sharePriceChanges?: number;
    aumChanges?: number;

    aumHistory?: number[];
    sharesHistory?: number[];
    sharePriceHistory?: number[];
    timeHistory?: number[];
    monthlyStates?: Monthly[]
}


export class FundDto extends FundOverviewResponse {

}