import EChartsReact from "echarts-for-react";
import React from "react";
import type { FC } from "react";

const DotCharts: FC<{
  title: string;
  names: string[];
  values: {
    legend: string;
    datas: number[];
  }[];
}> = ({ title, names, values }) => {
  const option = {
    title: {
      text: title,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
        dataZoom: {},
        restore: {},
      },
    },
    tooltip: {},
    legend: {
      data: values.map((item) => item.legend),
    },
    xAxis: {
      data: names,
    },
    yAxis: {},
    series: values.map((item) => ({
      name: item.legend,
      type: "inline",
      data: item.datas,
    })),
    //   [
    //   {
    //     name: "销量",
    //     type: "line",
    //     data: [5, 20, 36, 10, 10, 20],
    //   },
    // ],
  };

  return (
    <EChartsReact
      option={option}
      style={{ height: 400 }}
      opts={{ locale: "FR" }}
    />
  );
};
export default DotCharts;
