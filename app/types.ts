export interface TargetVsAchievement {
  year: string;
  month: string;
  target_quantity: number;
  achieved_quantity: number;
}

export interface DealerTargetVsAchievement {
  name: string;
  year: string;
  month: string;
  target_quantity: number;
  achieved_quantity: number;
}

export interface DashboardResponse {
  total_pending_quantity: number;
  total_pi_oip_quantity: number;
  total_invoice_quantity: number;
  total_dealers: number;
  target_sales: number;
  target_vs_achievement: TargetVsAchievement[];
  dealers_target_vs_achieved_quantity: DealerTargetVsAchievement[];
}