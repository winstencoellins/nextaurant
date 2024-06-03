import Image from "next/image"
import Link from "next/link"

import arrow from '@/public/svgs/arrow.svg'

export default function EditVictuals() {
    return (
        <div className="w-11/12 mx-auto">
            <div className="mt-10 flex justify-between">
                <Link href='/'>
                    <Image src={arrow} width={30} height={30} alt='icon' />
                </Link>
                <p className="font-semibold text-2xl">Edit Victual</p>
            </div>

            {/* TODO: Create a form here by following the format in "/profile/edit" */}

        </div>
    )
}