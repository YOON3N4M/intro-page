import Project from "@/components/sections/Project";
import Info from "@/components/sections/Info";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledMyPic = styled(motion.img)`
  position: absolute;
  top: 17rem;
  right: 35rem;
  z-index: 100;
`;
const StyledPicCover = styled(motion.div)`
  background-color: black;
  position: absolute;
  top: 17rem;
  right: 35rem;
  z-index: 200;
  width: 370px;
  height: 493.33px;
`;

export default function Home() {
  return (
    <>
      <Info></Info>
      <Project />
    </>
  );
}
