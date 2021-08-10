export default function HowItWorks() {
  return (
    <section className="px-4 py-8 mx-4 space-y-4 text-blue-500 rounded-3xl custombg2">
      <div className="flex flex-col items-center">
        <div className="text-xl font-semibold">Instant Connection</div>
        <div className="leading-tight tracking-tight text-center text-gray-900">
          Tap your Telly to the back of anyone's phone to share your custom
          Telly profile instantly!
        </div>
      </div>
      <video className="w-full h-80" autoPlay playsInline loop muted>
        {/* <source
          src="https://res.cloudinary.com/dyusynvjw/video/upload/v1628022909/videos/telly_bluebg-o_vc5k26.webm"
          type="video/webm"
        /> */}
        <source
          src="https://cdn.shopify.com/s/files/1/0572/4058/4379/t/1/assets/character.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}
