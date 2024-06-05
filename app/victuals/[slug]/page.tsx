'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import arrow from '@/public/svgs/arrow.svg'
import order from '@/public/svgs/order.svg'
import placeholder from '@/public/svgs/menu-placeholder.svg'


export default function FoodDetail({ params }: {params: { slug: string }}) {
    const [count, setCount] = useState(1)

    return (
        <div className="w-11/12 mx-auto">
            <div className="mt-10 flex justify-between">
                <Link href='/'>
                    <Image src={arrow} width={30} height={30} alt='icon' />
                </Link>
                <Link href='/cart'>
                    <Image src={order} width={30} height={30} alt='icon' />
                </Link>
            </div>

            <div className="my-16 flex justify-between items-center pl-5">
                <div>
                    <h1 className="text-2xl font-medium w-3/4">Chicken Fried Rice</h1>
                    <div className="my-5">
                        <h3 className="text-slate-500">Price</h3>
                        <p className="font-semibold text-xl">$ 21.99</p>
                    </div>
                    <div className="">
                        <h3 className="text-xl text-slate-500 mb-2">Choice quantity</h3>
                        <div className="flex items-center">
                            <button className="font-semibold bg-white rounded-xl py-1 px-3 text-lg" onClick={() => count == 1 ? setCount(1) : setCount(count - 1)}> -</button>
                            <p className="mx-5 font-semibold">{count}</p>
                            <button className="font-semibold bg-white rounded-xl py-1 px-3 text-lg" onClick={() => setCount(count + 1)}>+</button>
                        </div>
                    </div>
                </div>
                <Image src={placeholder} width={150} height={300} alt='placeholder' />
            </div>

            <div className="mt-5 bg-white absolute left-0 bottom-0 rounded-tr-3xl rounded-tl-3xl">
                <div className="w-10/12 mx-auto py-10">
                    <div className="mb-5">
                        <h1 className="font-semibold text-xl">Description</h1>
                    </div>
                    <p className="leading-relaxed">This Italian salad is full of all the right flavors and textures: crisp lettuce, crunchy garlic croutons, and zingy pepperoncini. It&apos;s covered in punchy, herby Italian vinaigrette that makes the flavors sing! It can play sidekick to just about anything.</p>
                    <div className="flex justify-between mt-10">
                        <button className="bg-black px-5 py-3 rounded-2xl text-white text-lg">Order Now</button>
                        <button className="border border-black px-5 py-3 rounded-2xl">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}