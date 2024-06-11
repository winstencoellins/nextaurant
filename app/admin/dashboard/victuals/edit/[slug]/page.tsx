'use client'

import Image from "next/image"
import Link from "next/link"

import { useEffect, useState } from "react"

import dollar from '@/public/svgs/dollar.svg'


export default function CreateVictuals({ params }: { params: { slug: string } }) {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [shortDescription, setShortDescription] = useState('')
    const [price, setPrice] = useState('')

    const[n, setN] = useState('')

    useEffect(() => {
        fetchVictualDetail()
    }, [])

    const fetchVictualDetail = async () => {
        const formData = new FormData()

        formData.append('id', params.slug)

        const res = await fetch('/api/victual-detail', {
            method: 'POST',
            body: formData
        })

        const data = await res.json()

        setName(data['victualDetail'].name)
        setDescription(data['victualDetail'].description)
        setShortDescription(data['victualDetail'].shortDescription)
        setPrice(data['victualDetail'].price)
        selected(data['victualDetail'].category)
        setN(data['victualDetail'].name)
    }

    const selected = (category: any) => {
        const c:any = document.getElementById(category.toLowerCase())

        c.selected = true
    }

    return (
        <div className="ml-72 mr-8 my-8 w-full">
            <h1 className="text-2xl font-semibold">Edit {n}</h1>

            <div className="mt-5 bg-white py-5 px-5 rounded-lg shadow-lg">
                <form>
                    <div className="grid grid-cols-2 gap-x-5 mb-5">
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Name</label>
                            <input type='text' onChange={(event) => setName(event.target.value)} value={name} className="px-3 py-1.5 rounded-lg border border-slate-300 text-sm" name='name' />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Category</label>
                            <select className="px-3 py-2 rounded-lg border border-slate-300 text-sm" onChange={(event) => setInterval(event.target.value)} name='category'>
                                <option id='food' value='Food'>Food</option>
                                <option id='drink' value='Drink'>Drink</option>
                                <option id='dessert' value='Dessert'>Dessert</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Short Description</label>
                        <textarea value={shortDescription} name='short' onChange={(event) => setInterval(event.target.value)} className="px-3 py-2 border border-slate-300 rounded-lg text-sm" />
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Description</label>
                        <textarea placeholder='Write a description ...' onChange={(event) => setInterval(event.target.value)} className="px-3 py-2 border border-slate-300 rounded-lg text-sm" name='desc' value={description} />
                    </div>

                    <div className="flex flex-col mb-10">
                        <label className="mb-1 text-sm">Price</label>
                        <div className="relative">
                            <Image src={dollar} width={20} height={20} alt='icon' className="absolute top-2 left-1" />
                            <input type='text' value={price} onChange={(event) => setInterval(event.target.value)} className="px-3 py-2 border border-slate-300 rounded-lg text-sm px-8 py-2 w-full" name="price" />
                        </div>
                    </div>

                    <div className="flex">
                        <Link href='/admin/dashboard/victuals' className="border border-red-500 px-3 py-2 rounded-lg text-red-500">Cancel</Link>
                        <button className="bg-black text-white px-3 py-2 rounded-lg mx-5">Edit Victual</button>
                    </div>
                </form>
            </div>
        </div>
    )
}