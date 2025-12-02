"use client"

import type { ReactNode } from "react"

interface KPICardProps {
  title: string
  value: string | number
  icon: ReactNode
  badge?: string
  badgeColor?: string
}

export function KPICard({ title, value, icon, badge, badgeColor = "text-green-600 bg-green-50" }: KPICardProps) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-[#E8F5E9] rounded-lg">{icon}</div>
        {badge && <span className={`text-xs font-medium ${badgeColor} px-2 py-1 rounded`}>{badge}</span>}
      </div>
      <div className="text-sm text-gray-500 font-medium">{title}</div>
      <div className="text-2xl font-semibold text-gray-900 tracking-tight mt-1">{value}</div>
    </div>
  )
}
