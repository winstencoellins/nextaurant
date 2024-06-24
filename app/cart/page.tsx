'use client'

import Image from "next/image"
import Link from "next/link"

import placeholder from '@/public/svgs/menu-placeholder.svg'
import arrow from '@/public/svgs/arrow.svg'
import order from '@/public/svgs/order.svg'
import { useEffect, useState } from "react"

export default function Cart() {
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetchCart()
    }, [])

    const fetchCart = async () => {
        const res = await fetch('/api/cart', {
            method: 'POST'
        })

        const data = await res.json()

        console.log(data.cart)

        setCart(data.cart)
    }

    return (
        <div className="w-11/12 mx-auto">
            <div className="mt-10 flex items-center justify-between">
                <Link href='/'>
                    <Image src={arrow} width={30} height={30} alt='icon' />
                </Link>
                <h1 className="my-5 font-semibold text-2xl">Cart</h1>
            </div>

            <h1 className="mt-5 mb-5">Order List ({cart.length})</h1>

            <div className="flex flex-col items-center mb-28">
                {
                    cart.map((item:any) => (
                        <div key={item.id} className="bg-white px-8 py-5 rounded-3xl shadow-xl mb-5">
                            <Image src={placeholder} width={100} height={100} alt='placeholder' className="mr-4" />
                            <div>
                                <h1 className="font-semibold text-lg">{item.victual.name} (x{item.quantity})</h1>
                                <p className="text-slate-500 mt-1 mb-3">{item.victual.shortDescription}</p>
                                <p className="mb-5 font-semibold">$ {(parseFloat(item.victual.price) * item.quantity).toFixed(2)}</p>

                                <button id={item.victualId} className="border border-red-500 text-red-500 px-3 py-1 rounded-3xl text-sm active:text-white active:bg-red-500">Remove</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            

            <div className="fixed bottom-0 mx-auto text-center py-5 bg-white w-screen left-0 shadow-xl">
                <button className="w-11/12 mx-auto bg-black text-white py-4 rounded-xl">Place Order</button>
            </div>
        </div>
    )
}