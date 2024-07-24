import BaseTable from "./BaseTable";
import type { IColumnType } from "./BaseTable/shared";

interface IDataType {
  name: string;
  age: number;
  address: string;
  id: number;
}

const App = () => {
  const columns: IColumnType<IDataType>[] = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address",
    },
  ];

  const data: IDataType[] = [
    {
      name: "张三",
      age: 18,
      address: "广州",
      id: 1,
    },
    {
      name: "李四",
      age: 20,
      address: "深圳",
      id: 2,
    },
  ];

  const getList = () => {
    return new Promise<{
      dataSource: IDataType[];
      total: number;
    }>((resolve) => {
      resolve({
        dataSource: data,
        total: 2,
      });
    });
  };

  return (
    <div>
      <BaseTable<IDataType> columns={columns} request={getList} />
    </div>
  );
};

export default App;
