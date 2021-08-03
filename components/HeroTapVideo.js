export default function HeroTapVideo() {
  return (
    <video className="w-full h-80" autoPlay playsInline loop muted>
      <source
        src="https://res.cloudinary.com/dyusynvjw/video/upload/v1628022909/videos/telly_bluebg-o_vc5k26.webm"
        type="video/webm"
      />
      <source
        src="https://res.cloudinary.com/dyusynvjw/video/upload/v1628022908/videos/telly_bluebg-o_oxvxqi.mp4"
        type="video/mp4"
      />
    </video>
  );
}
