import React from "react";
import { ResponsivePie } from "@nivo/pie";

const NivoPieChart = () => {
  const data = [
    { id: "A", label: "A", value: 100 },
    { id: "B", label: "B", value: 50 },
    { id: "C", label: "C", value: 25 },
  ];

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: "nivo" }}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
      enableArcLinkLabels={false}
      enableArcLabels={true}
    />
  );
};

export default NivoPieChart;
