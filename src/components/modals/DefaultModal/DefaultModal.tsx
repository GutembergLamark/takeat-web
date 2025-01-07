import {
  AnimatePresence,
  MotionArticle,
  MotionButton,
  MotionDialog,
  MotionDiv,
} from "@/utils/libs/motion";
import style from "./DefaultModal.module.scss";
import { forwardRef, useImperativeHandle, useState } from "react";
import { DefaultModalProps, DefaultModalRef } from "./DefaultModal.types";

export const DefaultModal = forwardRef<DefaultModalRef, DefaultModalProps>(
  ({ children }, ref) => {
    const [open, setOpen] = useState(false);

    function showModal() {
      return setOpen(true);
    }
    function closeModal() {
      return setOpen(false);
    }

    useImperativeHandle(ref, () => ({
      showModal,
      closeModal,
    }));

    return (
      <AnimatePresence mode="sync">
        {open ? (
          <MotionDialog
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={"modal"}
            className={style["modal"]}
            open
          >
            <MotionArticle
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className={style["modal__wrapper"]}
            >
              <MotionButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close modal"
                onClick={() => closeModal()}
              >
                &times;
              </MotionButton>

              <MotionDiv>{children}</MotionDiv>
            </MotionArticle>
          </MotionDialog>
        ) : (
          <></>
        )}
      </AnimatePresence>
    );
  }
);
