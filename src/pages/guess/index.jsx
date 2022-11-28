import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";

export default function FootballGuess() {
  const [form] = Form.useForm();

  return (
    <>
      <div className="w-full h-100 flex justify-center items-center">
        <div className="m-auto flex justify-center items-center">
          <div>Xin mời dự đoán kết quả trận đấu</div>
        </div>
      </div>
      <div className="mt-10">
        <div className="lg:w-1/3 m-auto flex justify-between items-center">
          <p>France</p>
          <p>-</p>
          <p>Argentina</p>
        </div>
        <Form
          form={form}
          onFinish={(values) => {
            console.log("values :>> ", values);
          }}
        >
          <div className="lg:w-1/3 m-auto flex justify-between items-center">
            <div>
              <Form.Item name={"france"}>
                <Input placeholder="Điểm số" />
              </Form.Item>
            </div>
            <div>
              <Form.Item name={"Argentina"}>
                <Input placeholder="Điểm số" />
              </Form.Item>
            </div>
          </div>

          <Form.Item className="mt-10 text-center">
            <Button type="default" ghost danger size="large" htmlType="submit">
              Dự đoán ngay!!!
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
