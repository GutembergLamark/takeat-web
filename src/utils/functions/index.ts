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

  return setValues((oldValues: T) => {
    return { ...oldValues, [eventName]: eventValue };
  });
}

/**
 * Get Cookie
 *
 * @param {string} cname
 * @return {string}
 */
export function getCookie(cname: string): string {
  if (!document) return "";
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");
  for (const cookie of cookies) {
    const c = cookie.trim();
    if (c.startsWith(name)) {
      return c.substring(name.length);
    }
  }
  return "";
}

/**
 * Set Cookie
 *
 * @param {string} name
 * @param {string} value
 * @param {number} days
 * @return {void}
 */
export function setCookie(name: string, value: string, days: number): void {
  if (!document) return;

  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
  console.log(`${name}=${value || ""}${expires}; path=/`);

  return;
}
