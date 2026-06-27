import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts } from "../theme";

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  accent: string;
};

// Real KPIs from the CodRocket dashboard
const STATS: Stat[] = [
  { label: "Total orders", value: 284, accent: colors.red },
  { label: "In transit", value: 67, accent: colors.info },
  { label: "Revenue (MTD)", value: 1.24, prefix: "$", suffix: "M", decimals: 2, accent: colors.success },
  { label: "On-time rate", value: 93.3, suffix: "%", decimals: 1, accent: colors.warning },
];

const StatCard: React.FC<{ stat: Stat; index: number }> = ({ stat, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const delay = index * 7;

  const enter = spring({
    frame: frame - delay,
    fps,
    config: { damping: 16, mass: 0.6 },
  });

  const count = interpolate(frame - delay, [0, 26], [0, stat.value], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const display =
    stat.decimals != null ? count.toFixed(stat.decimals) : Math.round(count).toString();

  return (
    <div
      style={{
        background: colors.white,
        borderRadius: 18,
        padding: "34px 38px",
        minWidth: 300,
        boxShadow: "0 18px 50px rgba(13,27,42,0.10)",
        opacity: enter,
        transform: `translateY(${interpolate(enter, [0, 1], [50, 0])}px)`,
        borderTop: `4px solid ${stat.accent}`,
      }}
    >
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: 18,
          color: colors.muted,
          fontWeight: 500,
          marginBottom: 10,
        }}
      >
        {stat.label}
      </div>
      <div
        style={{
          fontFamily: fonts.display,
          fontSize: 64,
          fontWeight: 700,
          color: colors.navy,
          lineHeight: 1,
        }}
      >
        {stat.prefix}
        {display}
        {stat.suffix}
      </div>
    </div>
  );
};

export const Stats: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: colors.navy,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 48,
      }}
    >
      <div
        style={{
          fontFamily: fonts.display,
          fontWeight: 600,
          fontSize: 30,
          color: "rgba(255,255,255,0.6)",
          letterSpacing: 4,
          textTransform: "uppercase",
          opacity: interpolate(frame, [0, 14], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        One dashboard. Total control.
      </div>
      <div style={{ display: "flex", gap: 28 }}>
        {STATS.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
