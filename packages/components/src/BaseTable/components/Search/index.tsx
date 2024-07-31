import { forwardRef, useImperativeHandle } from "react";
import { Form, Input, Col, Row, Button, Space } from "antd";

import { ISearchItem, ISearchHandle } from "../../shared";
import style from "./styled.module.less";

interface IProps {
  searchItem: ISearchItem[];
}

const TableSearch = forwardRef<ISearchHandle, IProps>((props, ref) => {
  const doSearch = () => {};
  const doReset = () => {};

  useImperativeHandle(ref, () => ({
    doSearch,
    doReset,
  }));

  return (
    <div className={style.search_box}>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        layout="inline"
        labelAlign="left"
      >
        <Row gutter={16} style={{ width: "100%" }}>
          {props.searchItem.map((v) => (
            <Col key={v.prop} span={6}>
              <Form.Item label={v.label} name={v.prop}>
                <Input placeholder={`请输入${v.label}`} />
              </Form.Item>
            </Col>
          ))}
          <Col span={6}>
            <Space>
              <Button type="primary">搜索</Button>
              <Button>重置</Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </div>
  );
});

export default TableSearch;
