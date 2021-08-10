export default function Features() {
  return (
    <section className="mx-auto mt-3 space-y-10 max-w-7xl md:px-10">
      <div className="flex flex-col items-center h-full py-10 overflow-hidden rounded-3xl bg-gradient-to-tr from-purple-900 via-indigo-800 to-pink-600 md:flex-row ">
        <div className="flex flex-col items-center justify-center w-full h-full py-5 pl-16 pr-16 mb-10 md:w-1/2 md:mb-0 md:items-start md:pl-10 lg:pl-16 lg:pr-10">
          <h2 className="inline-block mx-auto text-5xl font-bold leading-tight text-transparent sm:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 md:mx-0">
            8-core CPU
          </h2>
          <h3 className="text-5xl font-bold leading-none text-indigo-100 sm:text-6xl lg:text-7xl">
            We're on a <br />
            power chip.
          </h3>
          <p className="max-w-sm my-8 text-center text-white opacity-75 md:text-left lg:text-lg md:max-w-none">
            The M1 chip makes MacBook Pro outrageously fast and powerful. Its
            8‑core CPU rips through complex workflows and heavy workloads, with
            up to 2.8x faster processing performance.
          </p>
          <a
            href="#_"
            className="px-6 py-2 text-lg font-medium text-white border-2 border-white rounded-full"
          >
            Learn More
          </a>
        </div>

        <div className="flex justify-end w-full pl-6 overflow-hidden md:w-1/2 md:pl-0">
          <img
            src="https://cdn.devdojo.com/images/april2021/mb-1.png"
            className="object-cover w-full h-full transform translate-x-0 md:translate-x-0"
          />
        </div>
      </div>

      <div className="flex flex-col items-center h-full py-10 overflow-hidden md:rounded-xl bg-gradient-to-tr from-blue-900 via-indigo-700 to-green-700 md:flex-row">
        <div className="flex justify-start w-full pr-6 overflow-hidden md:w-1/2 md:pr-0">
          <img
            src="https://cdn.devdojo.com/images/april2021/mb-2.png"
            className="object-cover w-full h-full transform translate-x-0 md:translate-x-0"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full py-5 pl-16 pr-12 mb-10 md:w-1/2 md:mb-0 md:items-start md:pl-16 lg:pl-10 lg:pr-12">
          <h2 className="inline-block pb-2 mx-auto text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 md:mx-0">
            16-core Neural Engine.
          </h2>
          <h3 className="text-5xl font-bold leading-none text-indigo-50">
            Smarts, meet speed.{" "}
          </h3>
          <p className="max-w-sm my-8 text-center text-white opacity-75 md:text-left lg:text-lg md:max-w-none">
            Machine learning (ML) brings task‑smashing speed and automation to
            video analysis, voice recognition, image processing, and more.
            16‑core Neural Engine and full stack of technologies takes ML
            performance to the stratosphere.
          </p>
          <a
            href="#_"
            className="px-6 py-2 text-lg font-medium text-white border-2 border-white rounded-full"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center h-full py-10 overflow-hidden bg-gray-900 bg-cover md:rounded-xl md:flex-row">
        <div className="flex flex-col items-center justify-center w-full h-full py-5 pl-16 pr-16 mb-10 md:w-1/2 md:mb-0 md:items-start md:pl-10 lg:pl-16 lg:pr-0">
          <h2 className="inline-block mx-auto text-5xl font-bold leading-tight text-transparent sm:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-purple-200 to-pink-100 md:mx-0">
            The power of{" "}
          </h2>
          <h3 className="max-w-lg text-5xl font-bold leading-tight text-white">
            macOS Big Sur on M1.
          </h3>
          <p className="max-w-sm my-8 text-center text-white opacity-75 md:text-left lg:text-lg md:max-w-none">
            Developed to unlock the potential of the M1 chip, macOS Big Sur
            transforms Mac with major performance benefits and so much more.
            Powerful updates for apps. A beautiful new design. Industry-leading
            privacy features and best‑in‑className security.
          </p>
          <a
            href="#_"
            className="px-6 py-2 text-lg font-medium text-white border-2 border-white rounded-full"
          >
            Learn More
          </a>
        </div>

        <div className="flex justify-end w-full pl-6 overflow-hidden md:w-1/2 md:pl-0">
          <img
            src="https://cdn.devdojo.com/images/april2021/macbook.png"
            className="object-cover w-full h-full transform translate-x-0 md:translate-x-0"
          />
        </div>
      </div>
    </section>
  );
}
