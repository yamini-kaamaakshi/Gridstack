// import React from "react";
// import { ResponsiveLine } from "@nivo/line";

// const NivoLineChart = () => {
//   const data = [
//     {
//       id: "usa",
//       color: "hsl(200, 70%, 50%)",
//       data: [
//         { x: "plane", y: 150 },
//         { x: "helicopter", y: 20 },
//         { x: "boat", y: 100 },
//         { x: "train", y: 220 },
//         { x: "subway", y: 180 },
//         { x: "bus", y: 110 },
//         { x: "car", y: 260 },
//         { x: "moto", y: 95 },
//         { x: "bicycle", y: 180 },
//         { x: "horse", y: 90 },
//         { x: "skateboard", y: 30 },
//         { x: "others", y: 130 },
//       ],
//     },
//     {
//       id: "germany",
//       color: "hsl(120, 70%, 50%)",
//       data: [
//         { x: "plane", y: 120 },
//         { x: "helicopter", y: 25 },
//         { x: "boat", y: 80 },
//         { x: "train", y: 190 },
//         { x: "subway", y: 160 },
//         { x: "bus", y: 140 },
//         { x: "car", y: 220 },
//         { x: "moto", y: 110 },
//         { x: "bicycle", y: 150 },
//         { x: "horse", y: 70 },
//         { x: "skateboard", y: 40 },
//         { x: "others", y: 140 },
//       ],
//     },
//   ];

//   return (
//     <ResponsiveLine
//       data={data}
//       margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//       xScale={{ type: "point" }}
//       yScale={{
//         type: "linear",
//         min: "auto",
//         max: "auto",
//         stacked: false,
//         reverse: false,
//       }}
//       axisTop={null}
//       axisRight={null}
//       axisBottom={{
//         orient: "bottom",
//         tickSize: 5,
//         tickPadding: 5,
//         tickRotation: 0,
//         legend: "transportation",
//         legendOffset: 36,
//         legendPosition: "middle",
//       }}
//       axisLeft={{
//         orient: "left",
//         tickSize: 5,
//         tickPadding: 5,
//         tickRotation: 0,
//         legend: "count",
//         legendOffset: -40,
//         legendPosition: "middle",
//       }}
//       colors={{ scheme: "nivo" }}
//       lineWidth={3}
//       enablePoints={false}
//       pointSize={10}
//       pointColor={{ theme: "background" }}
//       pointBorderWidth={2}
//       pointBorderColor={{ from: "serieColor" }}
//       enableGridX={false}
//       enableGridY={true}
//       theme={{
//         axis: {
//           domain: {
//             line: {
//               stroke: "#777777",
//               strokeWidth: 1,
//             },
//           },
//           ticks: {
//             line: {
//               stroke: "#777777",
//               strokeWidth: 1,
//             },
//             text: {
//               fill: "#777777",
//             },
//           },
//         },
//       }}
//     />
//   );
// };

// export default NivoLineChart;

import React from "react";
import { ResponsiveLine } from "@nivo/line";

const NivoLineChart = () => {
  const data = [
    {
      id: "japan",
      color: "hsl(182, 70%, 50%)",
      data: [
        { x: "plane", y: 49 },
        { x: "helicopter", y: 54 },
        { x: "boat", y: 145 },
        { x: "train", y: 98 },
        { x: "subway", y: 164 },
        { x: "bus", y: 280 },
        { x: "car", y: 74 },
        { x: "moto", y: 29 },
        { x: "bicycle", y: 85 },
        { x: "horse", y: 290 },
        { x: "skateboard", y: 136 },
        { x: "others", y: 133 },
      ],
    },
    {
      id: "france",
      color: "hsl(230, 70%, 50%)",
      data: [
        { x: "plane", y: 0 },
        { x: "helicopter", y: 61 },
        { x: "boat", y: 197 },
        { x: "train", y: 80 },
        { x: "subway", y: 201 },
        { x: "bus", y: 222 },
        { x: "car", y: 183 },
        { x: "moto", y: 149 },
        { x: "bicycle", y: 295 },
        { x: "horse", y: 137 },
        { x: "skateboard", y: 31 },
        { x: "others", y: 92 },
      ],
    },
    {
      id: "us",
      color: "hsl(276, 70%, 50%)",
      data: [
        { x: "plane", y: 43 },
        { x: "helicopter", y: 25 },
        { x: "boat", y: 13 },
        { x: "train", y: 161 },
        { x: "subway", y: 298 },
        { x: "bus", y: 59 },
        { x: "car", y: 144 },
        { x: "moto", y: 117 },
        { x: "bicycle", y: 36 },
        { x: "horse", y: 171 },
        { x: "skateboard", y: 292 },
        { x: "others", y: 282 },
      ],
    },
    {
      id: "germany",
      color: "hsl(175, 70%, 50%)",
      data: [
        { x: "plane", y: 277 },
        { x: "helicopter", y: 96 },
        { x: "boat", y: 212 },
        { x: "train", y: 296 },
        { x: "subway", y: 219 },
        { x: "bus", y: 297 },
        { x: "car", y: 238 },
        { x: "moto", y: 198 },
        { x: "bicycle", y: 179 },
        { x: "horse", y: 232 },
        { x: "skateboard", y: 291 },
        { x: "others", y: 29 },
      ],
    },
    {
      id: "norway",
      color: "hsl(273, 70%, 50%)",
      data: [
        { x: "plane", y: 55 },
        { x: "helicopter", y: 172 },
        { x: "boat", y: 185 },
        { x: "train", y: 215 },
        { x: "subway", y: 60 },
        { x: "bus", y: 183 },
        { x: "car", y: 20 },
        { x: "moto", y: 0 },
        { x: "bicycle", y: 25 },
        { x: "horse", y: 103 },
        { x: "skateboard", y: 286 },
        { x: "others", y: 35 },
      ],
    },
  ];

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      colors={{ scheme: "category10" }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default NivoLineChart;
