import styled from "styled-components";
import { StyledSection } from "./Info";
import { MotionConfig, motion } from "framer-motion";
import IconGitHub from "../icons/IconGitHub";
import { ProjectT, projects } from "@/Data/projects";

const ProjectCard = styled.div`
  width: 90%;
  height: 55rem;
  background-color: #14141413;
  margin: 0 auto;
  border-radius: 10rem;
  display: flex;
  overflow: hidden;
  border: 1px solid #91919116;
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
    margin-top: 10rem;
    align-items: center;
  }
  .link-row > h2 {
    cursor: pointer;
    :hover {
      color: #51a7f3;
    }
  }
  .link-row > div > span {
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

const ProjectTitle = styled.h1`
  font-size: 4rem;
  display: block;
`;
const ProjectSkills = styled.span`
  margin-top: 1rem;
  font-size: 1.7rem;
  color: gray;
`;

export default function Project() {
  return (
    <>
      <StyledSection>
        <h1>프로젝트</h1>
        {projects.map((project: ProjectT) => (
          <ProjectCard key={project.title}>
            <LeftDiv>
              <ProjectImg width={150} src={project.imgURL} />
            </LeftDiv>
            <RightDiv>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectSkills>{project.skills}</ProjectSkills>
              <div className="link-row">
                <h2>상세</h2>
                <div>
                  <span>Web</span>
                  <span>GitHub</span>
                </div>
              </div>
            </RightDiv>
          </ProjectCard>
        ))}
      </StyledSection>
    </>
  );
}
