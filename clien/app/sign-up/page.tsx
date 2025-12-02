"use client"
import InputField from '@/components/inputField'
import { signUpWithEmail } from '@/lib/actions/auth.actions'
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
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
        },
        mode: 'onBlur'
    },);

    const onSubmit = async (data: SignUpFormData) => {
        try {
            const result = await signUpWithEmail(data);
            if (result.success) router.push('/dashboard');
        } catch (e) {
            console.error(e);
            toast.error('Sign up failed', {
                description: e instanceof Error ? e.message : 'Failed to create an account.'
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
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">Ro'yxatdan o'tish</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <InputField
                            type="text"
                            name="fullName"
                            label="To'liq ism"
                            placeholder="Alisher Valiyev"
                            register={register}
                            error={errors.fullName}
                            validation={{ required: "To'liq ism kiritish shart!", minLength: 2 }}
                        />

                        <InputField
                            name='email'
                            type="email"
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
                            disabled={loading}
                            className="w-full mt-6 px-4 py-3 text-base font-medium text-white bg-[#009639] hover:bg-[#00796B] rounded-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Kuting...
                                </>
                            ) : (
                                "Ro'yxatdan o'tish"
                            )}
                        </button>
                    </form>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Yoki</span>
                        </div>
                    </div>

                    <button
                        type="button"
                        disabled={loading}
                        onClick={async () => {
                            try {
                                setLoading(true)
                                await signIn.social(
                                    { provider: "google", callbackURL: "/" },
                                    { onRequest: () => setLoading(true), onResponse: () => setLoading(false) },
                                )
                            } catch (err: any) {
                                toast(err?.message || "Social sign-in failed")
                                setLoading(false)
                            }
                        }}
                        className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Google bilan kirish
                    </button>

                    <Link href={'/sign-in'} className="pt-6 block mx-auto text-center text-sm text-gray-600">
                        <button
                            type="submit"
                            className="text-[#009639] hover:text-[#00796B] font-medium transition-colors"
                        >
                            Kirish
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp