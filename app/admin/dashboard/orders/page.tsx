import Image from "next/image"

import search from '@/public/svgs/search.svg'


export default function Orders() {
    return (
        <div className="mx-5 mt-8 w-full">
            <h1 className="text-2xl font-semibold">Orders</h1>

            <div className="mt-5 bg-white py-5 px-5 rounded-lg shadow-lg">
                <div className="relative mb-10">
                    <Image src={search} width={15} height={15} alt='icon' className="absolute top-2.5 left-3" />
                    <input type='text' placeholder='Search order number ...' name='order' className="pl-10 pr-5 py-2 border border-slate-500 rounded-lg text-sm" />
                </div>

                <table className="table-auto w-full">
                    <thead className="text-left text-xs text-slate-500">
                        <tr className="border-b-2">
                            <th className="font-normal pb-2">Order Number</th>
                            <th className="font-normal pb-2">Date Created</th>
                            <th className="font-normal pb-2">Employee Name</th>
                            <th className="font-normal pb-2">Total Amount</th>
                            <th className="font-normal pb-2"></th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <tr className="border-b border-slate-300">
                            <td className="py-4">#12345678</td>
                            <td>2024-06-05</td>
                            <td>Vinix Collen</td>
                            <td>$ 30.00</td>
                            <td>
                                <button className="bg-black text-white px-3 py-2 rounded-lg">View Detail</button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}