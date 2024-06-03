import Image from "next/image"
import Link from "next/link"

import placeholder from '@/public/images/placeholder.png'
import arrow from '@/public/svgs/arrow.svg'
import order from '@/public/svgs/order.svg'

export default function Cart() {


    return (
        <div className="w-11/12 mx-auto">
            <div className="mt-10 flex items-center justify-between">
                <Link href='/'>
                    <Image src={arrow} width={30} height={30} alt='icon' />
                </Link>
                <h1 className="my-5 font-semibold text-2xl">Cart</h1>
            </div>

            <h1 className="mt-5 mb-5">Order List (1)</h1>

            <div className="flex items-center bg-white px-3 py-5 rounded-3xl shadow-xl mb-5">
                <Image src={placeholder} width={100} height={100} alt='placeholder' className="mr-4" />
                <div>
                    <h1 className="font-semibold text-lg">Fried Rice (x3)</h1>
                    <p className="text-slate-500 mt-1 mb-3">This is the short description of the food</p>
                    <p className="mb-5 font-semibold">$ 23.00</p>

                    <button className="border border-red-500 text-red-500 px-3 py-1 rounded-3xl text-sm active:text-white active:bg-red-500">Remove</button>
                </div>
            </div>
            

            <div className="fixed bottom-0 mx-auto text-center py-5 bg-white w-screen left-0 shadow-xl">
                <button className="w-11/12 mx-auto bg-black text-white py-4 rounded-xl">Place Order</button>
            </div>
        </div>
    )
}