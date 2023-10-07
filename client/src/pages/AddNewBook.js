import React from "react";
import { Button, Form, Input, InputNumber, Select, message } from "antd";
import axios from "axios";

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
  const onFinish = (values) => {
    axios
      .post("/add-book", values.book)
      .then((res) => {
        message.success("Book added successfully");
      })
      .catch((err) => {
        message.error(err);
      })
      .finally(() => {
        form.resetFields();
      });
  };

  return(
  <Form
    {...layout}
    form={form}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
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
      </Button>{' '}
      <Button type="default" htmlType="button" onClick={() => form.resetFields()}>
        Reset Fields
      </Button>
    </Form.Item>
  </Form>);
};
export default AddNewBook;
