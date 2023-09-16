"use client"

import Image from "next/image"
import { useState } from "react"
import { BsBoxes } from "react-icons/bs"

const PortfolioBox = ({ src, alt, title, desc, tools, link, bgImage }) => {
    const [showText, setShowText] = useState(false)
    return (
        <div className='bg-indigo-300/30 w-full rounded-md shadow-md p-2 md:p-4'>
            <div className='flex flex-col md:flex-row md:items-stretch justify-between gap-2 w-full h-full'>
                <div className="w-1/2 md:w-full h-fit md:basis-[30%] bg-indigo-300 p-2 rounded-md">
                    <div className={`${bgImage ? bgImage : "bg-indigo-300/50"} rounded-md`}>
                        <Image
                            src={src}
                            alt={alt}
                            width={400}
                            height={400}
                            priority
                            className='w-auto h-auto rounded-md'
                        />
                    </div>
                </div>
                <div className='flex flex-col justify-between gap-4 w-full'>
                    <div className='flex flex-col gap-1'>
                        <div className="flex items-center flex-wrap gap-2">
                            <h2 className='text-gray-600 lg:text-xl'>{title}</h2>
                            <a href={link} target='_blank' className='bg-indigo-500 p-1.5 rounded-md hover:bg-indigo-600 text-white text-xs'>مشاهده وبسایت</a>
                        </div>

                        <p className={`${!showText && "line-clamp-2"} text-sm text-gray-500`}>{desc}</p>
                        {desc &&
                            <>
                                {showText ? <span className='text-indigo-500 text-sm cursor-pointer w-fit' onClick={() => setShowText(false)}>مخفی کردن متن</span> : <span className='text-indigo-500 text-sm cursor-pointer w-fit' onClick={() => setShowText(true)}>مشاهده متن</span>}
                            </>}
                    </div>
                    <div className='w-auto flex flex-col md:flex-row gap-2 items-end justify-between'>
                        <div className='bg-indigo-300/50 p-2 rounded-md flex flex-col gap-2 w-full md:w-fit'>
                            <div className='flex items-center gap-1'>
                                <BsBoxes className='text-indigo-500' />
                                <h2 className='text-indigo-500'>تکنولوژی های استفاده شده: </h2>
                            </div>
                            <h2 className='text-gray-600'>{tools}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioBox