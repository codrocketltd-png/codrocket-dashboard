import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { colors, fonts } from "../theme";

const LINES = ["Car shipping,", "reimagined."];

export const Tagline: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: colors.white,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: 64,
          height: 6,
          background: colors.red,
          borderRadius: 3,
          marginBottom: 40,
          transform: `scaleX(${interpolate(frame, [0, 16], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })})`,
        }}
      />
      {LINES.map((line, i) => {
        const start = 8 + i * 10;
        const reveal = interpolate(frame - start, [0, 16], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        return (
          <div
            key={line}
            style={{
              fontFamily: fonts.display,
              fontWeight: 700,
              fontSize: 88,
              letterSpacing: -2,
              lineHeight: 1.05,
              color: i === LINES.length - 1 ? colors.red : colors.navy,
              opacity: reveal,
              transform: `translateY(${interpolate(reveal, [0, 1], [40, 0])}px)`,
            }}
          >
            {line}
          </div>
        );
      })}
      <div
        style={{
          marginTop: 36,
          fontFamily: fonts.body,
          fontSize: 26,
          color: colors.muted,
          opacity: interpolate(frame - 34, [0, 16], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Track every vehicle from quote to delivery.
      </div>
    </AbsoluteFill>
  );
};
