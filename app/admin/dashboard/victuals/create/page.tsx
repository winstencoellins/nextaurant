'use client'

import Image from "next/image"

import dollar from '@/public/svgs/dollar.svg'
import Link from "next/link"
import { FormEvent } from "react"
import { useRouter } from "next/navigation"

export default function CreateVictuals() {
    const router = useRouter()
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const res = await fetch('/api/victuals', {
            method: 'POST',
            body: formData,
        })

        const data = await res.json()

        console.log(data.message)

        if (data.success) {
            return router.push('/admin/dashboard/victuals')
        }
    }

    return (
        <div className="mx-5 mt-8 w-full">
            <h1 className="text-2xl font-semibold">Add New Victual</h1>

            <div className="mt-5 bg-white py-5 px-5 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-x-5 mb-5">
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Name</label>
                            <input type='text' name="name" placeholder='Fried Rice' className="px-3 py-1.5 rounded-lg border border-slate-300 text-sm" />
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
                        <textarea name='short' placeholder='Write a short description ...' className="px-3 py-2 border border-slate-300 rounded-lg text-sm" />
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Description</label>
                        <textarea name='desc' placeholder='Write a description ...' className="px-3 py-2 border border-slate-300 rounded-lg text-sm" />
                    </div>

                    <div className="flex flex-col mb-10">
                        <label className="mb-1 text-sm">Price</label>
                        <div className="relative">
                            <Image src={dollar} width={20} height={20} alt='icon' className="absolute top-2 left-1" />
                            <input type='text' name='price' placeholder='10' className="px-3 py-2 border border-slate-300 rounded-lg text-sm px-8 py-2 w-full" />
                        </div>
                    </div>

                    <div className="flex">
                        <Link href='/admin/dashboard/victuals' className="border border-red-500 px-3 py-2 rounded-lg text-red-500">Cancel</Link>
                        <button type='submit' className="bg-black text-white px-3 py-2 rounded-lg mx-5">Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}