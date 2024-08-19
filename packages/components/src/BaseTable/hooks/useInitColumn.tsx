// import { useEffect, useState } from "react";
// import { type IColumnType } from "../shared";
// import TableColumn from "../components/TableColumn";

// const useInitColumn = (list: IColumnType<T>[]): IColumnType<T>[] => {
//   const [column, setColumn] = useState([]);
//   useEffect(() => {
//     const arr = list
//       .filter((v) => !v.hideInTable)
//       .map((v) => ({
//         ...v,
//         render: (text: any, record: any, index: number) => {
//           // 如果传入render函数，则使用render函数渲染
//           if (v.render) return v.render(text, record, index);
//           // 如果传入valueType，则使用valueType渲染
//           if (v.valueType) {
//             return (
//               <TableColumn
//                 text={text}
//                 record={record}
//                 index={index}
//                 valueType={v.valueType}
//                 prop={v.dataIndex as string}
//                 additionalProps={v.additionalProps}
//               />
//             );
//           }
//           return text;
//         },
//       }));

//     setColumn(arr);
//   }, [list]);

//   return column;
// };

// export default useInitColumn;
