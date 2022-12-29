import type { FC } from "react";
import React from "react";
import EChartsReact from "echarts-for-react";

const TechnologyPie: FC<{
  title: string;
  subTitle: string;
  technologyNames: string[];
  technologyDatas: { value: number; name: string }[];
}> = ({ subTitle, title, technologyNames, technologyDatas }) => {
  const option = {
    title: {
      text: title,
      subtext: subTitle,
      x: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: technologyNames,
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: technologyDatas,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return <EChartsReact option={option} />;
};

export default TechnologyPie;
