import WorkCard from "@/components/workCard";
import { work } from "@/data/work";

export default function WorkPage() {


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-8xl text-white">
            <h1 className="text-xl border-b-2 border-green-300 border-opacity-50">Work</h1>
            <div className="mt-10">
                <WorkCard data={work}/>
            </div>
        </main>
    )
}