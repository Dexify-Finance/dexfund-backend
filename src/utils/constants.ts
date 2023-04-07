export const ADDRESS_LENGTH = 42;
export const GRAPHQL_SERVER =
  'https://api.thegraph.com/subgraphs/name/trust0212/dexify-finance-subgraph';

// Posissible interval
export const _30M = 1800;
export const _1H = 3600;
export const _3H = 3 * _1H;
export const _1D = 24 * _1H;
export const _3D = 3 * _1D;
export const _1W = 7 * _1D;
export const _1M = 30 * _1D;
export const _3M = 3 * _1M;
export const _6M = 6 * _1M;
export const _1Y = 12 * _1M;

// Possible timerame
export const TimeRange = {
  _1D: '1D',
  _1W: '1W',
  _1M: '1M',
  _3M: '3M',
  _6M: '6M',
  _1Y: '1Y',
  ALL: 'ALL',
};

export const FETCH_INTERVAL = 30 * 60 * 1000; // 10min

export const SparkLineConfig = {
  width: 270,
  height: 100,
  stroke: '#57bd0f',
  strokeWidth: 2.25,
  strokeOpacity: 1,
};


export const START_YEAR = 2021;