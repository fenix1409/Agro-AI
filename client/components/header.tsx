"use client"

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <div className="bg-[#009639] text-white w-8 h-8 rounded flex items-center justify-center font-bold tracking-tighter text-lg">
            A
          </div>
          <span className="text-lg font-semibold tracking-tight text-gray-900">
            Agrobank <span className="text-[#009639] font-normal">AgroAI</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="/" className="hover:text-[#009639] transition-colors">
            Xizmatlar
          </a>
          <a href="/chat" className="hover:text-[#009639] transition-colors">
            AI Chat
          </a>
          <a href="#" className="hover:text-[#009639] transition-colors">
            Bozor
          </a>
          <a href="#" className="hover:text-[#009639] transition-colors">
            Biz haqimizda
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="hidden md:block px-4 py-2 text-sm font-medium text-[#009639] border border-gray-200 rounded-lg hover:bg-[#E8F5E9] transition-colors">
            <a href="/auth">Kirish</a>
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-[#009639] rounded-lg shadow-sm hover:bg-[#00C853] transition-colors">
            <a href="/auth">Boshlash</a>
          </button>
        </div>
      </div>
    </header>
  )
}
