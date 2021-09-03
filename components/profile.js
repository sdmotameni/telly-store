import SettingsSVG from "./common/settingssvg";

export default function Profile() {
  return (
    <section className="flex flex-col px-4 py-10 mt-6 text-white custombg space-y-7 rounded-3xl">
      <div className="flex flex-col items-center px-5">
        <div className="flex items-center justify-center p-4 mb-3 text-black bg-white rounded-full shadow-sm">
          <SettingsSVG styles="w-8 h-8 fill-current" />
        </div>
        <div className="mb-1 text-3xl font-semibold">Customizable Profile</div>
        <div className="text-lg leading-tight tracking-tight text-center">
          Display all your social media accounts and phone contact information
          in an elegant and impressionable way.
        </div>
      </div>
      <a
        href="https://shop.gettelly.com/products/telly-gadget"
        className="px-4 py-2 mx-12 text-lg font-medium text-center text-white rounded-md bg-cyan-500"
      >
        Buy Now
      </a>
      <span className="flex items-center justify-center">
        <video
          className="w-auto rounded-3xl h-80"
          autoPlay
          playsInline
          loop
          muted
        >
          <source
            src="https://res.cloudinary.com/dyusynvjw/video/upload/v1628647369/videos/profiledemo-o_d772yj.webm"
            type="video/webm"
          />
          <source
            src="https://res.cloudinary.com/dyusynvjw/video/upload/v1628647369/videos/profiledemo-o_hxy6hn.mp4"
            type="video/mp4"
          />
        </video>
      </span>
    </section>
  );
}
