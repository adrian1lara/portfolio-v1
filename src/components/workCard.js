import Image from "next/image";

export default function WorkCard({data}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.map((work, index) => (
                <div key={index} className="max-w-[300px] p-2 hover:border-2 hover:border-green-300 hover:border-opacity-50 rounded">
                <Image src={work.img} height={"200"} width={"300"} className="rounded"/>
                <div className="p-4 text-center">
                    <h3 className="text-xl font-light capitalize">{work.title}</h3>
                    <p>{work.description}</p>
                </div>
            </div>
            ))} 
        </div>
    )
}