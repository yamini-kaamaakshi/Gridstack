// import React from "react";
// import { ResponsiveBump } from "@nivo/bump";

// const NivoBumpChart = () => {
//   const data = [
//     {
//       id: "team A",
//       data: [
//         { x: 0, y: 6 },
//         { x: 1, y: 8 },
//         { x: 2, y: 5 },
//         { x: 3, y: 7 },
//         { x: 4, y: 10 },
//         { x: 5, y: 6 },
//       ],
//     },
//     {
//       id: "team B",
//       data: [
//         { x: 0, y: 7 },
//         { x: 1, y: 5 },
//         { x: 2, y: 8 },
//         { x: 3, y: 6 },
//         { x: 4, y: 5 },
//         { x: 5, y: 9 },
//       ],
//     },
//     {
//       id: "team C",
//       data: [
//         { x: 0, y: 9 },
//         { x: 1, y: 6 },
//         { x: 2, y: 6 },
//         { x: 3, y: 8 },
//         { x: 4, y: 7 },
//         { x: 5, y: 6 },
//       ],
//     },
//   ];

//   return (
//     <ResponsiveBump
//       data={data}
//       margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
//       colors={{ scheme: "nivo" }}
//       lineWidth={3}
//       pointSize={10}
//       pointColor={{ theme: "background" }}
//       pointBorderWidth={2}
//       pointBorderColor={{ from: "serieColor" }}
//       axisTop={null}
//       axisRight={null}
//       axisBottom={{
//         tickSize: 5,
//         tickPadding: 5,
//         tickRotation: 0,
//       }}
//       axisLeft={{
//         tickSize: 5,
//         tickPadding: 5,
//         tickRotation: 0,
//       }}
//     />
//   );
// };

// export default NivoBumpChart;

import React from "react";
import { ResponsiveBump } from "@nivo/bump";

const NivoBumpChart = () => {
  const data = [
    {
      id: "Serie 1",
      data: [
        { x: "2000", y: 6 },
        { x: "2001", y: 8 },
        { x: "2002", y: 9 },
        { x: "2003", y: 8 },
        { x: "2004", y: 6 },
      ],
    },
    {
      id: "Serie 2",
      data: [
        { x: "2000", y: 7 },
        { x: "2001", y: 2 },
        { x: "2002", y: 2 },
        { x: "2003", y: 10 },
        { x: "2004", y: 3 },
      ],
    },
    {
      id: "Serie 3",
      data: [
        { x: "2000", y: 9 },
        { x: "2001", y: 3 },
        { x: "2002", y: 5 },
        { x: "2003", y: 3 },
        { x: "2004", y: 9 },
      ],
    },
    {
      id: "Serie 4",
      data: [
        { x: "2000", y: 11 },
        { x: "2001", y: 9 },
        { x: "2002", y: 6 },
        { x: "2003", y: 5 },
        { x: "2004", y: 5 },
      ],
    },
    {
      id: "Serie 5",
      data: [
        { x: "2000", y: 5 },
        { x: "2001", y: 12 },
        { x: "2002", y: 7 },
        { x: "2003", y: 1 },
        { x: "2004", y: 12 },
      ],
    },
  ];

  return (
    <ResponsiveBump
      data={data}
      colors={{ scheme: "spectral" }}
      lineWidth={3}
      activeLineWidth={6}
      inactiveLineWidth={3}
      inactiveOpacity={0.15}
      pointSize={10}
      activePointSize={16}
      inactivePointSize={0}
      pointColor={{ theme: "background" }}
      pointBorderWidth={3}
      activePointBorderWidth={3}
      pointBorderColor={{ from: "serie.color" }}
      margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: -36,
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Ranking",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      axisRight={null}
    />
  );
};

export default NivoBumpChart;
