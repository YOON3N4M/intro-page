export interface ProjectT {
  title: string;
  skills: string;
  webURL?: string;
  gitHubURL: string;
  imgURL: string;
  //detailPageURL: string;
}

const projectTemplate = {
  title: "",
  skills: "",
  webURL: "",
  gitHubURL: "",
  imgURL: "",
};

export const projects: ProjectT[] = [
  {
    title: "CultureGallery",
    skills:
      "React, Typescript, Redux, Firebase, Styled-Components, Framer-Motion",
    webURL: "https://culture-gallery.firebaseapp.com/",
    gitHubURL: "https://github.com/YOON3N4M/culture-gallery",
    imgURL: "Project_CultureGallery.png",
  },
  {
    title: "LOL-Statistics",
    skills: "React, Typescript, Firebase, Styled-Components",
    webURL: "https://lol-statistic.firebaseapp.com/",
    gitHubURL: "https://github.com/YOON3N4M/lol-statistics-typescript",
    imgURL: "Project_LOLStatistics.png",
  },
  {
    title: "Web Dashboard",
    skills: "React, Javascript",
    webURL: "https://yoon3n4m.github.io/momentum-clone-react/",
    gitHubURL: "https://github.com/YOON3N4M/momentum-clone-react",
    imgURL: "Project_WebDashboard.png",
  },
];
