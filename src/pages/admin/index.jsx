import React, { useEffect, useState } from "react";
import { Input, Table, Row, Col, DatePicker, Space } from "antd";
import moment from "moment";
import { find } from "@/services/prediction";
import dayjs from "dayjs";
import { debounce } from "lodash";

const { RangePicker } = DatePicker;

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
    render: (text) => <a>{moment(text).format("DD/MM/YYYY HH:mm:ss")}</a>,
    sorter: (a, b) =>
      Number(new Date(a.createdDate)) - Number(new Date(b.createdDate)),
  },
];

const data = [
  {
    key: "1",
    name: "Đinh Văn Hoằng",
    phone: "0971000000",
    guessResult: "Argentina 2 - 0 France",
    createdDate: "Tuesday, 31 Oct 2023 00:41:04",
  },
  {
    key: "1",
    name: "Nguyễn Văn A",
    phone: "0971000001",
    guessResult: "Argentina 0 - 2 France",
    createdDate: "Sunday, 25 Dec 2022 04:37:36",
  },
  {
    key: "1",
    name: "Trần Văn B",
    phone: "0971000002",
    guessResult: "Argentina 2 - 1 France",
    createdDate: "Friday, 21 Apr 2023 23:02:43",
  },
  {
    key: "1",
    name: "Phạm Văn C",
    phone: "0971000003",
    guessResult: "Argentina 1 - 2 France",
    createdDate: "Friday, 13 Oct 2023 00:48:48",
  },
];

export default function AdminPage() {
  const [result, setResult] = useState(data);
  const [range, setRange] = useState([dayjs(new Date()), dayjs(new Date())]);
  const [phone, setPhone] = useState(null);

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 20,
    },
  });

  const handleRangeChange = (dates) => {
    if (dates && dates.length > 0) {
      setRange(dates);
    }
  };

  const fetchData = async () => {
    const res = await find({
      fromDate: range && range.length > 0 ? range[0].toDate() : null,
      toDate: range && range.length > 0 ? range[1].toDate() : null,
      limit: 20,
      offset: (tableParams?.pagination?.current - 1) * 20 + 1,
      phone: phone ? phone : null,
    });
    if (res?.success) {
      setResult(res?.data?.data?.elementList);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: res?.data?.data?.total,
        },
      });
    } else {
      alert("Lỗi, vui lòng thử lại");
    }
  };

  useEffect(() => {
    setResult([]);
  }, [range, phone]);

  useEffect(() => {
    fetchData();
  }, [range, phone, tableParams?.pagination?.current]);

  const handleTableChange = (pagination) => {
    setTableParams({
      pagination,
    });
  };

  return (
    <>
      <div className="mt-10 px-4">
        <Row gutter={16} className="mb-2">
          <Col className="gutter-row" lg={6} xs={24}>
            <Input
              placeholder="Tìm kiếm SĐT"
              onChange={debounce((e) => {
                if (e.target.value) {
                  setPhone(e.target.value);
                }
              }, 300)}
            />
          </Col>
          <Col className="gutter-row" lg={6} xs={24}>
            <RangePicker
              defaultValue={range}
              onChange={handleRangeChange}
              className="w-full"
            />
          </Col>
        </Row>

        <Table
          columns={columns}
          dataSource={result}
          pagination={tableParams.pagination}
          onChange={handleTableChange}
          scroll={{ x: "100vw" }}
        />
      </div>
    </>
  );
}
