import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { RocketLogo } from "../components/RocketLogo";
import { colors, fonts } from "../theme";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({ frame, fps, config: { damping: 12, mass: 0.7 } });
  const lift = spring({
    frame: frame - 10,
    fps,
    config: { damping: 200 },
  });

  const wordReveal = interpolate(frame - 14, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 35%, ${colors.navyMid} 0%, ${colors.navy} 60%)`,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 36,
      }}
    >
      <div
        style={{
          transform: `scale(${pop}) translateY(${interpolate(lift, [0, 1], [0, -8])}px)`,
        }}
      >
        <RocketLogo size={150} />
      </div>

      <div
        style={{
          opacity: wordReveal,
          transform: `translateY(${interpolate(wordReveal, [0, 1], [24, 0])}px)`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: fonts.display,
            fontWeight: 700,
            fontSize: 92,
            color: colors.white,
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          Cod<span style={{ color: colors.red }}>Rocket</span>
        </div>
        <div
          style={{
            fontFamily: fonts.body,
            fontWeight: 500,
            fontSize: 24,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: 6,
            textTransform: "uppercase",
            marginTop: 14,
          }}
        >
          Car Shipping
        </div>
      </div>
    </AbsoluteFill>
  );
};
