import Image from 'next/image'
import Link from 'next/link'
import { BsBook, BsCodeSlash, BsGeoAlt, BsHeart } from 'react-icons/bs'

const About = () => {
  return (
    <div id='about' className='snap-start w-full min-h-screen flex flex-col gap-4 items-center justify-center bg-indigo-100 pt-12'>
      <div className='flex flex-col md:flex-row md:items-stretch justify-center gap-2 w-[95%] lg:w-[80%] shadow-md rounded-md bg-indigo-200/30 overflow-hidden p-2 md:p-4'>
        <div className='flex flex-col gap-3 lg:gap-4 w-full'>
          <h1 className='border-r-4 md:border-r-8 pr-2 border-r-gray-400 text-lg md:text-2xl font-extrabold text-gray-600'>محمد کامران هستم</h1>
          <div className='flex items-center gap-1 md:text-lg lg:text-xl text-gray-500'>
            <BsGeoAlt className='text-indigo-400' />
            <h2>ساکن کرج</h2>
          </div>
          <div className='flex items-center gap-1 md:text-lg lg:text-xl text-gray-500'>
            <BsBook className='text-indigo-400' />
            <h2>لیسانس کامپیوتر</h2>
          </div>
          <div className='flex items-center gap-1 md:text-lg lg:text-xl text-gray-500'>
            <BsHeart className='text-indigo-400' />
            <h2>متاهل</h2>
          </div>
          <div className='flex items-center gap-1 md:text-lg lg:text-xl text-gray-500'>
            <BsCodeSlash className='text-indigo-400' />
            <h2>برنامه نویس</h2>
          </div>
          <p className='text-gray-600 text-sm lg:text-base'>
            در حال حاضر react js، next js و node js کار می کنم.
            می تونید مهارت های من رو <Link href="/#skills" className='text-blue-500 underline underline-offset-4'>اینجا</Link> مطالعه بفرمائید.</p>
        </div>
        <div className='flex items-center justify-center w-full md:w-auto overflow-hidden rounded-md'>
          <Image
            src="/assets/images/mk.jpg"
            alt='محمد کامران'
            width={800}
            height={800}
            priority
            className='w-auto h-auto object-cover md:hover:scale-110 ease-linear duration-300'
          />
        </div>
      </div>
    </div>
  )
}

export default About