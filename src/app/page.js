import LogoName from "@/components/logoName";
import MyInfo from "@/components/myInfo";
import MyStack from "@/components/stack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 px-10 max-w-[800px] border-2">
      <div className="flex flex-col">
          <LogoName />
          <MyInfo/>
          <MyStack/>
      </div>
    </main>
  );
}
