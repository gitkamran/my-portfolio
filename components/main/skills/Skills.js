import SkillBox from "@/components/skill-box/SkillBox"
import Image from "next/image"

const Skills = () => {
  return (
    <div id='skills' className='snap-start w-full h-screen flex flex-col gap-4 items-center justify-center bg-indigo-100 pt-12 md:pt-0'>
      <div className='flex flex-col gap-4 w-[95%] lg:w-[80%] bg-indigo-200/30 shadow-md rounded-md px-2 py-4 md:p-4'>
        <h1 className='border-r-8 pr-2 border-r-gray-400 text-2xl font-extrabold text-gray-600 mb-8'>مهارت هایی که دارم</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 ltr border-b border-b-gray-400 pb-4 gap-4">
            <SkillBox
              src="/assets/images/skills/html.svg"
              alt="HTML"
              title="HTML"
            />
            <SkillBox
              src="/assets/images/skills/css.svg"
              alt="CSS"
              title="CSS"
            />
            <SkillBox
              src="/assets/images/skills/javascript.svg"
              alt="JavaScript"
              title="JavaScript"
            />
            <SkillBox
              src="/assets/images/skills/react.svg"
              alt="React JS"
              title="React JS"
            />
            <SkillBox
              src="/assets/images/skills/nextjs.svg"
              alt="Next JS"
              title="Next JS"
            />
            <SkillBox
              src="/assets/images/skills/nodejs.svg"
              alt="Node JS"
              title="Node JS"
            />
            <SkillBox
              src="/assets/images/skills/tailwindcss.svg"
              alt="Tailwind CSS"
              title="Tailwind CSS"
            />
            <SkillBox
              src="/assets/images/skills/sass.svg"
              alt="Sass"
              title="Sass"
            />
            <SkillBox
              src="/assets/images/skills/bootstrap.svg"
              alt="Bootstrap"
              title="Bootstrap"
            />
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between w-full">
          <h2 className="md:text-lg text-gray-500">قبل از برنامه نویسی اینها رو انجام میدادم</h2>
          <div className="flex items-center justify-between gap-4 ltr">
            <div className='flex items-center gap-1 md:gap-2 md:text-xl text-gray-500 w-fit'>
              <Image
                src="/assets/images/skills/photoshop.svg"
                alt="HTML"
                width={28}
                height={28}
                priority
                className="w-6 md:w-7 h-auto"
              />
              <h2 className="">Photoshop</h2>
            </div>
            <div className='flex items-center gap-1 md:gap-2 md:text-xl text-gray-500 w-fit'>
              <Image
                src="/assets/images/skills/illustrator.svg"
                alt="HTML"
                width={28}
                height={28}
                priority
                className="w-6 md:w-7 h-auto"
              />
              <h2 className="">Illustrator</h2>
            </div>
            <div className='flex items-center gap-1 md:gap-2 md:text-xl text-gray-500 w-fit'>
              <Image
                src="/assets/images/skills/wordpress.svg"
                alt="HTML"
                width={28}
                height={28}
                priority
                className="w-6 md:w-7 h-auto"
              />
              <h2 className="">Wordpress</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills