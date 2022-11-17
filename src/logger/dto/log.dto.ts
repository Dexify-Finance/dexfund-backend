import { LogType } from './../../shared/utility/enums';
export type LogDto = {
  type: LogType;
  location: string;
  message?: string | unknown;
};
