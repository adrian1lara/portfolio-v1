import Image from "next/image";

export default function WorkCard({data}) {
    return (
        <div className="w-max mt-10 grid grid-cols-1  md:grid-cols-2 gap-5">
            {data.map((work, index) => (
                <a key={index} className="max-w-[350px]  p-2 rounded ">
                <Image src={work.img} width="auto" height="auto" className="rounded h-xl w-xl border-2 border-opacity-50 border-green-300" alt={work.alt}/>
                <div className="p-4 text-center">
                    <h3 className="text-xl font-light capitalize">{work.title}</h3>
                    <p>{work.description}</p>
                </div>
            </a>
            ))} 
        </div>
    )
}