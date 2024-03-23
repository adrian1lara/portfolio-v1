import WorkCard from "@/components/workCard";
import { work } from "@/data/work";

export default function WorkPage() {


    return (
        <main className="flex min-h-screen flex-col  justify-between p-24 max-w-8xl text-white">
            <h1 className="text-xl text-left border-b-2 border-green-300 border-opacity-50 w-fit">Work</h1>
            <WorkCard data={work}/>
        </main>
    )
}