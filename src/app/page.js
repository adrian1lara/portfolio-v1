import LogoName from "@/components/logoName";
import MyInfo from "@/components/myInfo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-8xl">
      <div className="flex ">
          <LogoName />
          <MyInfo/>
      </div>
    </main>
  );
}
