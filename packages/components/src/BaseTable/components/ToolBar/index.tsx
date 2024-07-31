import { forwardRef, useImperativeHandle } from "react";
import { Button, Space, Tooltip } from "antd";
import {
  PlusOutlined,
  UploadOutlined,
  DownloadOutlined,
  UndoOutlined,
  ColumnHeightOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import style from "./style.module.less";
import { IToolBarHandle, IToolBarProps } from "../../shared";

const TableToolBar = forwardRef<IToolBarHandle, IToolBarProps>(
  (
    {
      subTitle,
      showAddBtn = true,
      showExportBtn = true,
      showImportBtn = true,
      customNode,
      customHandleAdd,
      customHandleExport,
      customHandleImport,
    },
    ref,
  ) => {
    const handleAdd = () => {
      if (customHandleAdd) {
        customHandleAdd();
      }
    };
    const handleImport = () => {
      if (customHandleImport) {
        customHandleImport();
      }
    };
    const handleExport = () => {
      if (customHandleExport) {
        handleExport();
      }
    };

    useImperativeHandle(ref, () => ({
      handleAdd,
      handleImport,
      handleExport,
    }));

    return (
      <div className={style.toolBar_box}>
        <div>{subTitle}</div>
        <div className={style.toolBtn}>
          <Space>
            {showAddBtn && (
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={handleAdd}
              >
                新增
              </Button>
            )}
            {showExportBtn && (
              <Button icon={<DownloadOutlined />} onClick={handleImport}>
                导出
              </Button>
            )}
            {showImportBtn && (
              <Button icon={<UploadOutlined />} onClick={handleExport}>
                导入
              </Button>
            )}
            {customNode}
          </Space>
          <div className={style.icon_toolBar}>
            <Space>
              <Tooltip title="刷新">
                <UndoOutlined />
              </Tooltip>
              <Tooltip title="密度">
                <ColumnHeightOutlined />
              </Tooltip>
              <Tooltip title="列设置">
                <SettingOutlined />
              </Tooltip>
            </Space>
          </div>
        </div>
      </div>
    );
  },
);

export default TableToolBar;
