'use client'

import Link from "next/link"
import { FormEvent, useEffect, useState } from "react"

export default function EditEmployee ({ params }: { params: { slug: string } }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')


    useEffect(() => {
        fetchEmployeeDetail()
    }, [])

    const fetchEmployeeDetail = async () => {
        const formData = new FormData()

        formData.append('id', params.slug)

        const response = await fetch('/api/employee-detail', {
            method: 'POST',
            body: formData
        })

        const data = await response.json()

        setFirstName(data['employee'].firstName)
        setLastName(data['employee'].lastName)
        setUsername(data['employee'].username)
        setEmail(data['employee'].email)
        setGender(data['employee'].gender)

        setFirst(data['employee'].firstName)
        setLast(data['employee'].lastName)

        selectedAttribute(data['employee'].gender)
    }

    const selectedAttribute = (gender: any) => {
        const g:any = document.getElementById(gender.toLowerCase())
        g.selected = true
    }

    return (
        <div className="ml-72 mr-8 my-8 w-full">
            <h1 className="text-2xl font-semibold">Edit {first + " " + last}</h1>

            <div className="mt-5 bg-white py-5 px-5 rounded-lg shadow-lg">
                <form>
                    <div className="grid grid-cols-2 gap-x-5 mb-5">
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">First Name</label>
                            <input type='text' name='firstName' value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder='John' className="px-3 py-1.5 rounded-lg border border-slate-300 text-sm" />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Last Name</label>
                            <input type='text' name='lastName' value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder='Doe' className="px-3 py-1.5 rounded-lg border border-slate-300 text-sm" />
                        </div>
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Username</label>
                        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} placeholder='johndoe' className="px-3 py-2 border border-slate-300 rounded-lg text-sm" />
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Email</label>
                        <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} placeholder='johndoe@example.com' className="px-3 py-2 border border-slate-300 rounded-lg text-sm" />
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Gender</label>
                        <select id='genders' onChange={(event) => setGender(event.target.value)} className="px-3 py-2 border border-slate-300 rounded-lg text-sm">
                            <option id='male' value='male'>Male</option>
                            <option id='female' value='female'>Female</option>
                        </select>
                    </div>

                    <div className="flex">
                        <Link href='/admin/dashboard/employees' className="border border-red-500 px-3 py-2 rounded-lg text-red-500">Cancel</Link>
                        <button className="bg-black text-white px-3 py-2 rounded-lg mx-5">Edit Employee</button>
                    </div>
                </form>
            </div>
        </div>
    )
}