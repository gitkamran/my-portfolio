import { BsGithub, BsInstagram } from "react-icons/bs"

const SocialMedia = () => {
  return (
    <div className='flex items-center gap-2'>
      <a href='https://www.instagram.com/mkamran.ir' target='_blank'>
        <BsInstagram className="text-2xl text-zinc-600" />
      </a>
      <a href='https://github.com/gitkamran' target='_blank'>
        <BsGithub className="text-2xl text-zinc-600" />
      </a>
    </div>
  )
}

export default SocialMedia