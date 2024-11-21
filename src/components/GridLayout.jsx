import React, { useEffect, useRef, useCallback } from "react";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import ReactDOM from "react-dom";
import "./GridLayout.css";
import NivoBarChart from "./NivoBarChart";
import NivoPieChart from "./NivoPieChart";
import NivoLineChart from "./NivoLineChart";
import NivoBumpChart from "./NivoBumpChart";
import NivoFunnelChart from "./NivoFunnelChart";

const GridLayout = () => {
  const gridContainerRef = useRef(null);
  const gridRef = useRef(null);
  const saveTimeoutRef = useRef(null);

  const saveLayout = useCallback(() => {
    if (gridRef.current) {
      const grid = gridRef.current;
      const currentItems = grid.engine.nodes.map((item) => ({
        content: item.content,
        x: item.x,
        y: item.y,
        w: item.w,
        h: item.h,
      }));

      localStorage.setItem("gridItems", JSON.stringify(currentItems));
    }
  }, []);

  useEffect(() => {
    const initializeGridStack = () => {
      const gridContainer = gridContainerRef.current;

      if (gridContainer) {
        const grid = GridStack.init(
          {
            staticGrid: false,
            draggable: {
              handle: ".grid-stack-item-content",
            },
            column: 12,
          },
          gridContainer
        );

        gridRef.current = grid;

        const savedItems = localStorage.getItem("gridItems");

        if (savedItems) {
          const items = JSON.parse(savedItems);
          grid.removeAll();
          grid.load(items);
        } else {
          const defaultItems = [
            { content: "Box 1", x: 0, y: 0, w: 3, h: 2 },
            { content: "Box 2", x: 3, y: 0, w: 3, h: 2 },
            { content: "Box 3", x: 6, y: 0, w: 3, h: 2 },
            { content: "Box 4", x: 9, y: 0, w: 3, h: 2 },
            { content: "Box 5", x: 0, y: 2, w: 3, h: 2 },
            { content: "Box 6", x: 3, y: 2, w: 3, h: 2 },
            { content: "Box 7", x: 6, y: 2, w: 3, h: 2 },
            { content: "Box 8", x: 9, y: 2, w: 3, h: 2 },
          ];

          grid.removeAll();
          grid.load(defaultItems);
          grid.batchUpdate();
        }

        // Render different charts in different boxes
        const box1 = grid
          .getGridItems()
          .find(
            (item) =>
              item.querySelector(".grid-stack-item-content") &&
              item.querySelector(".grid-stack-item-content").textContent ===
                "Box 1"
          );
        if (box1) {
          const box1Content = box1.querySelector(".grid-stack-item-content");

          if (box1Content && !box1Content.querySelector(".chart-container")) {
            const chartElement = document.createElement("div");
            chartElement.classList.add("chart-container");
            box1Content.appendChild(chartElement);

            ReactDOM.render(<NivoLineChart />, chartElement);
          }
        }

        const box2 = grid
          .getGridItems()
          .find(
            (item) =>
              item.querySelector(".grid-stack-item-content") &&
              item.querySelector(".grid-stack-item-content").textContent ===
                "Box 2"
          );
        if (box2) {
          const box2Content = box2.querySelector(".grid-stack-item-content");

          if (box2Content && !box2Content.querySelector(".chart-container")) {
            const chartElement = document.createElement("div");
            chartElement.classList.add("chart-container");
            box2Content.appendChild(chartElement);

            ReactDOM.render(<NivoBarChart />, chartElement);
          }
        }

        const box3 = grid
          .getGridItems()
          .find(
            (item) =>
              item.querySelector(".grid-stack-item-content") &&
              item.querySelector(".grid-stack-item-content").textContent ===
                "Box 3"
          );
        if (box3) {
          const box3Content = box3.querySelector(".grid-stack-item-content");

          if (box3Content && !box3Content.querySelector(".chart-container")) {
            const chartElement = document.createElement("div");
            chartElement.classList.add("chart-container");
            box3Content.appendChild(chartElement);

            ReactDOM.render(<NivoPieChart />, chartElement);
          }
        }

        const box4 = grid
          .getGridItems()
          .find(
            (item) =>
              item.querySelector(".grid-stack-item-content") &&
              item.querySelector(".grid-stack-item-content").textContent ===
                "Box 4"
          );
        if (box4) {
          const box4Content = box4.querySelector(".grid-stack-item-content");

          if (box4Content && !box4Content.querySelector(".chart-container")) {
            const chartElement = document.createElement("div");
            chartElement.classList.add("chart-container");
            box4Content.appendChild(chartElement);

            ReactDOM.render(<NivoFunnelChart />, chartElement);
          }
        }

        const box5 = grid
          .getGridItems()
          .find(
            (item) =>
              item.querySelector(".grid-stack-item-content") &&
              item.querySelector(".grid-stack-item-content").textContent ===
                "Box 5"
          );
        if (box5) {
          const box5Content = box5.querySelector(".grid-stack-item-content");

          if (box5Content && !box5Content.querySelector(".chart-container")) {
            const chartElement = document.createElement("div");
            chartElement.classList.add("chart-container");
            box5Content.appendChild(chartElement);

            ReactDOM.render(<NivoBumpChart />, chartElement);
          }
        }

        grid.on("change", () => {
          if (saveTimeoutRef.current) {
            clearTimeout(saveTimeoutRef.current);
          }

          saveTimeoutRef.current = setTimeout(() => {
            saveLayout();
          }, 500);
        });

        return () => {
          grid.destroy();
          if (saveTimeoutRef.current) {
            clearTimeout(saveTimeoutRef.current);
          }
        };
      }
    };

    const timeoutId = setTimeout(initializeGridStack, 100);
    return () => clearTimeout(timeoutId);
  }, [saveLayout]);

  return (
    <div className="grid-container">
      <div ref={gridContainerRef} className="grid-stack"></div>
    </div>
  );
};

export default GridLayout;
