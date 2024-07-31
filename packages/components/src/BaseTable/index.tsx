/*
 * @Author: HuangJX 17388766232@163.com
 * @Date: 2024-07-24 08:47:16
 * @LastEditors: HuangJX 17388766232@163.com
 * @LastEditTime: 2024-07-31 10:38:04
 * @FilePath: \antd-core\packages\components\src\BaseTable\index.tsx
 * @Description: 基础表格组件
 */
import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { Table } from "antd";
import type {
  ITableProps,
  ITableHandle,
  IColumnType,
  ISearchItem,
} from "./shared";
import TableSearch from "./components/Search";

const BaseTable = <T,>(props: ITableProps<T>, ref: Ref<ITableHandle>) => {
  const [columns, setColumns] = useState<IColumnType<T>[]>([]);
  const [dataSource, setDataSource] = useState<T[]>([]);
  const [searchItem, setSearchItem] = useState<ISearchItem[]>([]);

  const rowKey = props?.rowKey || "id";

  useEffect(() => {
    const searchItem = props.columns
      .filter((v) => !v.hideInSearchForm)
      .map((v) => ({
        prop: v.dataIndex as string,
        label: v.title as string,
        valueType: v.valueType,
        render: v.searchRender,
        valueEnum: v.valueEnum,
        valueOption: v.valueOption,
      }));
    setSearchItem(searchItem);
    setColumns(props.columns);
  }, [props.columns]);

  useEffect(() => {
    if (props.request) {
      props.request().then((res) => {
        setDataSource(res.dataSource);
      });
    } else {
      setDataSource(props.dataSource || []);
    }
  }, [props.dataSource, props.request]);

  const doReload = () => {};

  useImperativeHandle(ref, () => ({
    doReload,
  }));

  return (
    <div>
      <TableSearch searchItem={searchItem} />
      {/* @ts-ignore */}
      <Table columns={columns} dataSource={dataSource} rowKey={rowKey} />
    </div>
  );
};

export default forwardRef(BaseTable) as <T>(
  props: ITableProps<T> & { ref?: Ref<ITableHandle> },
) => ReturnType<typeof BaseTable>;
