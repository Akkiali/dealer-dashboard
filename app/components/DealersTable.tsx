import type { DashboardResponse } from "../types";

export default function DealersTable({
   data,
}: {
   data: DashboardResponse;
}) {
   return (
      <section className="overflow-hidden rounded-2xl border border-[#e5ebf3] bg-white p-3 shadow-[0_5px_18px_rgba(36,59,99,0.05)] sm:p-5">
         <div className="flex items-start justify-between gap-2 px-1">
            <h2 className="text-base font-semibold tracking-[-0.01em] text-[#243b63] sm:text-lg">
               Dealers Target vs Achieved Quantity
            </h2>
         </div>

         <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-0 border-collapse text-xs sm:min-w-[560px] sm:text-sm">
               <thead className="text-left text-[11px] uppercase tracking-[0.08em] text-[#6d7d95]">
                  <tr className="border-b border-[#dce6f2] bg-[#f5f8fc]">
                     <th className="rounded-l-xl px-2 py-2 font-semibold sm:px-3 sm:py-3">
                        Dealer
                     </th>

                     <th className="px-2 py-2 font-semibold sm:px-3 sm:py-3">
                        Month
                     </th>

                     <th className="px-2 py-2 font-semibold sm:px-3 sm:py-3">
                        Target
                     </th>

                     <th className="rounded-r-xl px-2 py-2 font-semibold sm:px-3 sm:py-3">
                        Achieved
                     </th>
                  </tr>
               </thead>

               <tbody className="text-[#33445c]">
                  {data.dealers_target_vs_achieved_quantity.map((dealer, index) => (
                     <tr
                        key={index}
                        className="border-b border-[#edf0f5] transition-colors duration-150 even:bg-[#fbfcfe] hover:bg-[#eef7fa]"
                     >
                        <td className="px-2 py-2 font-medium text-[#243b63] sm:px-3 sm:py-3">
                           {dealer.name}
                        </td>

                        <td className="px-2 py-2 tabular-nums sm:px-3 sm:py-3">
                           {dealer.month}
                        </td>

                        <td className="px-2 py-2 tabular-nums sm:px-3 sm:py-3">
                           {dealer.target_quantity}
                        </td>

                        <td className="px-2 py-2 font-semibold tabular-nums text-[#14879f] sm:px-3 sm:py-3">
                           {dealer.achieved_quantity}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </section>
   );
}