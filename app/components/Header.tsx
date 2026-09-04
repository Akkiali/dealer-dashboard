import { Funnel, PanelLeft } from "lucide-react";

interface HeaderProps {
   onToggleSidebar: () => void;
   onToggleMobileFilters: () => void;
}

export default function Header({ onToggleSidebar, onToggleMobileFilters }: HeaderProps) {
   return (
      <header className="flex min-h-20 flex-wrap items-center justify-between gap-3 border-b border-[#e3e9f2] bg-white px-4 py-3 shadow-[0_1px_0_rgba(27,46,79,0.02)] sm:px-6 lg:h-24 lg:flex-nowrap lg:py-0">
         <div className="flex items-center gap-3 sm:gap-5">
            <button
               type="button"
               onClick={onToggleSidebar}
               aria-label="Toggle filters"
               title="Toggle filters"
               className="hidden rounded-md p-1 text-[#496181] transition-colors hover:bg-[#f3f6fb] lg:block"
            >
               <PanelLeft size={22} strokeWidth={1.8} />
            </button>
            <div className="h-7 w-px bg-gray-200" />
            <h1 className="text-lg font-semibold tracking-[-0.01em] text-[#172033] sm:text-xl">
               Dealer Portal
            </h1>
         </div>

         <div className="flex items-center gap-2 sm:gap-4">
            <button
               type="button"
               onClick={onToggleMobileFilters}
               aria-label="Toggle filters"
               title="Toggle filters"
               className="rounded-full p-2 text-[#496181] transition-colors hover:bg-[#f3f6fb] lg:hidden"
            >
               <Funnel size={20} strokeWidth={1.8} />
            </button>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e9eff9] text-lg font-semibold text-[#365b92] sm:h-12 sm:w-12">
               A
            </div>
         </div>
      </header>
   );
}