import { Button } from "antd";
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
    },
    {
      title: "年龄",
      dataIndex: "age",
      render(text) {
        return <span>{text}岁</span>;
      },
    },
    {
      title: "地址",
      dataIndex: "address",
      valueType: "BaseDict",
      additionalProps: {
        dictType: "address",
      },
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
      <BaseTable<IDataType>
        columns={columns}
        request={getList}
        antdTableProps={{
          rowSelection: {
            columnWidth: "100px",
            fixed: true,
          },
        }}
        toolBar={{
          customNode: (
            <>
              <Button>自定义按钮1</Button>
              <Button>自定义按钮2</Button>
            </>
          ),
        }}
      />
    </div>
  );
};

export default App;
