// CodRocket brand tokens — mirrored from codrocket-dashboard.html
export const colors = {
  red: "#E8332A",
  redDark: "#B8271F",
  redLight: "#FFF0EF",
  navy: "#0D1B2A",
  navyMid: "#1A2E42",
  slate: "#2C3E50",
  muted: "#8A96A3",
  white: "#FFFFFF",
  success: "#1A8C4E",
  info: "#1565C0",
  warning: "#B07A00",
} as const;

export const fonts = {
  display: "'Space Grotesk', sans-serif",
  body: "'Inter', sans-serif",
} as const;

// Video format
export const VIDEO = {
  width: 1920,
  height: 1080,
  fps: 30,
  durationInFrames: 12 * 30, // 12 seconds
} as const;
