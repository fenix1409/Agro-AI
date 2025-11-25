"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff, Sprout } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Store user info in localStorage for demo
    localStorage.setItem(
      "user",
      JSON.stringify({
        email,
        fullName: isLogin ? email.split("@")[0] : fullName,
        loginTime: new Date().toISOString(),
      }),
    )

    setLoading(false)
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#009639] to-[#00796B] flex items-center justify-center p-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-white/5 blur-3xl"></div>
      </div>

      {/* Auth Card */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#009639] to-[#00C853] px-6 py-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-white text-[#009639] w-10 h-10 rounded-lg flex items-center justify-center">
              <Sprout className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-white">AgroAI</h1>
          </div>
          <p className="text-white/90 text-sm">Agrobankning Intellektual Fermer Yordamchisi</p>
        </div>

        {/* Form */}
        <div className="px-6 py-8">
          {/* Toggle */}
          <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all ${
                isLogin ? "bg-[#009639] text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Kirish
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all ${
                !isLogin ? "bg-[#009639] text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Ro'yxatdan o'tish
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name (Sign Up Only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To'liq ism</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Alisher Valiyev"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009639] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email manzil</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="farmer@example.com"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009639] focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Parol</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009639] focus:border-transparent outline-none transition-all pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me (Login Only) */}
            {isLogin && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 border border-gray-300 rounded text-[#009639] focus:ring-2 focus:ring-[#009639]"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Meni eslab qol
                </label>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 px-4 py-3 text-base font-medium text-white bg-[#009639] hover:bg-[#00796B] rounded-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Kuting...
                </>
              ) : isLogin ? (
                "Kirish"
              ) : (
                "Ro'yxatdan o'tish"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Yoki</span>
            </div>
          </div>

          {/* Social Login */}
          <button
            type="button"
            className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google bilan kirish
          </button>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-600">
            {isLogin ? "Hisob yo'q? " : "Allaqachon ro'yxatdan o'tgansiz? "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#009639] hover:text-[#00796B] font-medium transition-colors"
            >
              {isLogin ? "Ro'yxatdan o'tish" : "Kirish"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
