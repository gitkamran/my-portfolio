import ContactBox from "@/components/contact-box/ContactBox"
import FormContact from "@/components/formContact/FormContact"
import { BsFillEnvelopeAtFill, BsTelephoneFill, BsWhatsapp } from "react-icons/bs"

const ContactMe = () => {


  return (
    <div id='contact' className='snap-start w-full min-h-screen flex flex-col gap-4 items-center justify-center bg-indigo-100 pt-12'>
      <div className='flex flex-col gap-4 w-[95%] lg:w-[80%] bg-indigo-200/30 shadow-md rounded-md px-2 py-4 md:p-4'>
        <h1 className='border-r-4 md:border-r-8 pr-2 border-r-gray-400 text-lg md:text-2xl font-extrabold text-gray-600'>تماس با من</h1>
        <div className='bg-indigo-300/30 w-full flex flex-col md:flex-row md:items-start rounded-md shadow-md gap-2'>
          <FormContact />
          <div className="w-full p-2 md:p-4 flex flex-col gap-2">
            <ContactBox
              icon={<BsTelephoneFill />}
              variable="تلفن"
              value="09369139993"
              href="tel:+989369139993"
            />
            <ContactBox
              icon={<BsFillEnvelopeAtFill />}
              variable="ایمیل"
              value="mkamran.ir@gmail.com"
              href="mailto:mkamran.ir@gmail.com"
            />
            <ContactBox
              icon={<BsWhatsapp />}
              variable="واتساپ"
              value="09369139993"
              href="https://wa.me/09369139993"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe