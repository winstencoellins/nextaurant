'use client'

import Image from "next/image"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"
import { useState } from "react"
import clsx from "clsx"

export default function CreateEmployee() {
    const [valid, setValid] = useState(true)
    const [validFirstname, setValidFirstname] = useState(true)
    const [validLastname, setValidLastname] = useState(true)
    const [validUsername, setValidUsername] = useState(true)
    const [validPassword, setValidPassword] = useState(true)
    const [validEmail, setValidEmail] = useState(true)
    const [show, setShow] = useState(false)
    
    const router = useRouter()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        // Handles the validation of the form
        let valid = formValidation(formData)

        if (valid){
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
    }

    const handleChange = () => {
        if (show){
            setShow(false)
        } else {
            setShow(true)
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
        const [firstname, lastname, username, password, email]: [any, any, any, any, any] = [formData.get('firstname'), formData.get('lastname'), formData.get('username'), formData.get('password'), formData.get('email')]
        const [firstnameErrMsg, lastnameErrMsg, usernameErrMsg, passwordErrMsg, emailErrMsg]: [any, any, any, any, any] = [document.getElementById('firstname-err-msg'), document.getElementById('lastname-err-msg'), document.getElementById('username-err-msg'), document.getElementById('password-err-msg'), document.getElementById('email-err-msg')]
        let valid = true

        if (firstname === "") {
            firstnameErrMsg.innerHTML = "Can't be empty."
            valid = false

            setValidFirstname(false)
        } else {
            firstnameErrMsg.innerHTML = ""
            valid = true

            setValidFirstname(true)
        }

        if (lastname === "") {
            lastnameErrMsg.innerHTML = "Can't be empty."
            valid = false

            setValidLastname(false)
        } else {
            lastnameErrMsg.innerHTML = ""
            valid = true

            setValidLastname(true)
        }

        if (username === "") {
            usernameErrMsg.innerHTML = "Can't be empty."
            valid = false

            setValidUsername(false)
        } else {
            usernameErrMsg.innerHTML = ""
            valid = true

            setValidUsername(true)
        }

        if (password === "") {
            passwordErrMsg.innerHTML = "Can't be empty."
            valid = false

            setValidPassword(false)
        } else {
            passwordErrMsg.innerHTML = ""
            valid = true

            setValidPassword(true)
        }

        if (email === "") {
            emailErrMsg.innerHTML = "Can't be empty."
            valid = false

            setValidEmail(false)
        } else {
            emailErrMsg.innerHTML = ""
            valid = true

            setValidEmail(true)
        }

        return valid
    }

    return (
        <div className="ml-72 mr-8 my-8 w-full">
            <h1 className="text-2xl font-semibold">Add New Employee</h1>

            <div className="mt-5 bg-white py-5 px-5 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-x-5 mb-5">
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">First Name</label>
                            <input type='text' name='firstName' placeholder='John' className={clsx("px-3 py-1.5 rounded-lg border text-sm", validFirstname ? "border-slate-300" : "border-red-500")} />
                            <p className="text-red-500 text-xs mt-1" id="firstname-err-msg"></p>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Last Name</label>
                            <input type='text' name='lastName' placeholder='Doe' className={clsx("px-3 py-1.5 rounded-lg border text-sm", validLastname ? "border-slate-300" : "border-red-500")} />
                            <p className="text-red-500 text-xs mt-1" id="lastname-err-msg"></p>
                        </div>
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Username</label>
                        <input type='text' name='username' placeholder='johndoe' className={clsx("px-3 py-1.5 rounded-lg border text-sm", validUsername ? "border-slate-300" : "border-red-500")} />
                        <p className="text-red-500 text-xs mt-1" id="username-err-msg"></p>
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-sm">Password</label>
                        <input type={show ? 'text' : 'password'} id="show" name='password' placeholder='johndoe' className={clsx("px-3 py-1.5 rounded-lg border text-sm", validPassword ? "border-slate-300" : "border-red-500")} />
                        <p className="text-red-500 text-xs mt-1" id="password-err-msg"></p>
                    </div>
                    <div className="flex items-center mb-5 mt-1">
                        <input type='checkbox' onChange={handleChange} />
                        <label className="text-xs ml-1">Show Password</label>
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Email</label>
                        <input type='email' name='email' placeholder='johndoe@example.com' className={clsx("px-3 py-1.5 rounded-lg border text-sm", validEmail ? "border-slate-300" : "border-red-500")} />
                        <p className="text-red-500 text-xs mt-1" id="email-err-msg"></p>
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