import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div id='portfolio' className='snap-start w-full h-screen flex flex-col gap-4 items-center justify-center bg-indigo-100 pt-12 md:pt-0'>
      <div className='flex flex-col gap-4 w-[95%] lg:w-[80%] bg-indigo-200/30 shadow-md rounded-md px-2 py-4 md:p-4'>
        <h1 className='border-r-8 pr-2 border-r-gray-400 text-2xl font-extrabold text-gray-600 mb-8'>چنتا از نمونه کار هام</h1>
        <div className="flex flex-col gap-4 w-full">
          <div className='bg-indigo-300/30 w-full flex items-start rounded-md overflow-hidden shadow-md'>
            <Image
              src="/assets/images/mk.jpg"
              alt='وب اپلیکیشن خرید فایل'
              width={400}
              height={400}
              priority
              className='w-48 h-auto'
            />
            <div className='p-2 flex flex-col gap-2'>
              <h2 className='text-gray-600 text-xl'>وب اپلیکیشن خرید فایل</h2>
              <p className='text-sm text-gray-500'>وب اپلیکیشن خرید و دانلود فایل و  پرداخت انلاین</p>
              <div>
                <h2>تکنولوژی های استفاده شده: </h2>
                <h2>next js, node js, express, mongo db, tailwind css</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio