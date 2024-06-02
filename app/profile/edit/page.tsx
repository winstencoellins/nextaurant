import Link from "next/link"
import Image from "next/image"

import arrow from '@/public/svgs/arrow.svg'

export default function EditProfile() {
    return (
        <div className="w-11/12 mx-auto">
            <div className="mt-10 flex items-center justify-between">
                <Link href='/profile'>
                    <Image src={arrow} width={30} height={30} alt='icon' />
                </Link>
                <h1 className="my-5 font-semibold text-2xl">Edit Profile</h1>
            </div>
            <form className="my-10">
                <div className="flex flex-col mb-5">
                    <label className="mb-1">Username</label>
                    <input type='text' defaultValue='winstencoellins' name='username' className="px-3 py-3 rounded-xl shadow-xl" />
                </div>
                <div className="flex flex-col mb-5">
                    <label className="mb-1">Email</label>
                    <input type='email' defaultValue='winsten.coellins@nextaurant.com' name='username' className="px-3 py-3 rounded-xl shadow-xl" />
                </div>
                <div className="flex flex-col mb-5">
                    <label className="mb-1">First Name</label>
                    <input type='text' defaultValue='Winsten' name='username' className="px-3 py-3 rounded-xl shadow-xl" />
                </div>
                <div className="flex flex-col mb-5">
                    <label className="mb-1">Last Name</label>
                    <input type='text' defaultValue='Coellins' name='username' className="px-3 py-3 rounded-xl shadow-xl" />
                </div>
                <div className="flex flex-col mb-5">
                    <label className="mb-1">Password</label>
                    <input type='password' defaultValue='nextaurant01' name='username' className="px-3 py-3 rounded-xl shadow-xl" />
                </div>

                <button type="submit" className="bg-black text-white px-3 py-3 rounded-xl mt-10">Save Changes</button>
            </form>


        </div>
    )
}