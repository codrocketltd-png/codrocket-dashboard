import React from "react";
import { colors } from "../theme";

/**
 * The CodRocket mark: a rounded red tile with a white rocket glyph,
 * matching the `.logo-rocket` element in the dashboard.
 */
export const RocketLogo: React.FC<{
  size?: number;
  radius?: number;
}> = ({ size = 120, radius = size * 0.25 }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: colors.red,
        borderRadius: radius,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 12px 40px rgba(232,51,42,0.45)",
      }}
    >
      <svg
        width={size * 0.58}
        height={size * 0.58}
        viewBox="0 0 24 24"
        fill="none"
        stroke={colors.white}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Tabler "rocket" glyph */}
        <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
        <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
        <circle cx="15" cy="9" r="1" />
      </svg>
    </div>
  );
};
