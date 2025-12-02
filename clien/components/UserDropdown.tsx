'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { signOut } from "@/lib/actions/auth.actions";
import { Button } from "./ui/button";

const UserDropdown = ({ user }: { user: User }) => {
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.push("/sign-in");
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex items-center gap-3 px-3 py-2 
                    rounded-lg bg-white border border-gray-200
                    hover:bg-gray-50 text-gray-900 transition-all
                    shadow-sm shadow-gray-200/50"
                >
                    <Avatar className="h-9 w-9 border border-gray-200">
                        <AvatarImage src={user?.image} />
                        <AvatarFallback className="bg-gradient-to-br 
                        from-[#009639] to-[#00c853] text-white font-semibold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start leading-tight">
                        <span className="text-sm font-semibold text-gray-900">
                            {user.name}
                        </span>
                        <span className="text-xs text-gray-500">{user.email}</span>
                    </div>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-72 p-2 
                rounded-lg bg-white 
                border border-gray-200 shadow-lg shadow-gray-300/30"
            >
                <DropdownMenuLabel className="p-0">
                    <div className="flex items-center gap-3 p-3 rounded-md 
                    bg-gradient-to-br from-[#f0fdf4] to-[#ecfdf5] border border-[#d1fae5]">
                        <Avatar className="h-10 w-10 border border-gray-200">
                            <AvatarImage src={user?.image} />
                            <AvatarFallback className="bg-gradient-to-br 
                            from-[#009639] to-[#00c853] text-white font-semibold">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-semibold text-gray-900">
                                {user.name}
                            </p>
                            <p className="text-xs text-gray-600">{user.email}</p>
                        </div>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="my-2 bg-gray-200" />

                <DropdownMenuItem
                    onClick={handleSignOut}
                    className="flex items-center gap-2 px-3 py-2 
                    text-sm font-medium cursor-pointer rounded-md
                    text-red-600 hover:text-red-700 
                    hover:bg-red-50 focus:bg-red-100 transition-colors"
                >
                    <LogOut className="h-4 w-4" />
                    Chiqish
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown;