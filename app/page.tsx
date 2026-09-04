"use client";

import { useEffect, useState } from "react";

import Header from "./components/Header";
import FilterSidebar from "./components/FilterSidebar";
import DashboardCards from "./components/DashboardCards";
import type { DashboardResponse } from "./types";
import TargetAchievedChart from "./components/TargetAchievedChart";
import DealersTable from "./components/DealersTable";
import NavigationBar from "./components/NavigationBar";



export default function Home() {
  const [dashboardData, setDashboardData] =
    useState<DashboardResponse | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  // this is for navbar
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const handleDealerPortalClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  async function fetchDashboardData(
    month = "",
    financialYear = "2026-2027"
  ) {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/dashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          financial_year: financialYear,
          month: month,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch dashboard data");
      }

      const data: DashboardResponse = await response.json();

      setDashboardData(data);
    } catch (err) {
      console.error(err);
      setError("Unable to load dashboard data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void Promise.resolve().then(() => fetchDashboardData());
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      {/* this navbar is for dealer portal, it will scroll to top when clicked */}
      <NavigationBar onDealerPortalClick={handleDealerPortalClick} />

      <div className="lg:ml-56">
        <Header
          onToggleSidebar={() => setSidebarCollapsed((collapsed) => !collapsed)}
          onToggleMobileFilters={() => setMobileFiltersOpen((open) => !open)}
        />

        <div className="flex flex-col lg:flex-row">
          <FilterSidebar
            collapsed={sidebarCollapsed}
            mobileOpen={mobileFiltersOpen}
            onToggle={() => setSidebarCollapsed((collapsed) => !collapsed)}
            onApply={(month, financialYear) => {
              fetchDashboardData(month, financialYear);
            }}
          />

          <main className="min-w-0 flex-1 overflow-hidden p-4 sm:p-5 lg:p-6">
            {loading && (
              <div className="rounded-xl bg-white p-6">
                Loading dashboard...
              </div>
            )}

            {error && (
              <div className="rounded-xl bg-red-50 p-6 text-red-600">
                {error}
              </div>
            )}

            {!loading && !error && dashboardData && (
              <>
                <DashboardCards data={dashboardData} />

                <div className="mt-5 grid grid-cols-1 gap-5 2xl:grid-cols-2">
                  <TargetAchievedChart data={dashboardData} />
                  <DealersTable data={dashboardData} />
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}