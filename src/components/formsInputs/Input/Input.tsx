import { IMaskInput } from "react-imask";
import { InputProps } from "./Input.types";
import { forwardRef, useState } from "react";
import eyeVisible from "@/assets/svg/eye.svg";
import crossedEye from "@/assets/svg/crossed-eye.svg";
import style from "./Input.module.scss";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ attributes, label, error, mask }, ref) => {
    const [eye, setEye] = useState(false);
    return (
      <fieldset className={style.field}>
        <label htmlFor={attributes.id}>{label}</label>
        {mask ? (
          <IMaskInput
            mask={mask}
            id={attributes?.id}
            name={attributes?.id ?? attributes?.name}
            onAccept={attributes?.onAccept}
            onFocus={attributes?.onFocus}
            type={attributes?.type}
            value={attributes?.value as string | undefined}
            disabled={attributes?.disabled}
            placeholder={attributes?.placeholder}
            ref={ref}
          />
        ) : (
          <input
            ref={ref}
            {...attributes}
            id={attributes?.id}
            name={attributes?.id ?? attributes?.name}
            {...(attributes?.type === "password"
              ? { type: eye ? "text" : "password" }
              : null)}
          />
        )}
        {attributes?.type === "password" ? (
          <img
            src={eye ? eyeVisible : crossedEye}
            width={10}
            height={10}
            alt="eye"
            className={style.field__eye}
            onClick={() => {
              setEye(!eye);
            }}
          />
        ) : null}

        {error ? (
          <span className={style.field__error}>
            * <>{error?.[0]}</>
          </span>
        ) : null}
      </fieldset>
    );
  }
);
