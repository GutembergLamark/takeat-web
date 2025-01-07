/* eslint-disable @typescript-eslint/no-explicit-any */

import { ZodEffects, ZodObject } from "zod";

export default interface IValidator {
  validate<T>(
    data: T,
    schema: ZodObject<any> | ZodEffects<ZodObject<any>>
  ): boolean;
  errors<T>(
    data: T,
    schema: ZodObject<any> | ZodEffects<ZodObject<any>>
  ): T | object;
}
