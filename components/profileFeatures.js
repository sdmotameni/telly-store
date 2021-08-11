import SettingsSVG from "../components/common/settingssvg";

export default function ProfileFeatures() {
  return (
    <section className="px-4 py-16 mt-6 text-white bg-black space-y-9 rounded-3xl">
      <div className="flex flex-col items-center px-5">
        <div className="flex items-center justify-center p-4 mb-3 text-black bg-white rounded-full shadow-sm">
          <SettingsSVG styles="w-8 h-8 fill-current" />
        </div>
        <div className="mb-1 text-3xl font-semibold">Customizable Profiles</div>
        <div className="text-lg leading-tight tracking-tight text-center">
          Display all your social media accounts and phone contact information
          in an elegant and impressionable way.
        </div>
      </div>
      <video className="w-full h-80" autoPlay playsInline loop muted>
        {/* <source
            src="https://res.cloudinary.com/dyusynvjw/video/upload/v1628022909/videos/telly_bluebg-o_vc5k26.webm"
            type="video/webm"
          /> */}
        <source
          src="https://cdn.shopify.com/s/files/1/0572/4058/4379/t/1/assets/profiledemo.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}
