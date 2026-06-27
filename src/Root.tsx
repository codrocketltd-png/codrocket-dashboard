import React from "react";
import { Composition } from "remotion";
import { CodRocketPromo } from "./CodRocketPromo";
import { VIDEO } from "./theme";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CodRocketPromo"
        component={CodRocketPromo}
        durationInFrames={VIDEO.durationInFrames}
        fps={VIDEO.fps}
        width={VIDEO.width}
        height={VIDEO.height}
      />
    </>
  );
};
