import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const links = [ 
    {
        title: "GitHub",
        name: "@adrian1lara",
        url: "https://github.com/adrian1lara",
        icon: <FaGithub/>
    },
    {
        title: "LinkedIn",
        name: "@AdrianLara",
        url: "https://www.linkedin.com/in/adrianlara1/",
        icon: <FaLinkedin/>
    }, 
    {
        title: "YouTube",
        name: "@devLara",
        url: "https://www.youtube.com/channel/UCSsEN3TosTV6ww_UH-1yMuQ",
        icon: <FaYoutube/>
    }, 
    {
        title: "Instagram",
        name: "@adrian1lara",
        url: "https://www.instagram.com/adrian1lara/",
        icon: <FaInstagram/>
    }
]
export default function FindMe() {
    return (
        <div className="mt-10">
            <h3 className="border-b-2 border-green-300 border-opacity-50 max-w-fit">How to Find Me</h3>
            <div className="flex flex-col mt-4">
                {links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" 
                    className="flex ml-1 p-2 items-center hover:bg-green-300 hover:bg-opacity-25  text-green-300 text-bold rounded w-fit ">
                       <span className="mr-1">{link.icon}</span> {link.name}
                    </a>
                ))}
            </div>
        </div>
    )
}