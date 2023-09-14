"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { BsClock, BsAward, BsX } from 'react-icons/bs'

const EjucationBox = ({ title, desc, courseDur, score, src, alt }) => {
    const [linkImage, setLinkImage] = useState("")
    const [showImage, setShowImage] = useState(false)

    const handleKeyDown = event => {
        if (showImage && event.key === "Escape") {
            setShowImage(false)
        }
    };
    return (
        <div>
            <div className='flex flex-col items-stretch gap-2 bg-indigo-300/50 p-2 rounded-md'>
                <h2 className='text-gray-600 text-lg text-left'>{title}</h2>
                <p className='text-gray-500 text-sm text-left border-b border-b-indigo-400 pb-2'>{desc}</p>
                <div className='flex items-center gap-1 border-b border-b-indigo-400 pb-2'>
                    <div className='flex items-center gap-1'>
                        <BsClock className='text-gray-600' />
                        <span className='text-gray-600 text-sm'>طول دوره:</span>
                    </div>
                    <span className='text-indigo-600 text-lg'>{courseDur}</span>
                    <span className='text-gray-600 text-sm'>ساعت</span>
                </div>
                <div className='flex items-center gap-1 border-b border-b-indigo-400 pb-2'>
                    <div className='flex items-center gap-1'>
                        <BsAward className='text-gray-600' />
                        <span className='text-gray-600 text-sm'>نمره از 100:</span>
                    </div>
                    <span className='text-indigo-600 text-lg'>{score}</span>
                </div>

                <div onClick={() => {
                    setLinkImage(src);
                    setShowImage(true)
                }}
                    className="cursor-pointer focus:outline-none"
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                >
                    <Image
                        src={src}
                        alt={alt}
                        width={400}
                        height={400}
                        priority
                        className='w-auto h-auto rounded-md'
                    />
                </div>
                {
                    showImage &&
                    <div className="fixed inset-0 bg-indigo-500/70 z-50 p-4">
                        <div className='flex items-center justify-center w-full h-full'>
                            <Image
                                src={linkImage}
                                alt={alt}
                                width={800}
                                height={600}
                                priority
                                className='w-auto h-auto rounded-md'
                            />
                        </div>
                        <BsX onClick={() => setShowImage(false)} className="cursor-pointer absolute top-2 right-2 text-4xl text-white" />
                    </div>
                }
            </div>
        </div>
    )
}

export default EjucationBox