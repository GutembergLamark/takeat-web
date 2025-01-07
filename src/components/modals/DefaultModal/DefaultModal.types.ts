import { ReactNode } from "react";

export interface DefaultModalProps {
  children: ReactNode;
}

export interface DefaultModalRef {
  showModal(): void;
  closeModal(): void;
}
