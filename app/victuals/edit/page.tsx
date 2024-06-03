import Image from "next/image"
import Link from "next/link"

import arrow from '@/public/svgs/arrow.svg'

export default function EditVictuals() {
    return (
        <div className="w-11/12 mx-auto">
            <div className="mt-10 flex items-center justify-between">
                <Link href='/'>
                    <Image src={arrow} width={30} height={30} alt='icon' />
                </Link>
                <h1 className="my-5 font-semibold text-2xl">Create Victual</h1>
            </div>

            <form className="my-10">
                <div className="flex flex-col mb-5">
                    <label className="text-xl mb-1">Category</label>
                    <select className="px-3 py-3 rounded-xl shadow-xl">
                        <option value="Food">Food</option>
                        <option value="Drink">Drink</option>
                        <option value="Dessert">Dessert</option>
                    </select>
                </div>
                <div className="flex flex-col mb-5">
                    <label className="text-xl mb-1">Name</label>
                    <input type="text" defaultValue="Winsten Coellins FRIED RICE" className="px-3 py-3 rounded-xl shadow-xl"/>
                </div>
                <div className="flex flex-col mb-5">
                    <label className="text-xl mb-1">Short description</label>
                    <textarea defaultValue="POKOKNYA FRIED RICE" className="px-3 py-3 rounded-xl shadow-xl"></textarea>
                </div>
                <div className="flex flex-col mb-5">
                    <label className="text-xl mb-1">Description</label>
                    <textarea defaultValue="POKOKNYA FRIED RICE (2)" className="px-3 py-3 rounded-xl shadow-xl"></textarea>
                </div>
                <div className="flex flex-col mb-5">
                    <label className="text-xl mb-1">Price</label>
                    <input type="text" defaultValue="120.00" className="px-3 py-3 rounded-xl shadow-xl"/>
                </div>
            </form>

            <button type="submit" className="bg-black text-white px-3 py-3 rounded-xl mt-10">Save Changes</button>

        </div>
    )
}