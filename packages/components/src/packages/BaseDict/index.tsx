import { FC } from "react";

interface IProps {
  text: any;
  record: any;
  index: number;
  prop: string;
  additionalProps: Record<string, any> | undefined;
}
const BaseDict: FC<IProps> = ({
  additionalProps,
  text,
  record,
  index,
  prop,
}) => {
  console.log(additionalProps, text, record, index, prop);

  return <div>BaseDict</div>;
};

export default BaseDict;
