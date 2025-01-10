import { ReactNode } from "react";

export interface DefaultModalProps {
  children: ReactNode;
  setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DefaultModalRef {
  showModal(): void;
  closeModal(): void;
  open: boolean;
}
