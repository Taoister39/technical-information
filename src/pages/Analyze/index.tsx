import styles from "./index.module.scss";
import React, { FC } from "react";
import { Card, Col, Row } from "antd";
import TechnologyPie from "@/components/TechnologyPie";
import TechnologyLine from "@/components/TechnologyLine";
import DotCharts from "@/components/DotCharts";

const Analyze: FC = () => {
  return (
    <div className={styles["analyze-view"]}>
      <Row style={{ marginTop: "1em" }} gutter={[24, 24]}>
        <Col span={12}>
          <Card>
            <TechnologyPie
              title="前端开发框架"
              subTitle="数据来源：State of JS 2021"
              technologyNames={[
                "React",
                "Vue",
                "Angular",
                "Svelte",
                "Preact",
                "Ember",
                "Lit",
                "Alpine",
                "Solid",
                "Stimulus",
              ]}
              technologyDatas={[
                { name: "React", value: 80 },
                { name: "Vue", value: 51 },
                { name: "Angular", value: 54 },
                { name: "Svelte", value: 20 },
                { name: "Preact", value: 14 },
                { name: "Ember", value: 9 },
                { name: "Lit", value: 7 },
                { name: "Alpine", value: 6 },
                { name: "Solid", value: 3 },
                { name: "Stimulus", value: 2 },
              ]}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <TechnologyPie
              title="移动端和桌面端"
              subTitle="数据来源：State of JS 2021"
              technologyNames={[
                "Electron",
                "React Native",
                "Cordova",
                "Ionic",
                "Expo",
                "Native App",
                "Capacitor",
                "Quasar",
                "NW.js",
                "Tauri",
              ]}
              technologyDatas={[
                { name: "Electron", value: 36 },
                { name: "React Native", value: 34 },
                { name: "Cordova", value: 32 },
                { name: "Ionic", value: 29 },
                { name: "Expo", value: 23 },
                { name: "Native App", value: 19 },
                { name: "Capacitor", value: 14 },
                { name: "Quasar", value: 5 },
                { name: "NW.js", value: 4 },
                { name: "Tauri", value: 2 },
              ]}
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card>
            <TechnologyLine />
          </Card>
        </Col>
        <Col span={24}>
          <Card>
            <DotCharts
              names={[
                "Vite",
                "esbuild",
                "SWC",
                "tsc CLI",
                "Rollup",
                "Parcel",
                "webpack",
                "WMR",
                "Snowpack",
                "Rome",
                "Browserify",
                "Gulp",
              ]}
              title="JS构建工具调查"
              values={[
                {
                  datas: [98, 96, 94, 94, 84, 80, 75, 72, 70, 44, 33, 20],
                  legend: "满意度",
                },
                {
                  datas: [83, 81, 75, 71, 53, 58, 64, 48, 59, 62, 26, 26],
                  legend: "关注度",
                },
                {
                  datas: [30, 26, 7, 79, 39, 31, 89, 1, 10, 1, 34, 63],
                  legend: "使用度",
                },
                {
                  datas: [66, 66, 31, 96, 74, 76, 99, 10, 52, 34, 73, 90],
                  legend: "认知度",
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Analyze;
