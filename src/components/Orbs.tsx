export function Orbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="orb float-slow" style={{ background: "var(--sky)", width: 220, height: 220, top: "8%", left: "-4%" }} />
      <div className="orb float-slower" style={{ background: "var(--peach)", width: 160, height: 160, top: "32%", right: "4%" }} />
      <div className="orb float-slowest" style={{ background: "var(--lilac)", width: 120, height: 120, top: "60%", left: "8%" }} />
      <div className="orb float-slow" style={{ background: "var(--sage)", width: 180, height: 180, bottom: "8%", right: "10%" }} />
      <div className="orb float-slower" style={{ background: "var(--sky)", width: 90, height: 90, top: "75%", right: "30%" }} />
    </div>
  );
}
