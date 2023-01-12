/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { animated, useSpring } from "@react-spring/web";

import { Image } from "../components";
import type { ThemeMode } from "../utils";
import { Container, IconContainerWithHover, IconsContainer } from "../styled";

const icons = ["GitHub", "LinkedIn", "Twitter", "Instagram", "Dribble"];

export default function Home() {
  const [themeMode, setThemeMode] = React.useState<ThemeMode>(() => "dark");

  const background = useSpring({
    background: themeMode === "dark" ? "#6244ec" : "#ffffff",
    config: {
      duration: 500,
    },
  });

  return (
    <Container
      as={animated.div}
      style={background}
      onClick={() => {
        setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
      }}
    >
      <Image
        height={300}
        width={300}
        icon={"logo"}
        themeMode={themeMode}
        alt="Capella Logo"
      />
      <IconsContainer onClick={(event) => event.stopPropagation()}>
        {icons.map((icon) => {
          return (
            <IconContainerWithHover key={icon}>
              <Image height={48} width={48} icon={icon} themeMode={themeMode} />
            </IconContainerWithHover>
          );
        })}
      </IconsContainer>
    </Container>
  );
}
