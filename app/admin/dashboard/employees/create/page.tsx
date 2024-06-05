'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"

export default function CreateEmployee() {
    
    const router = useRouter()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const res = await fetch('/api/employees', {
            method: 'POST',
            body: formData,
        })

        const data = await res.json()

        console.log(data.message)

        if (data.success) {
            return router.push('/admin/dashboard/employees')
        }
    }

    return (
        <div className="mx-5 mt-8 w-full">
            <h1 className="text-2xl font-semibold">Add New Employee</h1>

            <div className="mt-5 bg-white py-5 px-5 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-x-5 mb-5">
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">First Name</label>
                            <input type='text' name='firstName' placeholder='John' className="px-3 py-1.5 rounded-lg border border-slate-300 text-sm" />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Last Name</label>
                            <input type='text' name='lastName' placeholder='Doe' className="px-3 py-1.5 rounded-lg border border-slate-300 text-sm" />
                        </div>
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Username</label>
                        <input type='text' name='username' placeholder='johndoe' className="px-3 py-2 border border-slate-300 rounded-lg text-sm" />
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Password</label>
                        <input type='password' name='password' placeholder='johndoe' className="px-3 py-2 border border-slate-300 rounded-lg text-sm" />
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Email</label>
                        <input type='email' name='email' placeholder='johndoe@example.com' className="px-3 py-2 border border-slate-300 rounded-lg text-sm" />
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Gender</label>
                        <select name='gender' className="px-3 py-2 border border-slate-300 rounded-lg text-sm">
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                    </div>

                    <div className="flex">
                        <Link href='/admin/dashboard/employees' className="border border-red-500 px-3 py-2 rounded-lg text-red-500">Cancel</Link>
                        <button type='submit' className="bg-black text-white px-3 py-2 rounded-lg mx-5">Create Employee</button>
                    </div>
                </form>
            </div>
        </div>
    )
}