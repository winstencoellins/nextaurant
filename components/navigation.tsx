'use client'

import Image from "next/image"
import Link from "next/link"

import home from '@/public/svgs/home.svg'
import cart from '@/public/svgs/cart.svg'
import profile from '@/public/svgs/profile.svg'
import { usePathname } from "next/navigation"

export default function Navigation() {
    const pathname = usePathname();

    return (
        <div>
            {
                pathname.includes('victuals') || pathname.includes('cart') || pathname.includes('profile') ? 
                <div></div> 
                :
                <div className="flex justify-around bg-black fixed -bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 mx-auto py-2 rounded-3xl">
                    <div>
                        <Link href='/' className="flex flex-col items-center">
                            <Image src={home} height={30} width={30} alt='icon' />
                            <span className="text-white mt-1">Home</span>
                        </Link>
                    </div>
                    <div>
                        <Link href='/cart' className="flex flex-col items-center">
                            <Image src={cart} height={30} width={30} alt='icon' /> 
                            <span className="text-white mt-1">Cart</span>
                        </Link>
                    </div>
                    <div>
                        <Link href='/profile' className="flex flex-col items-center">
                            <Image src={profile} height={30} width={30} alt='icon' />
                            <span className="text-white mt-1">Profile</span>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}