"use server"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Sidebar } from "@/components/sidebar"
import { KPISection } from "@/components/kpi-section"
import { AIAdvisorSection } from "@/components/ai-advisor-section"
import { auth } from "@/lib/better-auth/auth"
import { headers } from "next/headers"

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });

  const user = (() => {
    const s = session?.user;
    if (!s) return undefined;
    return {
      id: s.id,
      name: s.name,
      email: s.email,
    };
  })();
  return (
    <>
      {user ? (
        <Header user={user} />
      ) : (
        <Header />
      )}
      <HeroSection />

      <div className="bg-gray-100 min-h-screen pb-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto md:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <Sidebar visible={true} />

            <div className="flex-1 space-y-8">
              <div className="lg:hidden flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4">
                <div className="font-semibold text-gray-800">Dashboard</div>
                <div className="w-8 h-8 bg-[#009639] rounded-full text-white flex items-center justify-center text-xs">
                  AV
                </div>
              </div>

              <KPISection />

              <AIAdvisorSection />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
