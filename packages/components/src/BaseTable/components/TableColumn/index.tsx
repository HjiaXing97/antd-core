import { FC } from "react";
import { type ValueType } from "../../shared";

interface TableColumnProps {
  text: any;
  record: any;
  index: number;
  valueType: ValueType;
}

const TableColumn: FC<TableColumnProps> = (props) => {
  console.log(props.text);
  console.log(props.record);
  console.log(props.index);
  console.log(props.valueType);

  return <div>TableColumn</div>;
};

export default TableColumn;
