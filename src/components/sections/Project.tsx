import styled from "styled-components";
import { StyledSection } from "./Info";

const ProjectCard = styled.div`
  width: 90%;
  height: 400px;
  background-color: red;
  margin: 0 auto;
  border-radius: 70px;
`;

export default function Project() {
  return (
    <>
      <StyledSection>
        <ProjectCard />
      </StyledSection>
    </>
  );
}
