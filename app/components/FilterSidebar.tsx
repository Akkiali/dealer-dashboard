"use client";

import { ChevronDown, PanelLeftClose } from "lucide-react";
import { useState } from "react";

const months = [
   "All Months",
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];

const financialYears = [
   "2024-2025",
   "2025-2026",
   "2026-2027",
];



interface FilterSidebarProps {
   onApply: (month: string, financialYear: string) => void;
   collapsed: boolean;
   mobileOpen: boolean;
   onToggle: () => void;
}

export default function FilterSidebar({
   onApply,
   collapsed,
   mobileOpen,
   onToggle,
}: FilterSidebarProps) {
   const [monthOpen, setMonthOpen] = useState(false);
   const [yearOpen, setYearOpen] = useState(false);

   const [selectedMonth, setSelectedMonth] = useState("");
   const [selectedYear, setSelectedYear] = useState("2026-2027");

   return (
      <aside
         className={`shrink-0 border-b border-[#e3e9f2] bg-white transition-[width] duration-200 lg:border-b-0 lg:border-r ${collapsed ? "hidden lg:block lg:w-16" : mobileOpen ? "w-full lg:w-[340px]" : "hidden lg:block lg:w-[340px]"
            }`}
      >
         <div className="flex flex-col lg:min-h-[calc(100vh-96px)]">
            <div
               className={`flex items-center border-b border-[#edf0f5] py-4 lg:py-5 ${collapsed
                  ? "justify-center px-3"
                  : "justify-between px-5 sm:px-8 lg:px-10"
                  }`}
            >
               {!collapsed && (
                  <h2 className="text-xl font-semibold tracking-[-0.01em] text-[#172033]">
                     Filters
                  </h2>
               )}

               <button
                  type="button"
                  onClick={onToggle}
                  aria-label={collapsed ? "Expand filters" : "Collapse filters"}
                  title={collapsed ? "Expand filters" : "Collapse filters"}
                  className="hidden rounded-md p-1 text-[#71809a] transition-colors hover:bg-[#f3f6fb] hover:text-[#294a7b] lg:block"
               >
                  <PanelLeftClose size={22} />
               </button>
            </div>

            {!collapsed && <>
               <div className="grid gap-5 px-5 py-5 sm:grid-cols-2 sm:px-8 lg:block lg:flex-1 lg:px-10 lg:py-8">
                  <div>
                     <h3 className="mb-4 text-xl font-semibold tracking-[-0.02em] text-[#294a7b] lg:mb-6 lg:text-2xl">
                        Month
                     </h3>

                     <button
                        onClick={() => setMonthOpen(!monthOpen)}
                        className="flex w-full items-center justify-between rounded-xl border border-[#dce4ef] bg-[#fbfcfe] px-4 py-3 text-gray-500 transition-colors hover:border-[#9fb6d8] hover:bg-white"
                     >
                        <span>{selectedMonth || "12 options"}</span>
                        <ChevronDown size={20} />
                     </button>
                     {monthOpen && (
                        <div className="mt-2 rounded-xl border border-[#dce4ef] bg-white p-2 shadow-lg">
                           {months.map((month) => (
                              <button
                                 key={month}
                                 onClick={() => {
                                    setSelectedMonth(month === "All Months" ? "" : month);
                                    setMonthOpen(false);
                                 }}
                                 className="w-full rounded-lg px-3 py-2 text-left text-gray-700 hover:bg-[#f3f6fb]"
                              >
                                 {month}
                              </button>
                           ))}
                        </div>
                     )}
                  </div>

                  <div className="lg:mt-7">
                     <h3 className="mb-4 text-xl font-semibold tracking-[-0.02em] text-[#294a7b] lg:mb-6 lg:text-2xl">
                        Financial Year
                     </h3>

                     <button
                        onClick={() => setYearOpen(!yearOpen)}
                        className="flex w-full items-center justify-between rounded-xl border border-[#dce4ef] bg-[#fbfcfe] px-4 py-3 transition-colors hover:border-[#9fb6d8] hover:bg-white"
                     >
                        <span className="rounded-md bg-[#edf2fa] px-2 py-1 text-sm text-[#5d6f8b]">
                           {selectedYear}
                        </span>

                        <ChevronDown size={20} className="text-gray-500" />
                     </button>
                     {yearOpen && (
                        <div className="mt-2 rounded-xl border border-[#dce4ef] bg-white p-2 shadow-lg">
                           {financialYears.map((year) => (
                              <button
                                 key={year}
                                 onClick={() => {
                                    setSelectedYear(year);
                                    setYearOpen(false);
                                 }}
                                 className="w-full rounded-lg px-3 py-2 text-left text-gray-700 hover:bg-[#f3f6fb]"
                              >
                                 {year}
                              </button>
                           ))}
                        </div>
                     )}
                  </div>
               </div>

               <div className="px-5 pb-5 sm:px-8 lg:px-10 lg:pb-6">
                  <button
                     onClick={() => onApply(selectedMonth, selectedYear)}
                     className="w-full rounded-lg bg-[#e8edf5] px-5 py-3 font-semibold text-[#51627c] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#dce5f2] hover:shadow-md active:translate-y-0"
                  >
                     APPLY FILTERS
                  </button>
               </div>
            </>}
         </div>
      </aside>
   );
}