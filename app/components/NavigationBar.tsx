"use client";

import {
   CircleHelp,
   History,
   LayoutDashboard,
   ShoppingBag,
   Users,
} from "lucide-react";


interface NavigationBarProps {
   onDealerPortalClick: () => void;
}

const temporaryNavigationItems = [
   { label: "Sales Order", icon: ShoppingBag },
   { label: "Order History", icon: History },
   { label: "Customer Ledger", icon: Users },
   { label: "Queries", icon: CircleHelp },
];

function showTemporaryMessage(label: string) {
   window.alert(`${label} page is coming soon.`);
}

export default function NavigationBar({
   onDealerPortalClick,
}: NavigationBarProps) {
   return (
      <>
         {/* Desktop Navigation */}
         <aside className="fixed left-0 top-0 z-50 hidden h-screen w-56 border-r border-[#e3e9f2] bg-white lg:block">
            <div className="flex h-full flex-col">
               <div className="flex h-24 items-center border-b border-[#edf0f5] px-6">
                  <h2 className="text-lg font-bold text-[#243b63]">
                     Dashboard
                  </h2>
               </div>

               <nav className="flex flex-1 flex-col gap-2 px-3 py-5">
                  <button
                     type="button"
                     onClick={onDealerPortalClick}
                     className="flex w-full shrink-0 items-center gap-3 rounded-xl bg-[#eef7fa] px-4 py-3 text-left font-semibold text-[#14879f] transition-all duration-200 hover:bg-[#dff1f5]"
                  >
                     <LayoutDashboard size={20} strokeWidth={1.8} />
                     <span>Dealer Portal</span>
                  </button>
                  {temporaryNavigationItems.map(({ label, icon: Icon }) => (
                     <button
                        key={label}
                        type="button"
                        onClick={() => showTemporaryMessage(label)}
                        className="flex w-full shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left font-semibold text-[#52627a] transition-colors hover:bg-[#f3f6fb] hover:text-[#14879f]"
                     >
                        <Icon size={20} strokeWidth={1.8} />
                        <span>{label}</span>
                     </button>
                  ))}
               </nav>
            </div>
         </aside>

         {/* Mobile Bottom Navigation */}
         <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-[#e3e9f2] bg-white lg:hidden">
            <button
               type="button"
               onClick={onDealerPortalClick}
               className="flex h-full flex-1 flex-col items-center justify-center gap-1 text-[#14879f]"
            >
               <LayoutDashboard size={22} strokeWidth={1.8} />
               <span className="text-[11px] font-semibold">
                  Dealer Portal
               </span>
            </button>
            {temporaryNavigationItems.map(({ label, icon: Icon }) => (
               <button
                  key={label}
                  type="button"
                  onClick={() => showTemporaryMessage(label)}
                  className="flex h-full min-w-0 flex-1 flex-col items-center justify-center gap-1 text-[#52627a] transition-colors hover:text-[#14879f]"
               >
                  <Icon size={22} strokeWidth={1.8} />
                  <span className="w-full truncate px-1 text-[10px] font-semibold">
                     {label}
                  </span>
               </button>
            ))}
         </nav>
      </>
   );
}