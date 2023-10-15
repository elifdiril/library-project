import React from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import useBook from "../hooks/useBook";
import useIsMobile from "../hooks/useIsMobile";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const AddNewBook = () => {
  const [form] = Form.useForm();
  const { addBook } = useBook();
  const isMobile = useIsMobile();

  const onFinish = (values) => {
    addBook(values.book);
    form.resetFields();
  };

  return (
    <div style={{ border: "1px solid #B0578D", padding: "20px", paddingLeft: "0",backgroundColor: "#D988B9", borderRadius: "15px", margin: "auto", marginTop: "20px" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>ADD NEW BOOK</h1>
      <Form
        {...layout}
        form={form}
        name="nest-messages"
        onFinish={onFinish}
        style={{ width: `${isMobile ? "320px" : "600px"}`}}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["book", "title"]}
          label="Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["book", "author"]}
          label="Author"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["book", "description"]}
          label="Description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["book", "quantity"]}
          label="Quantity"
          rules={[
            {
              required: true,
              type: "number",
              min: 0,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["book", "department"]}
          label="Department"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            style={{
              width: 120,
            }}
            options={[
              {
                value: "music",
                label: "Music",
              },
              {
                value: "study",
                label: "Study",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          name={["book", "comments"]}
          label="Comments"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>{" "}
          <Button
            type="default"
            htmlType="button"
            onClick={() => form.resetFields()}
          >
            Reset Fields
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddNewBook;
