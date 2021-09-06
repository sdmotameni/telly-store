import Image from "next/image";

export default function Showcase() {
  const generateContainer = (name, reviewCount, imgPath) => {
    return (
      <div className="flex flex-col py-12 overflow-hidden text-center border rounded-lg shadow-lg">
        <div className="text-3xl font-semibold">{name}</div>
        <div className="flex items-center self-center space-x-1">
          <div className="relative h-10 w-28">
            <Image
              alt="stars"
              src="/hero/stars.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="font-mono text-sm">{reviewCount} reviews</div>
        </div>
        <div>
          <Image alt="" src={imgPath} width={150} height={150} />
        </div>
        <div className="mt-1 text-xl">$19.99</div>
        <a
          href="https://shop.gettelly.com/products/telly-gadget"
          className="py-2 mx-20 mt-3 text-lg font-medium text-center text-white rounded-md shadow bg-violet-500"
        >
          Buy Now
        </a>
        <div className="flex justify-center mt-5 space-x-1">
          <div className="relative w-5 h-5">
            <Image
              alt=""
              src="/showcase/like.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="tracking-tight">30-Day Money-back Guarantee</div>
        </div>
      </div>
    );
  };

  return (
    <section className="mt-10 text-gray-800">
      <div className="mb-6 text-3xl font-semibold tracking-tight text-center">
        Best Sellers
      </div>
      {/* <div className="font-semibold text-center text-white rounded-lg bg-rose-600">
        Others dont need an app or Telly to connect
      </div> */}

      <div className="space-y-5">
        {generateContainer("Telly Black", 311, "/showcase/telly-black.png")}
        {generateContainer("Telly Rose", 239, "/showcase/telly-rose.png")}
        {generateContainer("Telly Snow", 123, "/showcase/telly-snow.png")}
      </div>
    </section>
  );
}
