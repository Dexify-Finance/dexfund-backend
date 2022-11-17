import { logType } from './../utility/enums';
import * as winston from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston/dist/winston.utilities';

const moduleName = 'Dexfund Backend';

const winstonConfig = {
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        nestWinstonModuleUtilities.format.nestLike(moduleName, {
          colors: true,
          prettyPrint: true,
        }),
      ),
    }),
    new winston.transports.File({
      filename: 'log/warn.log',
      level: logType.WARN,
    }),
    new winston.transports.File({
      filename: 'log/error.log',
      level: logType.ERROR,
    }),
    new winston.transports.File({
      filename: 'log/info.log',
      level: logType.INFO,
    }),
  ],
};

export default winstonConfig;
