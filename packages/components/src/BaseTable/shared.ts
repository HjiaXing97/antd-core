/*
 * @Author: HuangJX 17388766232@163.com
 * @Date: 2024-07-24 08:47:16
 * @LastEditors: HuangJX 17388766232@163.com
 * @LastEditTime: 2024-07-31 15:58:49
 * @FilePath: \antd-core\packages\components\src\BaseTable\shared.ts
 * @Description: 表格类型文件
 */
import type { ColumnType } from "antd/es/table";
import { ReactNode } from "react";

/**
 * @description    表格列类型扩展
 */
export type ValueType =
  | "select"
  | "date"
  | "dateRange"
  | "textarea"
  | "password"
  | "radio"
  | "checkbox"
  | "upload"
  | "money"
  | "dict"
  | "option"
  | "index"
  | ((text: any, record: any, index: number) => ReactNode);

export interface IValueOption {
  label?: string;
  value?: string;
  children?: string;
}

export interface ISearchItem {
  prop: string;
  label: string;
  valueType?: ValueType;
  render?: () => ReactNode;
  valueEnum?: any[];
  valueOption?: IValueOption;
}

/**
 * @description 表格列类型扩展
 */
export interface IColumnType<RecordType> extends ColumnType<RecordType> {
  /**
   * 表格自定义列
   */
  render?: (text: any, record: RecordType, index: number) => ReactNode;

  /**
   * 自定义查询表单项
   */
  searchRender?: () => ReactNode;

  /**
   * 表格列是否隐藏
   */
  hideInTable?: boolean;

  /**
   * @description 表单是否隐藏
   */
  hideInForm?: boolean;

  /**
   * @description 搜索表单是否隐藏
   */
  hideInSearchForm?: boolean;

  /**
   * @description 表格列扩展属性
   */
  valueType?: ValueType;

  /**
   * @description 表格列二级
   */
  children?: IColumnType<RecordType>[];

  /**
   * @description 字典枚举
   */
  valueEnum?: any[];

  /**
   * @description 枚举配置
   */
  valueOption?: IValueOption;
}

export interface ITableHandle {
  /**
   * @description 重新加载表格数据
   */
  doReload: () => void;
}

export interface ISearchHandle {
  doSearch: () => void;
  doReset: () => void;
}

/**
 * @description 表格工具栏
 */
export interface IToolBarProps {
  customNode?: ReactNode;
  subTitle?: string | ReactNode;
  showAddBtn?: boolean;
  showExportBtn?: boolean;
  showImportBtn?: boolean;
  customHandleAdd?: () => void;
  customHandleImport?: () => void;
  customHandleExport?: () => void;
}

export interface IToolBarHandle {
  handleAdd: () => void;
  handleImport: () => void;
  handleExport: () => void;
}
export interface ITableProps<T> {
  /**
   * @description 表格列
   */
  columns: IColumnType<T>[];

  /**
   * @description 表格数据
   */
  dataSource?: T[];

  request?: () => Promise<{
    dataSource: T[];
    total: number;
  }>;

  /**
   * @description 表格行 key
   */
  rowKey?: "id" | string;

  /**
   * @description 表格加载状态
   */
  loading?: boolean;

  /**
   * @description 表格分页配置
   */
  pagination?: boolean;

  /**
   * @description antd表格原生配置
   */
  antdTableProps?: any;

  toolBar?: IToolBarProps | false;
}
