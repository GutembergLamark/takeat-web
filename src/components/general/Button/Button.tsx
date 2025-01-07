/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { MotionButton } from "@/utils/libs/motion";
import style from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

export function Button({
  type,
  styleType,
  label,
  children,
  buttonProps,
  linkProps,
  addClass = "",
  color,
}: ButtonProps) {
  const Type = type == "link" ? Link : MotionButton;

  return (
    <Type
      aria-label={label}
      className={`${style.button} ${style[`button--${styleType}`]} ${addClass}`}
      {...((type == "link" ? { ...linkProps } : {}) as any)}
      {...((type == "button" ? { ...buttonProps } : {}) as any)}
      data-color={color ? color : undefined}
    >
      {children}
    </Type>
  );
}
