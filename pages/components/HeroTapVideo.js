export default function HeroTapVideo() {
  return (
    <video className="w-full h-80" autoPlay playsInline loop muted>
      <source
        src="https://us.getnexar.com/_next/static/videos/day-f744cb887147aa49ab08d08031aafffe.mp4"
        type="video/mp4"
      />
      <source
        src="https://us.getnexar.com/_next/static/videos/day-sm-26e976708354751d886f49859ae35e02.webm"
        type="video/webm"
      />
    </video>
  );
}
