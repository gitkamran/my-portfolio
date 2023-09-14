import EjucationBox from "./ejucation-box/EjucationBox"

const Ejucation = () => {
  return (
    <div id='Ejucation' className='snap-start w-full min-h-screen flex items-center justify-center bg-indigo-100 pt-12'>
      <div className='flex flex-col gap-4 w-[95%] lg:w-[80%] bg-indigo-200/30 shadow-md rounded-md px-2 py-4 md:p-4'>
        <h1 className='border-r-4 md:border-r-8 pr-2 border-r-gray-400 text-lg md:text-2xl font-extrabold text-gray-600'>سوابق و مدارک آموزشی</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <EjucationBox
            title="Web Design Pack"
            desc="html, css, bootstrap, sass, javascript, git and github"
            courseDur="150"
            score="100"
            src="/assets/images/ejucation/web-design-pack.webp"
            alt="web desgin pack course"
          />
          <EjucationBox
            title="React Js"
            desc="react js, node js"
            courseDur="40"
            score="89"
            src="/assets/images/ejucation/reactjs.webp"
            alt="react js course"
          />
          <EjucationBox
            title="Photoshop and Illustrator"
            desc="adobe photoshop and adobe illustrator"
            courseDur="80"
            score="100"
            src="/assets/images/ejucation/ps-ai.webp"
            alt="photoshop and illustrator course"
          />
        </div>
      </div>
    </div>
  )
}

export default Ejucation