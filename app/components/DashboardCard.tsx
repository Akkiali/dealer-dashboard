interface DashboardCardProps {
   title: string;
   value: string | number;
}

export default function DashboardCard({
   title,
   value,
}: DashboardCardProps) {
   return (
      <div
         className="group rounded-2xl border border-[#e5ebf3] bg-white p-5 shadow-[0_5px_18px_rgba(36,59,99,0.05)] transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:border-[#cbd9eb] hover:shadow-[0_12px_28px_rgba(36,59,99,0.1)]"
      >
         <div className="relative overflow-hidden rounded-xl px-1 py-1">
            <div className="absolute left-0 top-0 h-1 w-10 rounded-full bg-[#1ea7c6] transition-all duration-200 group-hover:w-16" />
            <div className="flex items-start justify-between gap-2">
               <h3 className="pt-2 text-sm font-semibold leading-6 text-[#52627a]">
                  {title}
               </h3>
            </div>

            <div className="mt-3 flex h-12 items-center">
               <span className="text-3xl font-bold tracking-[-0.02em] text-[#172033]">
                  {value}
               </span>
            </div>
         </div>
      </div>
   );
}