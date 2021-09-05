import Image from "next/image";

export default function Showcase() {
  return (
    <section className="mt-10 text-gray-800">
      <div className="mb-6 text-3xl font-semibold tracking-tight text-center">
        Best Sellers
      </div>
      {/* <div className="font-semibold text-center text-white rounded-lg bg-rose-600">
        Others dont need an app or Telly to connect
      </div> */}

      <div className="flex flex-col py-12 overflow-hidden text-center border rounded-lg shadow-lg">
        <div className="text-3xl font-semibold ">Telly Black</div>
        <div className="flex items-center self-center space-x-1">
          <div className="relative h-10 w-28">
            <Image
              alt="stars"
              src="/hero/stars.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="font-mono text-sm">311 reviews</div>
        </div>
        <div className="">
          <Image
            alt=""
            src="/showcase/telly-black.png"
            width={150}
            height={150}
          />
        </div>
        <a
          href="https://shop.gettelly.com/products/telly-gadget"
          className="py-2 mx-20 mt-3 text-lg font-medium text-center text-white rounded-md shadow bg-violet-500"
        >
          Buy Now
        </a>
      </div>
    </section>
  );
}
