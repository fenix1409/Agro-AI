import { cn } from '@/lib/utils'

const InputField = ({ type, name, label, value, placeholder, disabled, validation, register, icon }: FormInputProps) => {
    return (
        <div className="space-y-2">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>
            <div className="relative">
                <div className="absolute left-3 top-3 h-5 w-5 text-zinc-500">{icon}</div>
                <input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    required
                    className={cn("w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009639] focus:border-transparent outline-none transition-all", { 'opacity-50 cursor-not-allowed': disabled })}
                    {...register(name, validation)}
                />
            </div>
        </div>
    )
}

export default InputField