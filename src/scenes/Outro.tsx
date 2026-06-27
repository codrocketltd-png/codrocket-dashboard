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

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({ frame, fps, config: { damping: 14 } });
  const ctaReveal = interpolate(frame - 16, [0, 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${colors.red} 0%, ${colors.redDark} 100%)`,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 30,
      }}
    >
      <div style={{ transform: `scale(${pop})` }}>
        <div
          style={{
            width: 120,
            height: 120,
            background: colors.white,
            borderRadius: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 16px 50px rgba(0,0,0,0.25)",
          }}
        >
          <RocketLogo size={120} radius={30} />
        </div>
      </div>

      <div
        style={{
          fontFamily: fonts.display,
          fontWeight: 700,
          fontSize: 76,
          color: colors.white,
          letterSpacing: -2,
          transform: `scale(${pop})`,
        }}
      >
        CodRocket
      </div>

      <div
        style={{
          opacity: ctaReveal,
          transform: `translateY(${interpolate(ctaReveal, [0, 1], [20, 0])}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 18,
        }}
      >
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: 28,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Ship smarter. Start today.
        </div>
        <div
          style={{
            fontFamily: fonts.body,
            fontWeight: 600,
            fontSize: 22,
            color: colors.red,
            background: colors.white,
            padding: "14px 34px",
            borderRadius: 999,
          }}
        >
          codrocket.app
        </div>
      </div>
    </AbsoluteFill>
  );
};
