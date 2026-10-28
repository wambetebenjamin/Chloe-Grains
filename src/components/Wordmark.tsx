export default function Wordmark() {
  return (
    <span className="cg-wordmark">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo.svg" alt="" width={38} height={38} />
      <span className="cg-wordmark-text">
        <span className="cg-wordmark-name">Chloe Grains</span>
        <span className="cg-wordmark-tagline">Ancient grains. Present strength.</span>
      </span>
    </span>
  );
}
