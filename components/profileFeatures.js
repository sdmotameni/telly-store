export default function ProfileFeatures() {
  return (
    <section className="px-4 py-8 mx-4 space-y-4 text-white bg-black rounded-3xl">
      <div className="flex flex-col items-center">
        <div className="text-xl font-semibold">Cutomizable Profiles</div>
        <div className="leading-tight tracking-tight text-center">
          Display all your social media accounts and phone contact information
          elegantly on your profile!
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
