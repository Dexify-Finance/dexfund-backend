import { ApiProperty } from "@nestjs/swagger";
import { AssetDto } from "src/graphql/dto/asset";
import { ComptrollerDto } from "src/graphql/dto/comptroller";
import { FundUserDto } from "src/graphql/dto/fundUser";

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

export class FundOverviewWithHistoryResponse {
    id: string;
    name?: string;
    inception: string;
    accessor?: ComptrollerDto;
    creator?: FundUserDto;
    manager?: FundUserDto;
    assets?: (AssetDto & {aum: number})[];
    aum?: number;
    totalShares?: number;

    sparkline?: string;
    sparkline_shares?: string;

    sharePriceChanges?: number;
    aumChanges?: number;

    aumHistory?: number[];
    sharePriceHistory?: number[];
    timeHistory?: number[];

    monthlyStates?: Monthly[]
}