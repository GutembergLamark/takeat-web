/* eslint-disable @typescript-eslint/no-explicit-any */
declare interface ModuleProps<T = any> {
  fields: T;
  uri: string;
  order?: number;
}
