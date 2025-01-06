import { InputHTMLAttributes } from "react";

export interface InputProps {
  attributes: Attributes;
  label: string;
  error?: string;
  mask?: never;
}

interface Attributes extends InputHTMLAttributes<HTMLInputElement> {
  onAccept?: (value: string, mask: unknown) => void;
}
