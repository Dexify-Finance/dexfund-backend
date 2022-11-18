import { LogType } from './../../shared/utility/enums';
export type LogDto = {
  type: LogType;
  message?: string | unknown;
};
