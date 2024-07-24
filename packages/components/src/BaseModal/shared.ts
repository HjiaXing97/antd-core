/*
 * @Author: HuangJX 17388766232@163.com
 * @Date: 2024-07-24 08:47:16
 * @LastEditors: HuangJX 17388766232@163.com
 * @LastEditTime: 2024-07-24 08:53:26
 * @FilePath: \antd-core\packages\components\src\BaseModal\shared.ts
 * @Description: 基础弹窗组件类型文件
 */
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
