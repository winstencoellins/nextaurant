'use client'

import { FormEvent } from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import clsx from "clsx"

export default function Login() {
    const [valid, setValid] = useState(true)
    const [validUsername, setValidUsername] = useState(true)
    const [validPassword, setValidPassword] = useState(true)
    const [show, setShow] = useState(false)

    const router = useRouter()
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)


        // Handles the validation of the form
        let valid = formValidation(formData)

        // if (valid) {
        //     const res = await fetch('/api/victuals', {
        //         method: 'POST',
        //         body: formData,
        //     })
    
    //         const data = await res.json()
    
    //         console.log(data.message)
    
    //         if (data.success) {
    //             return router.push('/login')
    //         }
    //     }
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
        const [username, password]: [any, any] = [formData.get('username'), formData.get('password')]
        const [usernameErrMsg, passwordErrMsg]: [any, any] = [document.getElementById('username-err-msg'), document.getElementById('pass-err-msg')]
        let valid = true

        if(username === ""){
            usernameErrMsg.innerHTML = "Can't be empty."
            valid = false

            setValidUsername(false)
        } else{
            usernameErrMsg.innerHTML = ""
            valid = true

            setValidUsername(true)
        }

        if (password === ""){
            passwordErrMsg.innerHTML = "Can't be empty."
            valid = false
            
            setValidPassword(false)
        } else {
            passwordErrMsg.innerHTML = ""
            valid = true

            setValidPassword(true)
        }
        return valid
    }

    return (
        <div className="w-11/12 lg:w-4/12 mx-auto h-screen flex justify-center items-center">
            <div className="w-full bg-white px-10 py-10 rounded-lg">
                <h1 className="font-semibold text-3xl text-center mb-2">Sign In</h1>
                <p className="text-center mb-10">Please sign-in to start your order</p>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-5">
                        <label>Username</label>
                        <input type="text" placeholder="johndoe" className={clsx("px-3 py-1.5 rounded-lg text-sm border", validUsername ? "border-slate-300" : "border-red-500")} name='username' /> 
                        <p className="text-red-500 text-xs mt-1" id='username-err-msg'></p>
                    </div>
                    <div className="flex flex-col mb-2">
                        <label>Password</label>
                        <input type={show ? 'text' : 'password'} placeholder="••••••" className={clsx("px-3 py-1.5 rounded-lg text-sm border", validPassword ? "border-slate-300" : "border-red-500")} name='password' id="show" />
                        <p className="text-red-500 text-xs mt-1" id='pass-err-msg'></p>
                    </div>
                    <div className="flex items-center mb-5">
                        <input type='checkbox' onChange={handleChange} />
                        <label className="text-xs ml-1">Show Password</label>
                    </div>

                    <button type="submit" className="bg-black text-white w-full py-3 rounded-xl mt-5">Login</button>
                </form>
            </div>
        </div>
    )
}