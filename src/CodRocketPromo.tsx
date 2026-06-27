import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadSpaceGrotesk } from "@remotion/google-fonts/SpaceGrotesk";
import { Intro } from "./scenes/Intro";
import { Tagline } from "./scenes/Tagline";
import { Stats } from "./scenes/Stats";
import { Outro } from "./scenes/Outro";

loadInter();
loadSpaceGrotesk();

// 12s @ 30fps = 360 frames, split across four scenes.
export const CodRocketPromo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0D1B2A" }}>
      <Series>
        <Series.Sequence durationInFrames={90}>
          <Intro />
        </Series.Sequence>
        <Series.Sequence durationInFrames={90}>
          <Tagline />
        </Series.Sequence>
        <Series.Sequence durationInFrames={105}>
          <Stats />
        </Series.Sequence>
        <Series.Sequence durationInFrames={75}>
          <Outro />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
