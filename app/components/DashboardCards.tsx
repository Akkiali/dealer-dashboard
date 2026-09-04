import DashboardCard from "./DashboardCard";
import type { DashboardResponse } from "../types";



interface DashboardCardsProps {
   data: DashboardResponse;
}

export default function DashboardCards({ data }: DashboardCardsProps) {
   const cards = [
      {
         title: "Total Pending Quantity",
         value: data.total_pending_quantity,
      },
      {
         title: "Total PI/OIP Quantity",
         value: data.total_pi_oip_quantity,
      },
      {
         title: "Total Invoice Quantity",
         value: data.total_invoice_quantity,
      },
      {
         title: "Total Dealers",
         value: data.total_dealers,
      },
      {
         title: "Annual Assigned Quantity",
         value: data.target_sales,
      },
      {
         title: "Product count of NEO",
         value: 625,
      },
      {
         title: "Product count of ZETTA",
         value: 262,
      },
   ];

   return (
      <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-5 xl:grid-cols-6">
         <div className="2xl:col-span-2">
            <DashboardCard {...cards[0]} />
         </div>

         <div className="2xl:col-span-2">
            <DashboardCard {...cards[1]} />
         </div>

         <div className="2xl:col-span-2">
            <DashboardCard {...cards[2]} />
         </div>

         <DashboardCard {...cards[3]} />

         <div className="2xl:col-span-2">
            <DashboardCard {...cards[4]} />
         </div>

         <DashboardCard {...cards[5]} />

         <DashboardCard {...cards[6]} />
      </div>
   );
}