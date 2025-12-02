"use client"

import { Settings2, Wand2 } from "lucide-react"

export function AIAdvisorSection() {
  return (
    <section id="advisor" className="grid grid-cols-1 xl:grid-cols-3 gap-6 px-4 md:px-0">
      {/* Input Form */}
      <div className="xl:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-5 flex items-center gap-2">
          <Settings2 className="w-5 h-5 text-gray-400" />
          Hudud Parametrlari
        </h3>
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Hudud</label>
            <select className="w-full px-3 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009639] focus:border-[#009639] outline-none transition-all">
              <option>Toshkent viloyati</option>
              <option>Samarqand viloyati</option>
              <option>Farg'ona vodiysi</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Yer maydoni (Gektar)</label>
            <input
              type="number"
              defaultValue="15"
              className="w-full px-3 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009639] focus:border-[#009639] outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Tuproq turi</label>
            <select className="w-full px-3 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009639] focus:border-[#009639] outline-none transition-all">
              <option>Sho'rlangan</option>
              <option defaultValue="Oddiy">Oddiy</option>
              <option>Qumloq</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Suv ta'minoti</label>
            <select className="w-full px-3 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009639] focus:border-[#009639] outline-none transition-all">
              <option defaultValue="Yaxshi">Yaxshi</option>
              <option>O'rtacha</option>
              <option>Qiyin</option>
            </select>
          </div>

          <button
            type="button"
            className="w-full mt-2 px-4 py-3 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors flex justify-center items-center gap-2"
          >
            <Wand2 className="w-4 h-4" />
            AI Tahlil qilish
          </button>
        </form>
      </div>

      {/* Results */}
      <div className="xl:col-span-2 space-y-6">
        {/* Top Result Card */}
        <div className="bg-gradient-to-r from-[#00796B] to-[#009639] p-6 rounded-xl shadow-lg text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[#00C853] text-xs font-semibold uppercase tracking-wider mb-1">AI Tavsiyasi</div>
                <h2 className="text-2xl font-bold">Paxta (Nav: Sulton)</h2>
                <p className="text-white/80 text-sm mt-1 max-w-md">
                  Sizning tuprog'ingiz va kutilayotgan ob-havo sharoiti uchun eng optimal tanlov.
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">94%</div>
                <div className="text-xs text-white/60">Ishonch darajasi</div>
              </div>
            </div>
            <div className="mt-6 flex gap-6">
              <div>
                <div className="text-xs text-white/60">Kutilayotgan daromad</div>
                <div className="text-lg font-semibold">35 mln UZS/ga</div>
              </div>
              <div>
                <div className="text-xs text-white/60">Vegetatsiya davri</div>
                <div className="text-lg font-semibold">110-115 kun</div>
              </div>
            </div>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-4 font-medium">Ekin turi</th>
                <th className="px-6 py-4 font-medium">Daromad (Gektar)</th>
                <th className="px-6 py-4 font-medium">Risk</th>
                <th className="px-6 py-4 font-medium text-right">Harakat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { crop: "Paxta (Sulton)", income: "35 mln UZS", risk: "Minimal", selected: true },
                { crop: "Xushbuylarning aralashmasi", income: "28 mln UZS", risk: "Kam" },
                { crop: "Qora paxta", income: "32 mln UZS", risk: "O'rtacha" },
              ].map((item, idx) => (
                <tr key={idx} className={item.selected ? "bg-green-50" : ""}>
                  <td className="px-6 py-4 font-medium text-gray-900">{item.crop}</td>
                  <td className="px-6 py-4">{item.income}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        item.risk === "Minimal"
                          ? "bg-green-50 text-green-700"
                          : item.risk === "Kam"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-yellow-50 text-yellow-700"
                      }`}
                    >
                      {item.risk}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      className={`text-xs font-medium px-3 py-1 rounded transition-colors ${
                        item.selected ? "bg-[#009639] text-white" : "text-[#009639] hover:bg-[#E8F5E9]"
                      }`}
                    >
                      {item.selected ? "Tanlangan" : "Tanlash"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
