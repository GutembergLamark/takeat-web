/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IListProducts {
  execute(id: string): Promise<any>;
}
