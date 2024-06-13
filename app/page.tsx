'use client'

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import search from '@/public/svgs/search.svg'
import placeholder from '@/public/svgs/menu-placeholder.svg'
import profilePlaceholder from '@/public/images/profile-placeholder.jpg'


export default function Home() {
  const [temp, setTemp] = useState([])
  const [menus, setMenus] = useState([])
  const [prev, setPrev] = useState('food')

  const categories = [
    {id: 0, category: 'Food'},
    {id: 1, category: 'Drink'},
    {id: 2, category: 'Dessert'},
  ]
  
  useEffect(() => {
    fetchMenus()
    onStart()
  }, [])


  /**
   * This function fetches the victuals data from the backend
   * and show it to the user.
   */
  const fetchMenus = async () => {
    const res = await fetch('http://localhost:3000/api/victuals')
    const data = await res.json()

    let result = data['victuals'].filter((menu: any) => menu.category == 'Food')

    setTemp(result)
    setMenus(data['victuals'])
    
  }


  /**
   * This function changes the category button color only
   * on initial render. 
   */
  const onStart = () => {
    const btn: any = document.getElementById('food')
    btn.className = 'text-sm mr-3 px-3 py-1 rounded-full bg-black text-white'
  }

  
  /**
   * This function handles the background color change of the category
   * whenever user clicks on it. By tracking the previous button to
   * change it back to it's inactive state.
   * @param event
   */
  const handleClick = (event: any) => {
    let arr = menus

    const c: any = document.getElementById(event.target.innerHTML.toLowerCase())
    c.className = 'text-sm mr-3 px-3 py-1 rounded-full bg-black text-white'
    
    
    const last: any = document.getElementById(prev.toLowerCase())
    last.className = 'text-sm mr-3 px-3 py-1 rounded-full bg-[#201F20]/30 text-white'
    
    setPrev(event.target.innerHTML.toLowerCase())

    let result = arr.filter((menu: any) => menu.category == event.target.innerHTML)

    console.log(result)

    setTemp(result)
    
  }

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
            <button key={c.id} id={c.category.toLowerCase()} className={'text-sm mr-3 px-3 py-1 rounded-full bg-[#201F20]/30 text-white'} onClick={(event) => handleClick(event)}>
              {c.category}
            </button>
          ))
        }
      </div>

      {/* List of all Menus */}
      <div className="grid grid-cols-2 gap-x-5 gap-y-5">
        {
          temp.map((m: any) => (
            <Link href={`/victuals/${m.id}`} key={m.id} className="bg-white rounded-3xl shadow-xl px-4 py-6">
              <div className="flex justify-center">
                <Image src={placeholder} height={100} width={100} alt='placeholder' />
              </div>
              <h1 className="font-semibold text-sm my-2">{m.name}</h1>
              <p className="text-xs text-slate-500">{m.shortDescription.slice(0, 51)} ...</p>
              <p className="text-sm mt-3 font-semibold">$ {m.price}</p>
            </Link>
          ))
        }
      </div>
    </div>
  );
}
