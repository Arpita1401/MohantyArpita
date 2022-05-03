import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { darkTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import mascot from "../assets/Images/mascot4.png";
import { keyframes } from "styled-components";
import BigTitlte from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const Float = keyframes`
0% {transform: translateY(-10px)}
50% {transform: translateY(-15px) translateY(-15px)}
100% {transform: translateY(-10px)}

`;
const Mascot = styled.div`
  position: absolute;
  top: 19%;
  right: 8%;
  width: 25vw;
  animation: ${Float} 3s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 1.8rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.21rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <PowerButton />
        <SocialIcons theme="dark" />
        <ParticleComponent theme="dark" />
        <Mascot>
          <img src={mascot} alt="mascot" />
        </Mascot>
        <Main>
          I am a prefinal computer science undergrad student from Odisha
          University of Technology and research, Bhubaneswar located in India.
          <br />
          <br />
          I work on web desigining and like to try new things, thus build great
          projects.To apply my skills practically, I tend to take part in
          hackathons as much as I can, which not only helps me to gain more
          knowledge, but also has ended me up with lots of tshirts and goodies.
          I also am very satisfied with my ability of teamwork, thinking on
          feet, research and learning skills.
          <br />
          <br />I have an huge passion for coding and i even lead the community
          of girls of our college through codechef chapter.
          <br />
          <br />
          Along with my passion for computer science and mathematics, I am very
          fond of cooking and painting. These let me take a moment for myself,
          thus calming me down, and make me able to focus on my work with more
          enthusiasm and fresh mindset.
        </Main>
        <BigTitlte text="ABOUT" top="10%" leftt="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
