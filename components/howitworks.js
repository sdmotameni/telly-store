import ConnectSVG from "../components/common/connectsvg";

export default function HowItWorks() {
  return (
    <section className="px-4 py-16 shadow-sm text-cyan-500 space-y-9 rounded-3xl custombg2">
      <div className="flex flex-col items-center px-5">
        <div className="flex items-center justify-center p-4 mb-3 bg-white rounded-full shadow-sm">
          <ConnectSVG styles="w-8 h-8 fill-current" />
        </div>
        <div className="mb-1 text-3xl font-semibold">Instant Connection</div>
        <div className="text-lg leading-tight tracking-tight text-center text-gray-600">
          Tap your Telly to the back of anyones smartphone to instantly share
          your profile!
        </div>
      </div>
      <video className="w-full h-80" autoPlay playsInline loop muted>
        <source
          src="https://res.cloudinary.com/dyusynvjw/video/upload/v1628647527/videos/character-o_t5joq8.webm"
          type="video/webm"
        />
        <source
          src="https://res.cloudinary.com/dyusynvjw/video/upload/v1628647527/videos/character-o_fsrq7u.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}
