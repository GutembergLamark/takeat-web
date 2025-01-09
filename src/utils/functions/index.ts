/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Id, Slide, toast, ToastContent, ToastOptions } from "react-toastify";

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
  name: string = "",
  value: string = ""
): void {
  const eventName = !name ? e.target.id ?? "" : name;
  const eventValue = !value ? e.target.value ?? "" : value;

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

  return;
}

/**
 * Remove Cookie
 *
 * @param {string} name
 * @return {void}
 */
export function removeCookie(name: string): void {
  if (!document) return;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  return;
}

type ToastType = "success" | "error" | "info" | "warning" | "default";

export const defaultToastOptions: ToastOptions = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Slide,
};

/**
 * Display toast
 *
 * @param {ToastType} type
 * @param {ToastContent} content
 * @param {ToastOptions} [options=defaultToastOption]
 * @return {Id}
 */
export const showToast = (
  type: ToastType,
  content: ToastContent,
  options: Partial<ToastOptions> = {}
): Id => {
  const optionsToApply = { ...defaultToastOptions, ...options };

  switch (type) {
    case "success":
      return toast.success(content, optionsToApply);
    case "error":
      return toast.error(content, optionsToApply);
    case "info":
      return toast.info(content, optionsToApply);
    case "warning":
      return toast.warn(content, optionsToApply);
    case "default":
      return toast(content, optionsToApply);
    default:
      return toast(content, optionsToApply);
  }
};
