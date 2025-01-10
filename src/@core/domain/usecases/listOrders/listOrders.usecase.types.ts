/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IListOrders {
  execute(authorization: string): Promise<any>;
}
