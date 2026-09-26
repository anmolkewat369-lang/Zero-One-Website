import { ImageResponse } from "next/og";

export const alt = "Zero One — Modern websites for local businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", background: "#101114", color: "white", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 26, fontWeight: 700, letterSpacing: "0.08em" }}>
        <div style={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #4b79ed", borderRadius: 12, color: "#6d92ff", fontSize: 24 }}>01</div>
        ZERO ONE
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 950 }}>
        <div style={{ color: "#85a5ff", fontSize: 20, fontWeight: 700, letterSpacing: "0.16em" }}>WEB DESIGN &amp; DEVELOPMENT · JABALPUR</div>
        <div style={{ display: "flex", marginTop: 22, fontSize: 74, fontWeight: 650, lineHeight: 1.04, letterSpacing: "-0.06em" }}>Websites for local businesses<span style={{ display: "flex", color: "#6d92ff" }}>.</span></div>
        <div style={{ marginTop: 28, color: "#adb2bd", fontSize: 25 }}>Working across India and beyond</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#9da3af", fontSize: 18 }}><span style={{ display: "flex", width: 8, height: 8, borderRadius: 10, background: "#5d85fa" }} />Thoughtful websites. Built around your business.</div>
    </div>,
    size,
  );
}
