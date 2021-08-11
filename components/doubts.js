import Image from "next/image";

export default function Doubts() {
  return (
    <section className="py-6 space-y-4 text-gray-800">
      <div className="flex items-center px-5 py-3 rounded-lg shadow bg-gray-50">
        <div className="relative w-12 h-12">
          <Image
            alt="truck"
            src="/doubts/shipping-rose.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col ml-4">
          <div className="text-lg text-rose-700 font-sm">Fast Shipping</div>
          <div className="text-sm font-thin">Quick, No-Contact Delivery</div>
        </div>
      </div>
      <div className="flex items-center px-5 py-3 rounded-lg shadow bg-gray-50">
        <div className="relative w-12 h-12">
          <Image
            alt="truck"
            src="/doubts/shipping-rose.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col ml-4">
          <div className="text-lg text-rose-700 font-sm">Fast Shipping</div>
          <div className="text-sm font-thin">Quick, No-Contact Delivery</div>
        </div>
      </div>
      <div className="flex items-center px-5 py-3 rounded-lg shadow bg-gray-50">
        <div className="relative w-12 h-12">
          <Image
            alt="truck"
            src="/doubts/shipping-rose.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col ml-4">
          <div className="text-lg text-rose-700 font-sm">Fast Shipping</div>
          <div className="text-sm font-thin">Quick, No-Contact Delivery</div>
        </div>
      </div>
    </section>
  );
}
