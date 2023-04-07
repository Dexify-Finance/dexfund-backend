import { TimeRange, _1D, _1H, _1M, _1W, _1Y, _30M, _3D, _3H, _3M, _6M } from "./constants";

export const getIntervalForTimeRange = (timerange: string): number => {
    switch(timerange) {
        case TimeRange._1D:
            return _30M;
        case TimeRange._1W:
            return _3H;
        case TimeRange._1M:
            return _1D;
        case TimeRange._3M:
            return _3D;
        case TimeRange._6M:
            return _1W;
        case TimeRange._1Y:
            return _1W;
        default:
            return _1M;
    }
}

export const getTimeForTimeRange = (timerange: string): number => {
    switch(timerange) {
        case TimeRange._1D:
            return _1D;
        case TimeRange._1W:
            return _1W;
        case TimeRange._1M:
            return _1M;
        case TimeRange._3M:
            return _3M;
        case TimeRange._6M:
            return _6M;
        case TimeRange._1Y:
            return _1Y;
        case TimeRange.ALL:
            return 2 * _1Y;
        default:
            return _1M;
    }
}