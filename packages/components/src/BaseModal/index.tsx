/*
 * @Author: HuangJX 17388766232@163.com
 * @Date: 2024-07-24 08:47:16
 * @LastEditors: HuangJX 17388766232@163.com
 * @LastEditTime: 2024-07-24 08:58:20
 * @FilePath: \antd-core\packages\components\src\BaseModal\index.tsx
 * @Description: 基础弹窗组件
 */

import { useState, forwardRef, useImperativeHandle, ReactNode } from "react";

import { Button, Modal } from "antd";
import type { IModalHandles, IModalProps } from "./shared";

const BaseModal = forwardRef<IModalHandles, IModalProps>((props, ref) => {
  const [open, setOpen] = useState(false);
  const modalWidth = props?.width || 520;

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  /**
   * @description 默认footer按钮区域
   * @returns {Array} ReactNode[]
   */
  const footerNode = (): ReactNode[] => {
    return [
      <Button key="cancel" onClick={closeModal}>
        取消
      </Button>,
      <Button type="primary" key="submit" onClick={closeModal}>
        确认
      </Button>,
    ];
  };

  useImperativeHandle(ref, () => ({
    openModal,
  }));

  return (
    <Modal
      title={props.title}
      width={modalWidth}
      open={open}
      footer={footerNode ?? props.footer}
      onCancel={closeModal}
    >
      {props.children ?? <div>111</div>}
    </Modal>
  );
});
export default BaseModal;
