import Image from "next/image"
import Link from "next/link"

import arrow from '@/public/svgs/arrow.svg'
import profilePlaceholder from '@/public/images/profile-placeholder.jpg'

export default function Profile() {
    return (
        <div className="w-11/12 mx-auto">
            <div className="mt-10 flex items-center justify-between">
                <Link href='/'>
                    <Image src={arrow} width={30} height={30} alt='icon' />
                </Link>
                <h1 className="my-5 font-semibold text-2xl">Profile</h1>
            </div>

            <div className="flex flex-col items-center mt-5">
                <Image src={profilePlaceholder} alt='placeholder' width={150} height={150} className="rounded-full" />
                <p className="font-semibold text-xl mt-4">Winsten Coellins</p>
            </div>

            <div className="mt-10">
                <div className="mb-5">
                    <h3 className="font-semibold">Username:</h3>
                    <p>nextaurant01</p>
                </div>
                <div className="mb-5">
                    <h3 className="font-semibold">Email Address:</h3>
                    <p>winsten.coellins@nextaurant.com</p>
                </div>
                <div className="mb-5">
                    <h3 className="font-semibold">First Name:</h3>
                    <p>Winsten</p>
                </div>
                <div className="mb-5">
                    <h3 className="font-semibold">Last Name:</h3>
                    <p>Coellins</p>
                </div>
                <div className="mb-5">
                    <h3 className="font-semibold">Password:</h3>
                    <p>n*****t</p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 bg-white shadow-xl py-5 w-screen">
                <div className="w-11/12 mx-auto flex justify-around">
                    <Link href='/profile/edit' className='border border-black px-3 py-2 rounded-xl w-full text-lg text-center'>Edit Profile</Link>
                </div>
            </div>
        </div>
    )
}