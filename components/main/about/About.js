import Image from 'next/image'
import Link from 'next/link'
import { BsBook, BsCodeSlash, BsGeoAlt, BsHeart } from 'react-icons/bs'

const About = () => {
  return (
    <div id='about' className='w-full min-h-screen flex flex-col gap-4 items-center justify-center bg-violet-100'>
      <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
        <div className='flex flex-col gap-4'>
          <h1 className='border-r-8 pr-2 border-r-indigo-400 text-2xl md:text-4xl font-extrabold text-gray-600 drop-shadow-md'>من محمد کامران هستم</h1>
          <div className='flex items-center gap-1 md:text-xl text-gray-500'>
            <BsGeoAlt className='text-indigo-400' />
            <h2>ساکن کرج</h2>
          </div>
          <div className='flex items-center gap-1 md:text-xl text-gray-500'>
            <BsBook className='text-indigo-400' />
            <h2>لیسانس کامپیوتر</h2>
          </div>
          <div className='flex items-center gap-1 md:text-xl text-gray-500'>
            <BsHeart className='text-indigo-400' />
            <h2>متاهل</h2>
          </div>
          <div className='flex items-center gap-1 md:text-xl text-gray-500'>
            <BsCodeSlash className='text-indigo-400' />
            <h2>برنامه نویس</h2>
          </div>
          <p className='text-gray-600 text-sm md:text-base'>
            در حال حاضر react js، next js و node js کار می کنم.
          </p>
          <p className='text-gray-600 text-sm md:text-base'>
            می تونید مهارت های من رو <Link href="/#skills" className='text-blue-500 underline underline-offset-4'>اینجا</Link> مطالعه بفرمائید.</p>
        </div>
        <div className='flex items-center justify-center w-[70%] md:w-[45%] lg:w-[50%]'>
          <Image
            src="/assets/images/mk.svg"
            alt='محمد کامران'
            width={460}
            height={460}
            priority
            className='w-auto h-auto rounded-full'
          />
        </div>
      </div>
    </div>
  )
}

export default About