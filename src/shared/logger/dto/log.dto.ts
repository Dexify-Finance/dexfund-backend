export type LogDto = {
  type: 'info' | 'error' | 'warn';
  message?: string | unknown;
};
