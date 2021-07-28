import Image from "next/image";

// export default function Navbar() {
//   return (
//     <nav className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 bg-gradient-to-r from-blue-900 to-cyan-400 ">
//       <div className="flex items-center">
//         <div className="relative w-4 h-4 mr-2">
//           <Image
//             alt="navicon"
//             src="/navicon.svg"
//             layout="fill"
//             objectFit="contain"
//           />
//         </div>
//         <div className="relative w-12 h-5">
//           <Image alt="logo" src="/logo.svg" layout="fill" objectFit="contain" />
//         </div>
//       </div>
//       <a
//         href="https://shop.gettelly.com/products/telly-gadget"
//         className="px-6 py-1 text-xs font-light text-white rounded-md bg-violet-500"
//       >
//         Buy Now
//       </a>
//     </nav>
//   );
// }

export default function Navbar() {
  return (
    <section className="w-full pl-4 bg-gray-900">
      <div className="flex flex-col flex-wrap items-center justify-between h-12 mx-auto md:flex-row max-w-7xl">
        <a
          href="#_"
          className="flex items-center order-first h-12 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0"
        >
          <span className="text-xl font-black leading-none text-white select-none logo">
            TELLY
          </span>
        </a>

        <div className="relative flex-col hidden h-full md:flex md:flex-row">
          <nav className="flex flex-wrap items-center h-full pt-3 pb-5 mb-4 text-base border-b border-gray-800 md:pt-0 md:mb-0 md:border-b-0 md:pr-1 md:mr-1 md:border-r md:pb-0">
            <a
              href="#_"
              className="flex items-center h-full px-4 font-medium leading-6 text-gray-200 hover:text-gray-100 hover:bg-gray-800"
            >
              Home
            </a>
            <a
              href="#_"
              className="flex items-center h-full px-4 font-medium leading-6 text-gray-200 hover:text-gray-100 hover:bg-gray-800"
            >
              Support
            </a>
            <a
              href="#_"
              className="flex items-center h-full px-4 font-medium leading-6 text-gray-200 hover:text-gray-100 hover:bg-gray-800"
            >
              Pricing
            </a>
            <a
              href="#_"
              className="flex items-center h-full px-4 font-medium leading-6 text-gray-200 hover:text-gray-100 hover:bg-gray-800"
            >
              Blog
            </a>
          </nav>
          <div className="inline-flex items-center justify-center h-full md:justify-end">
            <a
              href="#"
              className="flex items-center h-full px-5 text-base font-medium leading-6 text-gray-200 whitespace-no-wrap transition duration-150 ease-in-out hover:bg-gray-800 hover:text-gray-100"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center h-full px-4 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-pink-600 border border-transparent hover:bg-pink-500 focus:outline-none focus:border-pink-700 focus:shadow-outline-indigo active:bg-pink-700"
            >
              Buy Now
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 flex items-center justify-center h-full pr-4 cursor-pointer md:hidden">
          <svg
            className="w-6 h-6 text-gray-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 8h16M4 16h16"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
