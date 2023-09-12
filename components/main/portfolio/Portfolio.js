import Image from 'next/image'
import React from 'react'
import { BsBoxes } from 'react-icons/bs'

const Portfolio = () => {
  return (
    <div id='portfolio' className='snap-start w-full h-screen flex flex-col gap-4 items-center justify-center bg-indigo-100 pt-12 md:pt-0'>
      <div className='flex flex-col gap-4 w-[95%] lg:w-[80%] bg-indigo-200/30 shadow-md rounded-md px-2 py-4 md:p-4'>
        <h1 className='border-r-4 md:border-r-8 pr-2 border-r-gray-400 text-lg md:text-2xl font-extrabold text-gray-600'>چنتا از نمونه کار هام</h1>
        <div className="flex flex-col gap-4 w-full">
          <div className='bg-indigo-300/30 w-full flex items-end justify-between rounded-md shadow-md p-4'>
            <div className='flex items-stretch gap-2'>
              <div className='w-[20%]'>
                <Image
                  src="/assets/images/mk.jpg"
                  alt='وب اپلیکیشن خرید فایل'
                  width={400}
                  height={400}
                  priority
                  className='w-auto h-auto rounded-md'
                />
              </div>
              <div className='flex flex-col justify-between gap-4'>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-gray-600 text-xl'>وب اپلیکیشن خرید فایل</h2>
                  <p className='text-sm text-gray-500'>وب اپلیکیشن خرید و دانلود فایل و  پرداخت انلاین</p>
                </div>
                <div className='bg-indigo-300/50 p-2 rounded-md flex flex-col gap-2'>
                  <div className='flex items-center gap-1'>
                    <BsBoxes className='text-indigo-500' />
                    <h2 className='text-indigo-500'>تکنولوژی های استفاده شده: </h2>
                  </div>
                  <h2 className='text-gray-600'>next js, node js, express, mongo db, tailwind css</h2>
                </div>
              </div>
            </div>
            <div className=''>
              <a href='https://newupdate.ir' target='_blank' className='bg-indigo-500 p-2 rounded-md hover:bg-indigo-600 text-white'>مشاهده وبسایت</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio