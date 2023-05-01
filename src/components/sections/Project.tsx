import styled from "styled-components";
import { StyledSection } from "./Info";
import { MotionConfig, motion } from "framer-motion";
import IconGitHub from "../icons/IconGitHub";
import { ProjectT, projects } from "@/Data/projects";

const ProjectCard = styled.div`
  width: 90%;
  min-height: 55rem;
  background-color: #4848481b;
  margin: 0 auto;
  border-radius: 10rem;
  display: flex;
  overflow: hidden;
  border: 1px solid #91919140;
  margin-bottom: 10rem;
`;

const LeftDiv = styled.div`
  position: relative;
  flex-basis: 60%;
  display: flex;
  align-items: center;
  justify-content: center;

  .cover {
    position: absolute;
    background-color: black;
    width: 70%;
    height: 80%;
    z-index: 200;
    border-radius: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    opacity: 0;
    :hover {
      opacity: 0;
    }
  }
`;
const RightDiv = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  padding-top: 15rem;
  padding-right: 3rem;
  .link-row {
    display: flex;
    justify-content: space-between;
    margin-top: 7rem;
    align-items: center;
  }
  .link-row > a > h2 {
    cursor: pointer;
    :hover {
      color: #51a7f3;
    }
  }
  .link-row > div > a > span {
    font-size: 1.6rem;
    margin-right: 1rem;
    cursor: pointer;
    :hover {
      color: #51a7f3;
    }
  }
`;

const ProjectImg = styled.img`
  width: 70%;
  height: 80%;
  object-fit: cover;
  border-radius: 10%;
  position: relative;
  div {
    background-color: black;
  }
`;
const Type = styled.span`
  font-size: 1.5rem;
`;

const Period = styled.span`
  font-size: 1.5rem;
  color: gray;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h1`
  font-size: 4rem;
  display: block;
`;
const ProjectSkills = styled.span`
  margin-top: 1rem;
  font-size: 1.7rem;
  color: gray;
`;
const ProjectHeader = styled.div`
  width: 100vw;
  margin-bottom: 13rem;
  h1 {
    font-family: "TheJamsil5Bold";
    font-size: 4.5rem;
    margin-bottom: 1rem;
  }
  span {
    font-size: 2rem;
  }
`;

export default function Project() {
  return (
    <>
      <StyledSection>
        <ProjectHeader>
          <h1>Project</h1>
          <span>틈틈이 개인 프로젝트를 진행하며 학습하고 있습니다.</span>
        </ProjectHeader>
        {projects.map((project: ProjectT) => (
          <ProjectCard key={project.title}>
            <LeftDiv>
              <ProjectImg width={150} src={project.imgURL} />
            </LeftDiv>
            <RightDiv>
              <Type>{project.type}</Type>
              <ProjectTitle>{project.title}</ProjectTitle>
              <Period>{project.period}</Period>
              <ProjectSkills>{project.skills}</ProjectSkills>
              <div className="link-row">
                <a href={project.detailURL} target="_blank">
                  <h2>See Details</h2>
                </a>
                <div>
                  <a href={project.webURL} target="_blank">
                    <span>Web</span>
                  </a>
                  <a href={project.gitHubURL} target="_blank">
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </RightDiv>
          </ProjectCard>
        ))}
      </StyledSection>
    </>
  );
}
