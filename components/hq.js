import Image from "next/image";

export default function HQ() {
  return (
    <section className="flex flex-col items-center px-10 py-5 space-y-4 bg-blue-900">
      <div className="text-2xl font-medium text-center">
        Headquartered In Charlotte, NC
      </div>
      <div className="relative w-screen h-72">
        <Image alt="" src="/map.png" layout="fill" objectFit="contain" />
      </div>
      <div className="font-thin text-center">
        615 S College Street, 10th Floor, Charlotte, NC 28202
      </div>
    </section>
  );
}
