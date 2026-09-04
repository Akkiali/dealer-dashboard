"use client";

import { useEffect, useRef, useState } from "react";
import type { DashboardResponse } from "../types";

import {
   VictoryAxis,
   VictoryBar,
   VictoryChart,
   VictoryTheme,
} from "victory";

export default function VictoryChartComponent({
   data,
}: {
   data: DashboardResponse;
}) {
   const chartRef = useRef<HTMLDivElement>(null);
   const [containerWidth, setContainerWidth] = useState(700);

   useEffect(() => {
      const chartElement = chartRef.current;

      if (!chartElement) {
         return;
      }

      const updateChartWidth = () => {
         setContainerWidth(chartElement.clientWidth);
      };

      updateChartWidth();
      const resizeObserver = new ResizeObserver(updateChartWidth);
      resizeObserver.observe(chartElement);

      return () => resizeObserver.disconnect();
   }, []);

   const isMobile = containerWidth < 600;
   const chartWidth = Math.max(isMobile ? 520 : 300, containerWidth);
   const barOffset = isMobile ? 0.08 : 0.12;
   const months = data.target_vs_achievement.map((item) => item.month.slice(0, 3));

   const targetData = data.target_vs_achievement.map((item, index) => ({
      x: index + 1 - barOffset,
      y: item.target_quantity,
   }));

   const achievedData = data.target_vs_achievement.map((item, index) => ({
      x: index + 1 + barOffset,
      y: item.achieved_quantity,
   }));

   return (
      <div ref={chartRef} className="h-full w-full overflow-x-auto">
         <VictoryChart
            width={chartWidth}
            theme={VictoryTheme.material}
            domainPadding={{ x: isMobile ? 12 : 60 }}
            padding={{
               top: isMobile ? 34 : 55,
               bottom: isMobile ? 40 : 50,
               left: isMobile ? 28 : 42,
               right: isMobile ? 4 : 12,
            }}
         >
            <VictoryAxis
               tickValues={months.map((_, index) => index + 1)}
               tickFormat={months}
               style={{
                  axis: { stroke: "#8097ad", strokeWidth: 1.5 },
                  ticks: { stroke: "#8097ad", size: 5 },
                  tickLabels: {
                     fontSize: isMobile ? 9 : 12,
                     fontWeight: 600,
                     padding: isMobile ? 5 : 8,
                     fill: "#43546b",
                  },
               }}
            />
            <VictoryAxis
               dependentAxis
               style={{
                  axis: { stroke: "#8097ad", strokeWidth: 1.5 },
                  grid: { stroke: "#d5e0eb", strokeDasharray: "5,5", strokeWidth: 1.1 },
                  ticks: { stroke: "#8097ad", size: 5 },
                  tickLabels: {
                     fontSize: isMobile ? 9 : 11,
                     fontWeight: 600,
                     padding: isMobile ? 4 : 6,
                     fill: "#43546b",
                  },
               }}
            />

            <VictoryBar
               data={targetData}
               barWidth={isMobile ? 14 : 13}
               style={{ data: { fill: "#ef5b3f" } }}
               labels={isMobile ? undefined : ({ datum }) => datum.y}
            />

            <VictoryBar
               data={achievedData}
               barWidth={isMobile ? 14 : 13}
               style={{ data: { fill: "#f4d95d" } }}
               labels={isMobile ? undefined : ({ datum }) => datum.y}
            />
         </VictoryChart>
      </div>
   );
}