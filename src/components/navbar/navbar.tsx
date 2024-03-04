import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center gap-5 mt-10">
      <div>
        <Link href={"/"}>Home</Link>
      </div>
      <div>
        <Link href={"/about"}>About</Link>
      </div>
      <div>
        <Link href={"/event"}>Event</Link>
      </div>
    </div>
  );
}
