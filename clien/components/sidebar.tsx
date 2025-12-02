"use client"

import { LayoutDashboard, Brain, TrendingUp, CloudRain, Store, Sprout } from "lucide-react"

interface SidebarProps {
  visible?: boolean
}

export function Sidebar({ visible = true }: SidebarProps) {
  if (!visible) return null

  return (
    <aside className="hidden lg:block w-64 bg-[#009639] rounded-2xl shadow-xl p-6 text-white sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto flex flex-col justify-between">
      <div>
        {/* Platform Info */}
        <div className="flex items-center gap-3 mb-10 opacity-90">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
            <Sprout className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold">AgroAI Platforma</div>
            <div className="text-xs text-[#E8F5E9]/80">Enterprise Edition</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-lg text-white font-medium border border-white/10"
          >
            <LayoutDashboard className="w-5 h-5" />
            Asosiy Panel
          </a>
          <a
            href="#advisor"
            className="flex items-center gap-3 px-4 py-3 text-[#E8F5E9]/80 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
          >
            <Brain className="w-5 h-5" />
            AI Maslahatchi
          </a>
          <a
            href="#market"
            className="flex items-center gap-3 px-4 py-3 text-[#E8F5E9]/80 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
          >
            <TrendingUp className="w-5 h-5" />
            Bozor Tahlili
          </a>
          <a
            href="#weather"
            className="flex items-center gap-3 px-4 py-3 text-[#E8F5E9]/80 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
          >
            <CloudRain className="w-5 h-5" />
            Ob-havo & Risk
          </a>
          <a
            href="#sell"
            className="flex items-center gap-3 px-4 py-3 text-[#E8F5E9]/80 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
          >
            <Store className="w-5 h-5" />
            Sotuv Markazi
          </a>
        </nav>
      </div>

      {/* User Info */}
      <div className="bg-gradient-to-b from-white/5 to-transparent p-4 rounded-xl border border-white/10">
        <div className="flex items-center gap-3 mb-2">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="User"
            className="w-8 h-8 rounded-full bg-white/20"
          />
          <div className="text-xs">
            <p className="font-medium">Alisher V.</p>
            <p className="text-white/60">Toshkent, Parkent</p>
          </div>
        </div>
        <div className="text-[10px] text-white/50 uppercase tracking-wider mt-2">Kredit Limiti</div>
        <div className="text-sm font-mono font-semibold">150,000,000 UZS</div>
      </div>
    </aside>
  )
}
