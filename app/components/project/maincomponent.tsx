// Proyectos.tsx
import React from "react"
import Project from "./projectcard"

const Proyectos = () => {
  const proyectos = [
    {
      src: "/AI.png",
      title: "Introduction IA",
      description: "Data analytics project where you work with a telecommunications database",
      texto: "Learn More",
      githubLink: "https://github.com/Camilo899/IntroduccionIA",
    },
    {
      src: "/dl.png",
      title: "Introduction Deep Learnig",
      description: "In this project, deep learning techniques are applied to five different types of flowers.",
      texto: "Learn More",
      githubLink: "https://github.com/Camilo899/FundamenteoDeepLearnig",
    },
    {
      src: "/An.png",
      title: "Hero Front-End",
      description: "API that performs a basic CRUD for a given group of heroes",
      texto: "Learn More",
      githubLink: "https://github.com/Proyecto-Integrador-1-2022/Heroes",
    },
    {
      src: "/java.png",
      title: "Hero Back-End",
      description: "Connected Api Front-End with the Back-End, for the consumption of the application",
      texto: "Learn More",
      githubLink: " https://github.com/Proyecto-Integrador-1-2022/Backend.git",
    },

    {
      src: "/GX.png",
      title: "Online Store",
      description: "developing a local application for an online store with GeneXus Learning",
      texto: "Learn More",
      githubLink: " https://drive.google.com/file/d/1JCtnS7Y1CU2ZCOKKhFZSk5vTiz79Amy9/view?usp=sharing",
    },
    
  ]

  return (
    <section className="p-5 mt-20">
      <h1 className="mb-4 text-center text-2xl font-bold">Portafolio</h1>
      <div className="flex flex-row gap-4 overflow-x-scroll p-4">
        {proyectos.map((project, maincomponent) => (
          <Project key={maincomponent} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Proyectos