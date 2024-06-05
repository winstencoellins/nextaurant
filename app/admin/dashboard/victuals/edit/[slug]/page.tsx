import Image from "next/image"

import dollar from '@/public/svgs/dollar.svg'
import Link from "next/link"

export default function CreateVictuals({ params }: { params: { slug: string } }) {
    return (
        <div className="mx-5 mt-8 w-full">
            <h1 className="text-2xl font-semibold">Edit {params.slug}</h1>

            <div className="mt-5 bg-white py-5 px-5 rounded-lg shadow-lg">
                <form>
                    <div className="grid grid-cols-2 gap-x-5 mb-5">
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Name</label>
                            <input type='text' value='Pad Thai' className="px-3 py-1.5 rounded-lg border border-slate-300 text-sm" />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Category</label>
                            <select className="px-3 py-2 rounded-lg border border-slate-300 text-sm" name='category'>
                                <option value='food'>Food</option>
                                <option value='drink'>Drink</option>
                                <option value='dessert'>Dessert</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Short Description</label>
                        <textarea value='A classic Thai stir-fried noodle dish.' className="px-3 py-2 border border-slate-300 rounded-lg text-sm" />
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Description</label>
                        <textarea placeholder='Write a description ...' className="px-3 py-2 border border-slate-300 rounded-lg text-sm" />
                    </div>

                    <div className="flex flex-col mb-10">
                        <label className="mb-1 text-sm">Price</label>
                        <div className="relative">
                            <Image src={dollar} width={20} height={20} alt='icon' className="absolute top-2 left-1" />
                            <input type='text' value='10' className="px-3 py-2 border border-slate-300 rounded-lg text-sm px-8 py-2 w-full" />
                        </div>
                    </div>

                    <div className="flex">
                        <Link href='/admin/dashboard/victuals' className="border border-red-500 px-3 py-2 rounded-lg text-red-500">Cancel</Link>
                        <button className="bg-black text-white px-3 py-2 rounded-lg mx-5">Edit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}