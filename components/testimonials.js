import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="mx-5 my-14 customcolor">
      <div className="mb-4 text-2xl font-bold text-center">
        See what others are saying
      </div>
      <div className="px-2 py-4 border rounded-lg">
        <div className="flex flex-col items-center px-2 py-4">
          <div className="flex items-center">
            <div className="relative w-32 h-10">
              <Image
                alt="stars"
                src="/hero/stars.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="text-sm text-gray-600">08/02/21</div>
          </div>
          <div className="text-lg font-semibold">I Love Telly!!</div>
          <div className="p-3">
            <div className="relative w-20 h-20">
              <Image
                alt="stars"
                src="/showcase/telly-black.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="text-sm italic text-center text-gray-500">
            Great when people ask for my contact info on the spot!
          </div>
          <div className="mt-2 text-xs font-semibold">Jacob Wildo</div>
        </div>
      </div>
    </section>
  );
}
