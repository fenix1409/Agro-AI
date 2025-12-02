"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Sparkles, Brain, Settings2 } from "lucide-react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const FARMING_TOPICS = [
  { icon: "🌾", title: "Paxta urish", description: "Paxta ekinlari bo'yicha maslahat" },
  { icon: "💧", title: "Sug'orish rejasi", description: "Optimal sug'orish vaqti va miqdori" },
  { icon: "🌡️", title: "Ob-havo savollar", description: "Harorat va yog'ingarlik ta'siri" },
  { icon: "🦟", title: "Zararkunanda bilan kurash", description: "Hasarat va kasalliklar bilan qirol" },
  { icon: "🌱", title: "Tuproq mezonlari", description: "Tuproq samaradorligini oshirish" },
  { icon: "💰", title: "Bozor narxlari", description: "Ekinlar narxi va savdo ko'rsatmalari" },
]

export default function Dashboard() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Assalomu alaykum! 👋 Men AgroAI, sizning fermer yordamchisiz. Ekinlar, sug'orish, ob-havo yoki bozor narxlari haqida barcha savollaringizni so'rasishingiz mumkin.",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    // Simulate AI response
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: `Sizning savolingiz: "${input.substring(0, 50)}${input.length > 50 ? "..." : ""}"

Quyidagi mas'uliyatlarni taklif qilaman:

📊 **Tahlil**: Agrobank AgroAI tizimlari orqali sizning ferma uchun optimal tavsiya beriladi.

🎯 **Amaliy maslahat**: 
• Paxta urish uchun optimal vaqt: May-Iyun oylari
• Sug'orish davri: 60-70 kun oraliqda
• Tuproq namligini 60-70% darajasida saqlang

💡 **Kengaytirilgan tahlil**: Qo'shimcha ma'lumot olish uchun bizga murojaat qiling.

Sizga bu maslahat yordam berdi mi? Yana boshqa savollar bor mi?`,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, assistantMessage])
    setLoading(false)
  }

  const handleQuickTopic = (topic: string) => {
    setInput(`Menga ${topic} haqida ma'lumot ber`)
  }

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen pb-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto md:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <Sidebar visible={true} />

            {/* Chat Area */}
            <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-[#009639] to-[#00C853] px-6 py-5 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-semibold">AgroAI Maslahatchi</h2>
                    <p className="text-xs text-white/80">24/7 online yordamchi</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <Settings2 className="w-5 h-5" />
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 max-h-[calc(100vh-24rem)]">
                {messages.length === 1 && (
                  <div className="mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {FARMING_TOPICS.map((topic, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuickTopic(topic.title)}
                          className="p-4 text-left bg-gradient-to-br from-[#E8F5E9] to-white border border-[#009639]/20 rounded-xl hover:border-[#009639] hover:shadow-md transition-all group"
                        >
                          <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{topic.icon}</div>
                          <div className="font-medium text-gray-900 text-sm">{topic.title}</div>
                          <div className="text-xs text-gray-500 mt-1">{topic.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom`}
                  >
                    <div
                      className={`max-w-md px-4 py-3 rounded-lg ${
                        message.role === "user"
                          ? "bg-[#009639] text-white rounded-br-none"
                          : "bg-gray-100 text-gray-900 border border-gray-200 rounded-bl-none"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                      <p className={`text-xs mt-2 ${message.role === "user" ? "text-white/70" : "text-gray-500"}`}>
                        {message.timestamp.toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-900 border border-gray-200 px-4 py-3 rounded-lg rounded-bl-none">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 bg-white p-4">
                <form onSubmit={handleSendMessage} className="flex gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Savol tuzing... (masalan: Paxta ekinida qanday xatarlar bor?)"
                    className="flex-1 px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009639] focus:border-transparent outline-none transition-all"
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="px-4 py-3 bg-[#009639] hover:bg-[#00796B] text-white rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-medium text-sm"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-3 flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  AgroAI AI tahlillari asosida maslahat beradi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
