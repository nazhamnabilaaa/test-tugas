import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex flex-col">
      <div className="h-1/2 relative">
        <Image src="/hero.png" alt="hero image" width="500" height="250" />
      </div>
    </div>
      <div className="text-center flex flex-col gap-4">
        <div className="font-bold text-3xl">
          Welcome to My Next.JS Mini Project!
        </div>
        <div>This is my Home Page, let&apos;s see another routes!</div>
      </div>
    </>
  );
}
