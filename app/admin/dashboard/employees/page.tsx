import Image from "next/image"
import Link from "next/link"

import search from '@/public/svgs/search.svg'

export default function Employees() {
    return (
        <div className="mx-5 mt-8 w-full">
            <h1 className="text-2xl font-semibold">Employees</h1>

            <div className="mt-5 bg-white py-5 px-5 rounded-lg shadow-lg">
                <div className="relative mb-10 flex justify-between items-center">
                    <div>
                        <Image src={search} width={15} height={15} alt='icon' className="absolute top-2.5 left-3" />
                        <input type='text' placeholder='Search employees ...' name='order' className="pl-10 pr-5 py-2 border border-slate-500 rounded-lg text-sm" />
                    </div>
                    <Link href='/admin/dashboard/employees/create' className="bg-black text-white text-sm px-3 py-2 rounded-lg">+ Add New Employee</Link>
                </div>

                <table className="table-auto w-full">
                    <thead className="text-left text-xs text-slate-500">
                        <tr className="border-b-2">
                            <th className="font-normal pb-2">First Name</th>
                            <th className="font-normal pb-2">Last Name</th>
                            <th className="font-normal pb-2">Username</th>
                            <th className="font-normal pb-2">Gender</th>
                            <th className="font-normal pb-2">Date Created</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <tr className="border-b border-slate-300">
                            <td className="py-4">Vinix</td>
                            <td>Collen</td>
                            <td>vinixcollen</td>
                            <td>Female</td>
                            <td>2024-06-05</td>
                            <td>
                                <Link href='/admin/dashboard/employees/edit/test' className="bg-black text-white px-3 py-2 rounded-lg">View Detail</Link>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

        </div>
    )
}