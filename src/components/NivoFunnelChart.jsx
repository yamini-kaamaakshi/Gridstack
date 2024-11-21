import React from "react";
import { ResponsiveFunnel } from "@nivo/funnel";

const NivoFunnelChart = () => {
  const data = [
    {
      id: "step 1",
      value: 100,
      color: "hsl(55, 70%, 50%)",
    },
    {
      id: "step 2",
      value: 80,
      color: "hsl(100, 70%, 50%)",
    },
    {
      id: "step 3",
      value: 60,
      color: "hsl(170, 70%, 50%)",
    },
    {
      id: "step 4",
      value: 50,
      color: "hsl(210, 70%, 50%)",
    },
    {
      id: "step 5",
      value: 40,
      color: "hsl(260, 70%, 50%)",
    },
  ];

  return (
    <ResponsiveFunnel
      data={data}
      margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
      shape="rectangular"
      direction="horizontal"
      valueFormat=".0f"
      colors={{ scheme: "nivo" }}
      borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
      labelColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    />
  );
};

export default NivoFunnelChart;
