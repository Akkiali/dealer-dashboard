"use client";

import dynamic from "next/dynamic";
import type { DashboardResponse } from "../types";

const VictoryChartComponent = dynamic(
   () => import("./VictoryChartComponent"),
   {
      ssr: false,
   }
);

interface TargetAchievedChartProps {
   data: DashboardResponse;
}

export default function TargetAchievedChart({
   data,
}: TargetAchievedChartProps) {
   return (
      <section className="rounded-2xl border border-[#edf0f5] bg-white p-4 shadow-[0_6px_20px_rgba(36,59,99,0.06)]">
         <div className="flex items-start justify-between gap-2 px-1">
            <h2 className="text-lg font-semibold tracking-[-0.01em] text-[#243b63]">
               <span className="sm:hidden">Target vs Achievement</span>
               <span className="hidden sm:inline">Target vs Achieved Quantity</span>
            </h2>
            <div className="flex shrink-0 flex-row gap-2 text-[9px] leading-3 text-[#65758b]">
               <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-sm bg-[#f97316]" />
                  <span className="sm:hidden">SUM(qty)</span>
                  <span className="hidden sm:inline">Target Qty</span>
               </span>
               <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-sm bg-[#3b82f6]" />
                  <span className="sm:hidden">SUM(target)</span>
                  <span className="hidden sm:inline">Achieved Qty</span>
               </span>
            </div>
         </div>

         <div className="mt-10 h-[235px] sm:h-[320px] lg:h-[360px]">
            <VictoryChartComponent data={data} />
         </div>
      </section>
   );
}