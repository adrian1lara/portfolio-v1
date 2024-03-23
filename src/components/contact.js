'use client'
import { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";

export default function ContactMe() {
    const [scale, setScale] = useState('')
    return (
        <div className="mt-5">
            <h3 className="border-b-2  w-fit border-green-300 border-opacity-50">Get In Touch</h3>
            <div className="mt-3 w-full flex flex-col items-center">
                <p>Send me an email if you want more information!</p>
                <a href="mailto:adrianlara203@gmail.com"
                className="mt-2 flex items-center bg-green-300 bg-opacity-35 text-green-400 p-2 rounded w-fit" onMouseOver={() => setScale("scale-125 ease-in duration-300 rotate-45")}
                onMouseOut={()=> setScale("")} >
                    <span className="mr-2">Contact With Me</span> <CiLocationArrow1 className={scale} />
                </a>
            </div>
        </div>
    )
}