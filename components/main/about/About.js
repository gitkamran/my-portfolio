import Image from 'next/image'
import { BsBook, BsCodeSlash, BsGeoAlt, BsHeart } from 'react-icons/bs'

const About = () => {
  return (
    <div id='about' className='w-full h-screen flex flex-col gap-4 items-center justify-center bg-violet-100'>
      <div className='flex flex-col md:flex-row gap-4 items-center justify-center w-[80%]'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-gray-500'>من محمد کامران هستم</h1>
          <div className='flex items-center gap-1 text-xl text-gray-500'>
            <BsGeoAlt />
            <h2>ساکن کرج</h2>
          </div>
          <div className='flex items-center gap-1 text-xl text-gray-500'>
            <BsBook />
            <h2>لیسانس کامپیوتر</h2>
          </div>
          <div className='flex items-center gap-1 text-xl text-gray-500'>
            <BsHeart />
            <h2>متاهل</h2>
          </div>
          <div className='flex items-center gap-1 text-xl text-gray-500'>
            <BsCodeSlash />
            <h2>برنامه نویس</h2>
          </div>
          <p className='text-gray-500'>در حال حاضر دو سال هست که reactjs و nodejs کار می کنم.</p>
        </div>
        <Image
          src="/assets/images/mk.svg"
          alt='محمد کامران'
          width={400}
          height={400}
          priority
          className='w-auto h-auto'
        />
      </div>
    </div>
  )
}

export default About