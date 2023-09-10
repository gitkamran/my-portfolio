
const Skills = () => {
  return (
    <div id='skills' className='w-full h-screen flex flex-col md:flex-row gap-4 items-center justify-center bg-fuchsia-100'>
      <div className='flex flex-col gap-8 w-[80%]'>
        <h1 className='border-r-8 pr-2 border-r-fuchsia-400 text-2xl md:text-4xl font-extrabold text-gray-600 drop-shadow-md'>مهارت هایی که دارم</h1>
        <div className="flex items-center justify-between ltr border-b border-b-fuchsia-400 pb-8">
          <div className="flex flex-col gap-4">
            <div className='flex items-center gap-1 md:text-xl text-gray-500'>
              <h2>HTML</h2>
            </div>
            <div className='flex items-center gap-1 md:text-xl text-gray-500'>
              <h2>CSS</h2>
            </div>
            <div className='flex items-center gap-1 md:text-xl text-gray-500'>
              <h2>JAVASCRIPT</h2>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className='flex items-center gap-1 md:text-xl text-gray-500'>
              <h2>React JS</h2>
            </div>
            <div className='flex items-center gap-1 md:text-xl text-gray-500'>
              <h2>Next JS</h2>
            </div>
            <div className='flex items-center gap-1 md:text-xl text-gray-500'>
              <h2>Node JS</h2>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className='flex items-center gap-1 md:text-xl text-gray-500'>
              <h2>Tailwind CSS</h2>
            </div>
            <div className='flex items-center gap-1 md:text-xl text-gray-500'>
              <h2>Sass</h2>
            </div>
            <div className='flex items-center gap-1 md:text-xl text-gray-500'>
              <h2>Bootstrap</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills