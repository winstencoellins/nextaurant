'use client'

import Image from "next/image";
import Link from "next/link";

import search from '@/public/svgs/search.svg'
import placeholder from '@/public/svgs/menu-placeholder.svg'
import profilePlaceholder from '@/public/images/profile-placeholder.jpg'


export default function Home() {
  const categories = [
    {id: 0, category: 'Food'},
    {id: 1, category: 'Drink'},
    {id: 2, category: 'Dessert'},
  ]

  const menus = [
    {id: 0, name: 'Fried Rice', short: 'Rice fried with chicken and egg', price: 80},
    {id: 1, name: 'Fried Rice', short: 'Rice fried with chicken and egg', price: 100},
    {id: 2, name: 'Fried Rice', short: 'Rice fried with chicken and egg', price: 100},
    {id: 3, name: 'Fried Rice', short: 'Rice fried with chicken and egg', price: 100},
    {id: 4, name: 'Fried Rice', short: 'Rice fried with chicken and egg', price: 100},
  ]

  return (
    <div className="w-11/12 mx-auto mb-[120px]">
      <div className="flex justify-between items-center mt-5 mb-10">
        <p>Welcome, Winsten!</p>
        <Image src={profilePlaceholder} width={60} height={60} alt='placeholder' className="rounded-full"/>
      </div>


      <h1 className="font-semibold text-2xl w-9/12 my-5">Search for your favourite delicious food</h1>

      <div className="relative my-5 shadow-xl rounded-3xl">
        <Image src={search} width={14} height={14} alt='icon' className="absolute top-6 left-3.5"/>
        <input type="text" placeholder="Search ..." className="px-10 py-5 w-full rounded-2xl text-base" />
      </div>

      {/* List of Categories */}
      <div className="flex flex-wrap mt-10 mb-5">
        {
          categories.map((c) => (
            <button key={c.id} className={`text-sm mr-3 px-3 py-1 bg-[#201F20]/30 text-white rounded-full focus:bg-black`} id={`${c.category.toLowerCase()}`}>
              {c.category}
            </button>
          ))
        }
      </div>

      {/* List of all Menus */}
      <div className="grid grid-cols-2 gap-x-5 gap-y-5">
        {
          menus.map((m) => (
            <Link href='/victuals/any-description' key={m.id} className="bg-white rounded-3xl shadow-xl px-4 py-6">
              <div className="flex justify-center">
                <Image src={placeholder} height={100} width={100} alt='placeholder' />
              </div>
              <h1 className="font-semibold text-sm my-2">{m.name}</h1>
              <p className="text-xs text-slate-500">{m.short}</p>
              <p className="text-sm mt-3 font-semibold">$ {m.price.toFixed(2)}</p>
            </Link>
          ))
        }
      </div>
    </div>
  );
}
