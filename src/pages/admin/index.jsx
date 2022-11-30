import { useLocation } from "react-router";
import React, { useState } from "react";
import { Input, Table } from "antd";
import moment from "moment";

const columns = [
  {
    title: "Họ tên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Số điện thoại",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Dự đoán tỉ số",
    dataIndex: "guessResult",
    key: "guessResult",
  },
  {
    title: "Thời gian",
    dataIndex: "createdDate",
    key: "createdDate",
    render: (text) => <a>{moment(text).format("MM/DD/YYYY HH:mm:ss")}</a>,
  },
];

const data = [
  {
    key: "1",
    name: "Đinh Văn Hoằng",
    phone: "0971000000",
    guessResult: "Argentina 2 - 0 France",
    createdDate: new Date(),
  },
  {
    key: "1",
    name: "Nguyễn Văn A",
    phone: "0971000001",
    guessResult: "Argentina 0 - 2 France",
    createdDate: new Date(),
  },
  {
    key: "1",
    name: "Trần Văn B",
    phone: "0971000002",
    guessResult: "Argentina 2 - 1 France",
    createdDate: new Date(),
  },
  {
    key: "1",
    name: "Phạm Văn C",
    phone: "0971000003",
    guessResult: "Argentina 1 - 2 France",
    createdDate: new Date(),
  },
];

export default function AdminPage() {
  const { search } = useLocation();
  const [result, setResult] = useState(data);
  return (
    <>
      {search === "?pass=admin@123" ? (
        <div className="mt-10 px-4">
          <Input
            className="w-1/2 my-4"
            placeholder="Tìm kiếm tỉ số"
            onChange={(e) => {
              if (e.target.value) {
                const res = result.filter(
                  (item) =>
                    item.guessResult
                      .replace(/\s/g, "")
                      .includes(e.target.value.replace(/\s/g, "")) ||
                    item.name
                      .replace(/\s/g, "")
                      .includes(e.target.value.replace(/\s/g, "")) ||
                    item.phone
                      .replace(/\s/g, "")
                      .includes(e.target.value.replace(/\s/g, ""))
                );
                setResult(res);
              } else {
                setResult(data);
              }
            }}
          />
          <Table columns={columns} dataSource={result} />
        </div>
      ) : (
        "Bạn không có quyền vào trang này"
      )}
    </>
  );
}
