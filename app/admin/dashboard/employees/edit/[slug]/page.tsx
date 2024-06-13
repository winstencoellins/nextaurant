'use client'

import Link from "next/link"
import { FormEvent, useEffect, useState } from "react"
import clsx from "clsx"
import { useRouter } from "next/navigation"

export default function EditEmployee ({ params }: { params: { slug: string } }) {
    const router = useRouter()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [show, setShow] = useState(false)

    const [validFirstname, setValidFirstname] = useState(true)
    const [validLastname, setValidLastname] = useState(true)
    const [validUsername, setValidUsername] = useState(true)
    const [validPassword, setValidPassword] = useState(true)
    const [validEmail, setValidEmail] = useState(true)


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
        setPassword(data['employee'].password)

        setFirst(data['employee'].firstName)
        setLast(data['employee'].lastName)

        selectedAttribute(data['employee'].gender)
    }

    const selectedAttribute = (gender: any) => {
        const g:any = document.getElementById(gender.toLowerCase())
        g.selected = true
    }

     /**
     * Handles the validation of the formData based on user
     * input. It checks name, short description, description, and
     * price
     * @param formData 
     * @returns boolean
     */
     const formValidation = (formData: any) => {
        const [firstname, lastname, username, password, email]: [any, any, any, any, any] = [formData.get('firstName'), formData.get('lastName'), formData.get('username'), formData.get('password'), formData.get('email')]
        const [firstnameErrMsg, lastnameErrMsg, usernameErrMsg, passwordErrMsg, emailErrMsg]: [any, any, any, any, any] = [document.getElementById('firstname-err-msg'), document.getElementById('lastname-err-msg'), document.getElementById('username-err-msg'), document.getElementById('password-err-msg'), document.getElementById('email-err-msg')]
        let valid = true
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        if (firstname === "") {
            firstnameErrMsg.innerHTML = "Can't be empty."
            valid = false

            setValidFirstname(false)
        } else {
            firstnameErrMsg.innerHTML = ""

            setValidFirstname(true)
        }

        if (lastname === "") {
            lastnameErrMsg.innerHTML = "Can't be empty."
            valid = false

            setValidLastname(false)
        } else {
            lastnameErrMsg.innerHTML = ""

            setValidLastname(true)
        }

        if (username === "") {
            usernameErrMsg.innerHTML = "Can't be empty."
            valid = false

            setValidUsername(false)
        } else {
            usernameErrMsg.innerHTML = ""

            setValidUsername(true)
        }

        if (password === "") {
            passwordErrMsg.innerHTML = "Can't be empty."
            valid = false

            setValidPassword(false)
        } else {
            passwordErrMsg.innerHTML = ""

            setValidPassword(true)
        }

        if (email === "") {
            emailErrMsg.innerHTML = "Can't be empty."
            valid = false

            setValidEmail(false)
        } else if (email.match(emailRegex) == null) {
            emailErrMsg.innerHTML = "Please provide a valid email address."

            setValidEmail(false)
        } else {
            emailErrMsg.innerHTML = ""

            setValidEmail(true)
        }

        return valid
    }

    const handleShowPassword = () => {
        if (show){
            setShow(false)
        } else {
            setShow(true)
        }
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        formData.append('id', params.slug)

        let valid = formValidation(formData)

        if (valid) {
            const res = await fetch('/api/employee-detail', {
                method: 'PUT',
                body: formData
            })

            const data = await res.json()

            if (data.success) {
                return router.push('/admin/dashboard/employees')
            }
        }
    }

    return (
        <div className="ml-72 mr-8 my-8 w-full">
            <h1 className="text-2xl font-semibold">Edit {first + " " + last}</h1>

            <div className="mt-5 bg-white py-5 px-5 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-x-5 mb-5">
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">First Name</label>
                            <input type='text' name='firstName' value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder='John' className={clsx("px-3 py-1.5 rounded-lg border text-sm", validFirstname ? 'border-slate-300' : 'border-red-500')} />
                            <p className="mt-1 text-xs text-red-500" id="firstname-err-msg"></p>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Last Name</label>
                            <input type='text' name='lastName' value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder='Doe' className={clsx("px-3 py-1.5 rounded-lg border text-sm", validLastname ? 'border-slate-300' : 'border-red-500')} />
                            <p className="mt-1 text-xs text-red-500" id="lastname-err-msg"></p>
                        </div>
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Username</label>
                        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} placeholder='johndoe' className={clsx("px-3 py-2 border rounded-lg text-sm", validUsername ? "border-slate-300" : "border-red-500")} name="username" />
                        <p className="mt-1 text-xs text-red-500" id="username-err-msg"></p>
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-sm">Password</label>
                        <input type={show ? 'text' : 'password'} id="show" value={password} onChange={(event) => setPassword(event.target.value)} name='password' placeholder='johndoe' className={clsx("px-3 py-1.5 rounded-lg border text-sm", validPassword ? "border-slate-300" : "border-red-500")} />
                        <p className="text-red-500 text-xs mt-1" id="password-err-msg"></p>
                    </div>
                    <div className="flex items-center mb-5 mt-1">
                        <input type='checkbox' onChange={handleShowPassword} />
                        <label className="text-xs ml-1">Show Password</label>
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Email</label>
                        <input type='text' value={email} name="email" onChange={(event) => setEmail(event.target.value)} placeholder='johndoe@example.com' className={clsx("px-3 py-2 border rounded-lg text-sm", validEmail ? 'border-slate-300' : 'border-red-500')} />
                        <p className="mt-1 text-xs text-red-500" id="email-err-msg"></p>
                    </div>

                    <div className="flex flex-col mb-5">
                        <label className="mb-1 text-sm">Gender</label>
                        <select id='genders' onChange={(event) => setGender(event.target.value)} className="px-3 py-2 border border-slate-300 rounded-lg text-sm" name='gender'>
                            <option id='male' value='Male'>Male</option>
                            <option id='female' value='Female'>Female</option>
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