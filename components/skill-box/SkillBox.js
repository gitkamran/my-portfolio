import Image from 'next/image'

const SkillBox = ({ src, alt, title }) => {
    return (
        <div className='text-gray-700 flex items-center'>
            <div className='bg-indigo-200 w-12 h-12 p-2 rounded-l-md flex items-center justify-center'>
                <Image
                    src={src}
                    alt={alt}
                    width={48}
                    height={48}
                    priority
                    className="w-12 h-auto"
                />
            </div>
            <div className='rounded-r-md bg-indigo-300 h-12 w-full flex items-center justify-center'>
                <h2 className='md:text-xl'>{title}</h2>
            </div>
        </div>
    )
}

export default SkillBox