import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope, PowerBtn } from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitlte from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu-Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.5s ease;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover &{
   &>*{
     fill: ${(props) => props.theme.text};
     transition: all 0.5s ease;
  }

  &>*: first-child{
  // margin-right: 0.57rem;
  transition: all 0.5s ease;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
    transition: all 0.5s ease;
  }
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 0.2rem;
  }
`;
const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent />
        <PowerButton theme="light" />
        <SocialIcons theme="light" />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            {/* <Design width={40} height={40} /> */}
            Skills
          </Title>
          {/* <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description> */}
          <Description>
            <strong>OS</strong>
            <ul>
              <li>Windows</li>
            </ul>

            <strong>Languages</strong>
            <ul>
              <li>C,C++,Java</li>
            </ul>
            <strong>Framework</strong>
            <ul>
              <li>React Js, ExpressJS, Node.js</li>
            </ul>
            <strong>Databases</strong>
            <ul>
              <li>MySQL, MongoDB</li>
            </ul>
            <strong>Others</strong>
            <ul>
              <li>Git,Devpost,Canva,Ifogsim, Matlab</li>
            </ul>
          </Description>
        </Main>

        <Main>
          <Title>
            {/* <Develope width={40} height={40} /> */}
            Achievements
          </Title>

          {/* <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description> */}

          <Description>
            <ul>
              <li>Finalist at Toycathon, Govt. of India</li>
              <li>Winner at HackViolet,MLH</li>
              <li>Winner at TechTogether Boston,TechTogether</li>
              <li>Winner at HACK APAC, MLH</li>
              <li>Winner at Helyx India Hacks (International Edition)</li>
              <li>Winner at HackViolet</li>
            </ul>
          </Description>
        </Main>

        <BigTitlte text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
