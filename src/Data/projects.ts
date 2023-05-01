export interface ProjectT {
  title: string;
  skills: string;
  webURL?: string;
  gitHubURL: string;
  imgURL: string;
  detailURL?: string;
  period: string;
  type: string;
  //detailPageURL: string;
}

const projectTemplate = {
  title: "",
  skills: "",
  webURL: "",
  gitHubURL: "",
  imgURL: "",
  detailURL: "",
  period: "",
  type: "",
};

export const projects: ProjectT[] = [
  {
    title: "Introduce Page",
    skills: "React, Typescript, Next.js, Styled-Components, Framer-Motion",
    webURL: "",
    gitHubURL: "https://github.com/YOON3N4M",
    imgURL: "me.jpeg",
    detailURL:
      "https://elfin-swan-5d5.notion.site/IntroPage-18d86aa892fc4be69395e875a3dfec1b",
    period: "2023.04~",
    type: "개인 프로젝트",
  },
  {
    title: "CultureGallery",
    skills:
      "React, Typescript, Redux, Firebase, Styled-Components, Framer-Motion",
    webURL: "https://culture-gallery.firebaseapp.com/",
    gitHubURL: "https://github.com/YOON3N4M/culture-gallery",
    imgURL: "Project_CultureGallery.png",
    detailURL:
      "https://elfin-swan-5d5.notion.site/CultureGallery-e83eac2d4cef4784907b730161b53c3e",
    period: "2023.04~",
    type: "개인 프로젝트",
  },
  {
    title: "LOL Statistics",
    skills: "React, Typescript, Firebase, Styled-Components",
    webURL: "https://lol-statistic.firebaseapp.com/",
    gitHubURL: "https://github.com/YOON3N4M/lol-statistics-typescript",
    imgURL: "Project_LOLStatistics.png",
    detailURL:
      "https://elfin-swan-5d5.notion.site/678268894e464dff9c8e505f9a46fb17",
    period: "2023.03 ~ 2023.04",
    type: "개인 프로젝트",
  },
  {
    title: "Web Dashboard",
    skills: "React, Javascript",
    webURL: "https://yoon3n4m.github.io/momentum-clone-react/",
    gitHubURL: "https://github.com/YOON3N4M/momentum-clone-react",
    imgURL: "Project_WebDashboard.png",
    detailURL:
      "https://elfin-swan-5d5.notion.site/11c8fd9298594410b97ac67c09c5bd2c",
    period: "2022.12 ~ 2023.01",
    type: "개인 프로젝트",
  },
];
