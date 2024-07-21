import { ReactNode } from "react";

export interface IModalProps {
  title: string;
  width?: number | string;
  footer?: ReactNode[];
  children: ReactNode;
}

export interface IModalHandles {
  cancel?: () => void;
  openModal: () => void;
}
