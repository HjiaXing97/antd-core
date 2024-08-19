import { FC, lazy, Suspense } from "react";
import { type ValueType } from "../../shared";
import componentMap from "../../../packages";

interface TableColumnProps {
  text: any;
  record: any;
  index: number;
  valueType: ValueType;
  prop: string;
  additionalProps: Record<string, any> | undefined;
}

const TableColumn: FC<TableColumnProps> = (props) => {
  const Component = componentMap[props.valueType];
  if (!Component) return <div>组件未找到,请检查valueType</div>;

  const LazyComponent = lazy(Component);

  if (props.valueType === "BaseDict") {
    console.log(props.additionalProps);

    return (
      <Suspense fallback={<div>加载中....</div>}>
        <LazyComponent {...props} />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<div>加载中....</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default TableColumn;
