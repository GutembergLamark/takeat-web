/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from "react";

export interface InputProps {
  attributes: Attributes;
  label: string;
  error?: string;
  mask?: any;
}

interface Attributes extends InputHTMLAttributes<HTMLInputElement> {
  onAccept?: (value: string, mask: unknown) => void;
}
