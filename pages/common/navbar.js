import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 bg-purple-500">
      <div className="flex items-center">
        <img src="/navicon.svg" className="w-4 mr-2" />
        <img src="/logo.svg" className="w-12" />
      </div>
      <a
        href="https://gettelly.com/products/telly-gadget"
        className="px-5 py-1 text-xs text-gray-700 bg-white rounded-md"
      >
        Buy Now
      </a>
    </nav>
  );
}
