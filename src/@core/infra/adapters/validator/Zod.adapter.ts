/* eslint-disable @typescript-eslint/no-explicit-any */
import { ZodEffects, ZodObject } from "zod";
import IValidator from "./Validator.types";

export default class ZodAdapter implements IValidator {
  validate<T>(data: T, schema: ZodObject<any> | ZodEffects<ZodObject<any>>) {
    const result = schema.safeParse(data);

    return result.success;
  }

  errors<T>(
    data: T,
    schema: ZodObject<any> | ZodEffects<ZodObject<any>>
  ): T | object {
    const result = schema.safeParse(data);

    return result.error ? (result.error?.formErrors.fieldErrors as T) : {};
  }
}
