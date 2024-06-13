'use client'

import Image from "next/image"

import dollar from '@/public/svgs/dollar.svg'
import Link from "next/link"
import { FormEvent } from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import clsx from "clsx"

export default function CreateVictuals() {
    const [valid, setValid] = useState(true)
    const [validName, setValidName] = useState(true)
    const [validShort, setValidShort] = useState(true)
    const [validDesc, setValidDesc] = useState(true)
    const [validPrice, setValidPrice] = useState(true)

    const router = useRouter()
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        // Handles the validation of the form
        let valid = formValidation(formData)

        if (valid) {
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
    }

    /**
     * Handles the validation of the formData based on user
     * input. It checks name, short description, description, and
     * price
     * @param formData 
     * @returns boolean
     */
    const formValidation = (formData: any) => {
        const [name, short, desc, price]: [any, any, any, any] = [formData.get('name'), formData.get('short'), formData.get('desc'), formData.get('price')]
        const [nameErrMsg, shortErrMsg, descErrMsg, priceErrMsg]: [any, any, any, any] = [document.getElementById('name-err-msg'), document.getElementById('short-err-msg'), document.getElementById('desc-err-msg'), document.getElementById('price-err-msg')]
        let valid = true
        let priceRegex = /^(0|[1-9]\d*)(\.\d+)?$/g

        if (name === "") {
            nameErrMsg.innerHTML = "Can't be empty."
            valid = false

            setValidName(false)
        } else {
            nameErrMsg.innerHTML = ""

            setValidName(true)
        }

        if (short === '') {
            shortErrMsg.innerHTML = "Can't be empty."
            valid = false

            setValidShort(false)
        } else {
            shortErrMsg.innerHTML = ""

            setValidShort(true)
        }

        if (desc === '') {
            descErrMsg.innerHTML = "Can't be empty."
            valid = false
            
            setValidDesc(false)
        } else {
            descErrMsg.innerHTML = ""

            setValidDesc(true)
        }

        if (price === '') {
            priceErrMsg.innerHTML = "Can't be empty."
            valid = false

            setValidPrice(false)
        } else if (price.match(priceRegex) === null) {
            priceErrMsg.innerHTML = 'Please enter a valid amount with two decimal precision.'
            valid = false

            setValidPrice(false)
        } else {
            priceErrMsg.innerHTML = ""

            setValidPrice(true)
        }

        return valid
    }

    return (
        <div className="ml-72 mr-8 my-8 w-full">
            <h1 className="text-2xl font-semibold">Add New Victual</h1>

            <div className="mt-5 bg-white py-5 px-5 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-x-5 mb-5">
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Name</label>
                            <input type='text' name="name" placeholder='Fried Rice' className={clsx("px-3 py-1.5 rounded-lg text-sm border", validName ? "border-slate-300" : "border-red-500")} />
                            <p className="text-red-500 text-xs mt-1" id='name-err-msg'></p>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Category</label>
                            <select className="px-3 py-2 rounded-lg border border-slate-300 text-sm" name='category'>
                                <option value='Food'>Food</option>
                                <option value='Drink'>Drink</option>
                                <option value='Dessert'>Dessert</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Short Description</label>
                        <textarea name='short' placeholder='Write a short description ...' className={clsx("px-3 py-2 border rounded-lg text-sm", validShort ? "border-slate-300" : "border-red-500")} />
                        <p className="text-red-500 text-xs mt-1" id="short-err-msg"></p>
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Description</label>
                        <textarea name='desc' placeholder='Write a description ...' className={clsx("px-3 py-2 border rounded-lg text-sm", validDesc ? "border-slate-300" : "border-red-500")} />
                        <p className="text-red-500 text-xs mt-1" id="desc-err-msg"></p>
                    </div>

                    <div className="flex flex-col mb-10">
                        <label className="mb-1 text-sm">Price</label>
                        <div className="relative">
                            <Image src={dollar} width={20} height={20} alt='icon' className="absolute top-2 left-1" />
                            <input type='text' name='price' placeholder='10' className={clsx("px-3 py-2 border rounded-lg text-sm px-8 py-2 w-full", validPrice ? "border-slate-300": "border-red-500")} />
                            <p className="text-red-500 text-xs mt-1" id="price-err-msg"></p>
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