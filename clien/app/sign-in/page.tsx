"use client"
import InputField from '@/components/form/InputField'
import { signInWithEmail } from '@/lib/actions/auth.actions'
import { signIn } from '@/lib/better-auth/auth-client'
import { Eye, EyeOff, Lock, Mail, Sprout } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const SignUp = () => {
  const router = useRouter()
  const [error] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur'
  },);

  const onSubmit = async (data: SignInFormData) => {
    try {
      const result = await signInWithEmail(data);      
      if (result.success) router.push('/dashboard');
    } catch (e) {
      console.error(e);
      toast.error('Sign in failed', {
        description: e instanceof Error ? e.message : 'Failed to login a account.'
      })
    }
  }
  return (
    <div className="min-h-screen bg-linear-to-br from-[#009639] to-[#00796B] flex items-center justify-center p-4">
      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">{error}</div>
      )}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-white/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-linear-to-r from-[#009639] to-[#00C853] px-6 py-8 text-center">
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
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">Kirish</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <InputField
              type="email"
              name='email'
              label="Email manzil"
              placeholder="farmer@example.com"
              icon={<Mail className="w-5 h-5" />}
              register={register}
              error={errors.email}
              validation={{ required: 'Email kiritish shart!', minLength: 2 }}
            />

            <div className="relative">
              <InputField
                type={showPassword ? "text" : "password"}
                name='password'
                label="Parol"
                placeholder="••••••••"
                icon={<Lock className="w-5 h-5" />}
                register={register}
                error={errors.password}
                validation={{ required: 'Parol kiritish shart!' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 px-4 py-3 text-base font-medium text-white bg-[#009639] hover:bg-[#00796B] rounded-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Kuting...
                </>
              ) : (
                "Kirish"
              )}
            </button>
          </form>

          <Link href={'/sign-up'} className="pt-6 block mx-auto text-center text-sm text-gray-600">
            <button
              type="submit"
              className="text-[#009639] hover:text-[#00796B] font-medium transition-colors"
            >
              Ro'yxatdan o'tish
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp