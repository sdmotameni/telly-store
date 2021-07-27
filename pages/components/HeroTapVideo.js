export default function HeroTapVideo() {
  return (
    <video className="w-full h-80" autoPlay playsInline loop muted>
      <source
        src="https://res.cloudinary.com/dyusynvjw/video/upload/v1627422241/videos/tap-bluebg-o_cs4nm5.webm"
        type="video/webm"
      />
      <source
        src="https://res.cloudinary.com/dyusynvjw/video/upload/v1627422189/videos/tap-bluebg_esg2pb.mp4"
        type="video/mp4"
      />
    </video>
  );
}
