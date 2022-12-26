import { Col, Row, Statistic } from "antd";
import React from "react";
import type { FC } from "react";

const RankingSurface: FC<{ numbers: number[]; names: string[] }> = ({
  numbers,
  names,
}) => {
  return (
    <Row gutter={[8, 16]}>
      {numbers.map((item, index) => {
        return (
          <Col span={12} key={index}>
            <Statistic title={names[index]} value={item} />
          </Col>
        );
      })}
    </Row>
  );
};
export default RankingSurface;
