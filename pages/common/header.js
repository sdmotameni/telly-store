import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 bg-gradient-to-r from-blue-900 to-cyan-400 md:py-2 md:px-12 lg:px-64 ">
      <div className="flex items-center">
        <div className="relative w-4 h-4 mr-2 md:hidden">
          <Image
            alt="navicon"
            src="/navicon.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-12 h-5 md:w-16 md:h-10">
          <Image alt="logo" src="/logo.svg" layout="fill" objectFit="contain" />
        </div>
      </div>
      <a
        href="https://shop.gettelly.com/products/telly-gadget"
        className="px-5 py-1 text-xs text-white bg-purple-500 rounded-md md:text-base"
      >
        Buy Now
      </a>
    </nav>
  );
}
