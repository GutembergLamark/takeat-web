import { ToastContainer } from "react-toastify";
import { ToastProviderProps } from "./ToastProvider.types";
import "react-toastify/dist/ReactToastify.css";
import style from "./ToastProvider.module.scss";

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer
        position="top-center"
        className={style.container}
        autoClose={3000}
      />
    </>
  );
}
