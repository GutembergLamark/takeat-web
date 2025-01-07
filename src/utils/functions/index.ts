/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEvent, Dispatch, SetStateAction } from "react";

/**
 * Change Input
 *
 * @param {ChangeEvent<HTMLInputElement> | any} e
 * @param {Dispatch<SetStateAction<T>>} setValues
 * @param {string} name
 * @param {string} value
 * @return {void}
 */
export function handleChange<T>(
  e: ChangeEvent<HTMLInputElement> | any,
  setValues: Dispatch<SetStateAction<T>>,
  name?: string,
  value?: string
): void {
  const eventName = !name ? e.target.id : name;
  const eventValue = !value ? e.target.value : value;

  setValues((oldValues: T) => {
    return { ...oldValues, [eventName]: eventValue };
  });
}
