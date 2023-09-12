"use client"

import { useRef, useState } from "react"

const FormContact = () => {
    const fullnameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
    const [faild, setFaild] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                fullname: fullnameRef.current.value,
                email: emailRef.current.value,
                message: messageRef.current.value,
            }),
        });

        const { msg, success, faild } = await res.json();
        setError(msg);
        setSuccess(success);
        setFaild(faild)
        if (success) {
            fullnameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
            setTimeout(() => {
                setSuccess(false)
            }, 3000)
        }
    };
    return (
        <div className="flex flex-col gap-2 w-full p-2 md:p-4">
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
                <div className="flex flex-col gap-0.5">
                    <label htmlFor="fullname" className="md:text-lg text-gray-500">نام شما</label>
                    <input
                        type="text"
                        id="fullname"
                        className="p-2 rounded-md md:w-2/3 focus:outline-indigo-300"
                        ref={fullnameRef}
                    />
                    {error && error.fullname &&
                        <span className="text-xs text-red-500 pt-1">{error.fullname.message}</span>
                    }
                </div>
                <div className="flex flex-col gap-0.5">
                    <label htmlFor="email" className="md:text-lg text-gray-500">ایمیل شما</label>
                    <input
                        type="text"
                        id="email"
                        className="p-2 rounded-md md:w-2/3 focus:outline-indigo-300"
                        ref={emailRef}
                    />
                    {error && error.email &&
                        <span className="text-xs text-red-500 pt-1">{error.email.message}</span>
                    }
                </div>
                <div className="flex flex-col gap-0.5">
                    <label htmlFor="message" className="md:text-lg text-gray-500">پیام شما</label>
                    <textarea
                        rows={6}
                        id="message"
                        className="p-2 rounded-md focus:outline-indigo-300"
                        ref={messageRef}
                    />
                    {error && error.message &&
                        <span className="text-xs text-red-500 pt-1">{error.message.message}</span>
                    }
                </div>
                <button type="submit" className="md:text-lg p-2 rounded-md bg-indigo-500 hover:bg-indigo-600 ease-in duration-300 text-white w-fit">ارسال پیام</button>
            </form>
            {success &&
                <span className="text-sm bg-green-700 text-white p-2 text-center rounded-md">{error}</span>
            }
            {
                faild &&
                < span className="text-sm bg-red-700 text-white p-2 text-center rounded-md">{error}</span>
            }
        </div >
    )
}

export default FormContact