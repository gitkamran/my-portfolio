"use client"

import { useRef, useState } from "react"

const FormContact = () => {
    const fullnameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

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

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            fullnameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
            setTimeout(() => {
                setError("")
            }, 3000)
        }
    };
    return (
        <div className="flex flex-col gap-1 w-full p-4">
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
                <div className="flex flex-col gap-0.5">
                    <label htmlFor="fullname" className="md:text-lg text-gray-500">نام شما</label>
                    <input
                        type="text"
                        id="fullname"
                        className="p-2 rounded-md md:w-2/3 focus:outline-indigo-300"
                        ref={fullnameRef}
                    />
                </div>
                <div className="flex flex-col gap-0.5">
                    <label htmlFor="email" className="md:text-lg text-gray-500">ایمیل شما</label>
                    <input
                        type="text"
                        id="email"
                        className="p-2 rounded-md md:w-2/3 focus:outline-indigo-300"
                        ref={emailRef}
                    />
                </div>
                <div className="flex flex-col gap-0.5">
                    <label htmlFor="message" className="md:text-lg text-gray-500">پیام شما</label>
                    <textarea
                        rows={6}
                        id="message"
                        className="p-2 rounded-md focus:outline-indigo-300"
                        ref={messageRef}
                    />
                </div>
                <button type="submit" className="md:text-lg p-2 rounded-md bg-indigo-500 hover:bg-indigo-600 ease-in duration-300 text-white w-fit">ارسال پیام</button>
            </form>
            <div className="flex flex-col">
                {error && error.map((e, i) => (
                    <div
                        key={i}
                        className={`${success ? "text-green-800" : "text-red-600"
                            } py-1`}
                    >
                        {e}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FormContact