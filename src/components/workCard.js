import Image from "next/image";

export default function WorkCard({data}) {
    return (
        <div className="flex flex-wrap max-w-[800px] justify-center space-x-2">
            {data.map((work, index) => (
                <div key={index} className="max-w-[300px] ">
                <Image src={work.img} height={"auto"} width={"auto"} className=""/>
                <div className="p-4 text-center">
                    <h3 className="text-xl font-light capitalize">{work.title}</h3>
                    <p>{work.description}</p>
                </div>
            </div>
            ))} 
        </div>
    )
}