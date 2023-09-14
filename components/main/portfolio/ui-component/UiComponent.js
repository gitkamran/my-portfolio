"use client"

import Image from "next/image"
import UiImages from "../UiImages.json"
import { useState } from "react"
import { BsX } from "react-icons/bs"

const UiComponent = () => {
    const [linkImage, setLinkImage] = useState("")
    const [showImage, setShowImage] = useState(false)

    const handleKeyDown = event => {
        if (showImage && event.key === "Escape") {
            setShowImage(false)
        }
    };
    return (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 w-full">
            {UiImages.map((img, i) => (
                <div key={i}>
                    <div onClick={() => {
                        setLinkImage(img.image);
                        setShowImage(true)
                    }}
                        className="cursor-pointer focus:outline-none"
                        tabIndex={0}
                        onKeyDown={handleKeyDown}
                    >
                        <Image
                            src={img.image}
                            alt='طراحی UI پلتفرم تبلیغات آنلاین هایلایت'
                            width={400}
                            height={400}
                            priority
                            className='w-auto h-auto rounded-md'
                        />
                    </div>
                    {
                        showImage &&
                        <div className="fixed inset-0 bg-indigo-500/50 z-50">
                            <div className="fixed inset-10 bg-indigo-300/50 z-50 rounded-md p-2 flex items-center justify-center h-auto">
                                <Image
                                    src={linkImage}
                                    alt='طراحی UI پلتفرم تبلیغات آنلاین هایلایت'
                                    width={800}
                                    height={800}
                                    priority
                                    className='w-auto h-auto rounded-md'
                                />
                            </div>
                            <BsX onClick={() => setShowImage(false)} className="cursor-pointer absolute top-2 right-2 text-3xl text-white" />
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}

export default UiComponent