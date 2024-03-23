
import Image from "next/image";

export default function VideoCard({data}) {
    return (
        <div className="w-max mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.map((video, index) => (
                <a key={index} href={video.url}
                 className="max-w-[350px] p-2 rounded">
                <Image src={video.img} height={"auto"} width={"auto"} className="rounded h-xl w-xl" alt={video.alt}/>
                <div className="p-4 text-center">
                    <h3 className="text-sm font-light capitalize">{video.title}</h3>
                </div>
            </a>
            ))} 
        </div>
    )
}