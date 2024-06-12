'use client'

import Image from "next/image"
import Link from "next/link"

import search from '@/public/svgs/search.svg'
import { useEffect, useState } from "react"

export default function Victuals() {
    const [victuals, setVictuals] = useState([])

    useEffect(() => {
        fetchVictuals()
    }, [])

    const fetchVictuals = async () => {
        const res = await fetch('http://localhost:3000/api/victuals', { cache: 'force-cache' })
        const data = await res.json()

        setVictuals(data['victuals'])
    }

    return (
        <div className="ml-72 mr-8 my-8 w-full">
            <h1 className="text-2xl font-semibold">Victuals</h1>
            
            <div className="mt-5 bg-white py-5 px-5 rounded-lg shadow-lg">
                <div className="relative mb-10 flex justify-between items-center">
                    <div>
                        <Image src={search} width={15} height={15} alt='icon' className="absolute top-2.5 left-3" />
                        <input type='text' placeholder='Search food or drink ...' name='order' className="pl-10 pr-5 py-2 border border-slate-500 rounded-lg text-sm" />
                    </div>
                    <Link href='/admin/dashboard/victuals/create' className="bg-black text-white text-sm px-3 py-2 rounded-lg">+ Add New Victuals</Link>
                </div>

                <table className="table-auto w-full">
                    <thead className="text-left text-xs text-slate-500">
                        <tr className="border-b-2">
                            <th className="font-normal pb-2">Name</th>
                            <th className="font-normal pb-2">Category</th>
                            <th className="font-normal pb-2">Short Description</th>
                            <th className="font-normal pb-2">Price</th>
                            <th className="font-normal pb-2">Created Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        { 
                            victuals.map((v:any) => (
                                <tr key={v.id} className="border-b border-slate-300">
                                    <td className="py-4">{v.name}</td>
                                    <td>{v.category}</td>
                                    <td>{v.shortDescription.slice(0, 50)} ...</td>
                                    <td>${v.price}</td>
                                    <td>{v.createdDate.split("T")[0]}</td>
                                    <td><Link href={`/admin/dashboard/victuals/edit/${v.id}`} className="bg-black text-white px-3 py-2 rounded-lg">View Detail</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}