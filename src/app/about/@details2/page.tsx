import Image from "next/image";

export default function Details2() {
  return (
    <div className="mt-24 grid grid-cols-2 p-5 w-full h-screen gap-5">
      <div className="text-center ml-24">
        <div>
          <Image src="/contact.png" alt="about image" width="500" height="250" />
        </div>
      </div>
      <div className="text-center mr-24 flex items-center text-2xl">
      we create digital ideas that are bigger, bolder, braver and better. We 
                believe in good ideas flexibility and precission. We're world's Our Special 
                Special Team best consulting & finance solution provider. Wide range 
                of web and software development services
      </div>
    </div>
  );
}
