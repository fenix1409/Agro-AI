"use client"

import { PlayCircle } from "lucide-react"

export function HeroSection() {
  return (
    <main className="relative overflow-hidden">
      {/* Abstract Mesh Background */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#00C853] to-transparent blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-[#009639] to-transparent blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] border border-[#009639]/20 text-[#009639] text-xs font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#009639] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#009639]"></span>
          </span>
          Yangi: 2024 Hosil mavsumi uchun AI tahlillari
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
          AgroAI: Agrobankning <br />
          <span className="text-[#009639]">Intellektual Fermer Yordamchisi</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Sun'iy intellekt yordamida ekinlar bo'yicha maslahat, narxlar prognozi va xatarlarni monitoring qilish —
          O'zbekiston fermerlari uchun maxsus.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3.5 text-base font-medium text-white bg-[#009639] rounded-xl shadow-lg shadow-[#009639]/20 hover:bg-[#00796B] transition-all transform hover:-translate-y-0.5">
            Boshlash
          </button>
          <button className="px-8 py-3.5 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
            <PlayCircle className="w-5 h-5 text-[#009639]" />
            Demo ko'rish
          </button>
        </div>
      </div>
    </main>
  )
}
