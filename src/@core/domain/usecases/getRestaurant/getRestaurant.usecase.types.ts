/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IGetRestaurant {
  execute(id: string): Promise<any>;
}
