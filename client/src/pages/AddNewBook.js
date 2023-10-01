import React from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd';
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
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const AddNewBook = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['book', 'title']}
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
      name={['book', 'Author']}
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
      name={['book', 'Description']}
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
      name={['book', 'Quantity']}
      label="Quantity"
      rules={[
        {
          required: true,
          type: 'number',
          min: 0,
        },
      ]}
    >
      <InputNumber />
    </Form.Item>
    <Form.Item
      name={['book', 'Department']}
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
          value: 'music',
          label: 'Music',
        },{
          value: 'study',
          label: 'Study',
        },
      ]}
    />
    </Form.Item>
    <Form.Item
      name={['book', 'Comments']}
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
        ...layout.wrapperCol,
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default AddNewBook;
