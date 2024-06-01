import Image from "next/image";

import search from '@/public/svgs/search.svg'
import placeholder from '@/public/images/placeholder.png'

export default function Home() {
  const categories = [
    {id: 0, category: 'Favourite'},
    {id: 1, category: 'Food'},
    {id: 2, category: 'Drink'},
    {id: 3, category: 'Dessert'},
  ]

  const menus = [
    {id: 0, name: 'Fried Rice', short: 'Rice fried with chicken and egg', price: 100},
    {id: 1, name: 'Fried Rice', short: 'Rice fried with chicken and egg', price: 100},
    {id: 2, name: 'Fried Rice', short: 'Rice fried with chicken and egg', price: 100},
    {id: 3, name: 'Fried Rice', short: 'Rice fried with chicken and egg', price: 100},
    {id: 4, name: 'Fried Rice', short: 'Rice fried with chicken and egg', price: 100},
  ]

  return (
    <div className="w-11/12 mx-auto mb-[120px]">
      <h1 className="font-semibold text-2xl w-9/12 my-5">Enjoy your favourite delicious food</h1>

      <div className="relative my-5 shadow-xl rounded-3xl">
        <Image src={search} width={14} height={14} alt='icon' className="absolute top-6 left-3.5"/>
        <input type="text" placeholder="Search ..." className="px-10 py-5 w-full rounded-2xl text-base" />
      </div>

      <div className="flex flex-wrap mt-10 mb-5">
        {
          categories.map((c) => (
            <button key={c.id} className="text-sm mr-5 px-3 py-1 bg-black/30 text-white rounded-full focus:bg-black">
              {c.category}
            </button>
          ))
        }
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-5">
        {
          menus.map((m) => (
            <div key={m.id} className="bg-white rounded-3xl shadow-xl px-4 py-8">
              <Image src={placeholder} height={100} width={100} alt='placeholder' />
              <h1 className="font-semibold text-sm my-2">{m.name}</h1>
              <p className="text-xs text-slate-500">{m.short}</p>
              <p className="text-sm mt-3 font-bold">$ {m.price.toFixed(2)}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
