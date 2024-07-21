import { type TableColumnType } from "antd";
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
  | ((text: any, record: any, index: number) => ReactNode);

/**
 * @description 表格列类型扩展
 */
export interface ColumnType<RecordType> extends TableColumnType<RecordType> {
  /**
   * 表格自定义列
   */
  render?: (text: any, record: RecordType, index: number) => ReactNode;

  /**
   * 表格列是否隐藏
   */
  hideInTable?: boolean;

  /**
   * 表单是否隐藏
   */
  hideInForm?: boolean;

  /**
   * @description 表格列扩展属性
   */
  valueType?: ValueType;
}
