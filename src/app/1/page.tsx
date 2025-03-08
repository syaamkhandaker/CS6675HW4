import Image from "next/image";

export default function Page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center gap-y-2 gap-x-2">
      <Image src={"/img1.jpg"} alt="" width={300} height={300} />
      <Image src={"/img2.jpg"} alt="" width={300} height={300} />
    </div>
  );
}
