"use client"

import { Wallet, Sparkles, TrendingUp, ShieldAlert } from "lucide-react"
import { KPICard } from "./kpi-card"

export function KPISection() {
  return (
    <section className="px-4 md:px-0">
      <h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">Umumiy Ko'rsatkichlar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <KPICard
          title="Kutilayotgan daromad"
          value="450M UZS"
          icon={<Wallet className="w-5 h-5 text-[#009639]" />}
          badge="+12%"
          badgeColor="text-green-600 bg-green-50"
        />
        <KPICard
          title="AI Tavsiyasi"
          value="Paxta (C-8290)"
          icon={<Sparkles className="w-5 h-5 text-blue-600" />}
          badge="Faol"
          badgeColor="text-blue-600 bg-blue-50"
        />
        <KPICard title="Bozor Trendi" value="Ko'tarilishda" icon={<TrendingUp className="w-5 h-5 text-purple-600" />} />
        <KPICard
          title="Risk Darajasi"
          value="14%"
          icon={<ShieldAlert className="w-5 h-5 text-orange-600" />}
          badge="Past"
          badgeColor="text-orange-600 bg-orange-50"
        />
      </div>
    </section>
  )
}
