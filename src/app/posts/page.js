import VideoCard from "@/components/videoCard";
import { videos } from "@/data/videos";

export default function PostPage() {
    return(
        <main className="flex min-h-screen flex-col  justify-between p-24 max-w-8xl text-white">
            <h1 className="text-xl text-left border-b-2 border-green-300 border-opacity-50 w-fit">My recent posts</h1>
            <div className="w-full">
                <VideoCard data={videos} />
            </div>
            
        </main>
    )
}