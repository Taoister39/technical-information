import EChartsReact from "echarts-for-react";
import React from "react";
import type { FC } from "react";

const TechnologyLine: FC = () => {
  const option = {
    title: {
      text: "长时间编程语言流行指数",
      subtext: "数据来源：TIOBE",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: [
        "Python",
        "C",
        "Java",
        "C++",
        "C#",
        "Prolog",
        "Lisp",
        "Pascal",
        "JavaScript",
      ],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["2022", "2017", "2012", "2007", "2002", "1997", "1992", "1987"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Python",
        type: "line",
        stack: "总量",
        areaStyle: { normal: {} },
        data: [1, 5, 8, 7, 13, 28, 17],
      },
      {
        name: "C",
        type: "line",
        stack: "总量",
        areaStyle: { normal: {} },
        data: [2, 2, 1, 2, 2, 1, 1, 1],
      },
      {
        name: "Java",
        type: "line",
        stack: "总量",
        areaStyle: { normal: {} },
        data: [3, 1, 2, 1, 1, 16],
      },
      {
        name: "C++",
        type: "line",
        stack: "总量",
        areaStyle: { normal: {} },
        data: [4, 3, 3, 3, 3, 2, 2, 5],
      },
      {
        name: "C#",
        type: "line",
        stack: "总量",
        areaStyle: { normal: {} },
        data: [5, 4, 5, 8, 12],
      },
      {
        name: "Prolog",
        type: "line",
        stack: "总量",
        areaStyle: { normal: {} },
        data: [27, 32, 32, 27, 16, 18, 14, 3],
      },
      {
        name: "Lisp",
        type: "line",
        stack: "总量",
        areaStyle: { normal: {} },
        data: [31, 31, 13, 16, 14, 9, 4, 2],
      },
      {
        name: "Pascal",
        type: "line",
        stack: "总量",
        areaStyle: { normal: {} },
        data: [251, 124, 14, 21, 99, 12, 3, 6],
      },
      {
        name: "JavaScript",
        type: "line",
        stack: "总量",
        areaStyle: { normal: {} },
        data: [7, 7, 10, 9, 8, 21],
      },
    ],
  };
  return <EChartsReact option={option} />;
};

export default TechnologyLine;
