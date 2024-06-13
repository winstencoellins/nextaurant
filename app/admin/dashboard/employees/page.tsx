'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import search from '@/public/svgs/search.svg'

export default function Employees() {
    const [users, setUsers] = useState([])
    const [valid, setValid] = useState(true)
    const [validFirstname, setValidFirstname] = useState(true)
    const [validLastname, setValidLastname] = useState(true)
    const [validUsername, setValidUsername] = useState(true)
    const [validPassword, setValidPassword] = useState(true)
    const [validEmail, setValidEmail] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:3000/api/employees', { cache: 'force-cache' })
        const data = await response.json()

        setUsers(data['users'])
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
                         {
                             users.map((user:any) => (        
                                 <tr key={user.firstName} className="border-b border-slate-300">
                                     <td className="py-4">{user.firstName}</td>
                                     <td>{user.lastName}</td>
                                     <td>{user.username}</td>
                                     <td>{user.gender}</td>
                                     <td>{user.createdDate.split('T')[0]}</td>
                                     <td>
                                         <Link href={`/admin/dashboard/employees/edit/${user.id}`} className="bg-black text-white px-3 py-2 rounded-lg">View Detail</Link>
                                     </td>
                                 </tr>
                             ))
                         }
                     </tbody>
                 </table>
            </div>

        </div>
    )
}