import WorkCard from "@/components/workCard";
import { work } from "@/data/work";

export default function WorkPage() {


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-8xl text-white">
            <div>
                <h1>Work</h1>
            </div>
            <div>
                <WorkCard data={work}/>
            </div>
        </main>
    )
}