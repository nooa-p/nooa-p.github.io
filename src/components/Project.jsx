import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react"

function ProjectList() {
  const projects = [
    {
      name: "personal portfolio",
      description: "This website! Showcasing my own design with a simple single-page layout, that is easy to make responsive. Trying to play with colours, and making a portfolio I would personally like.",
      techs: [
        "react", "vite", "tailwind css"
      ],
      live: "https://peltokangas.dev",
      repo: "https://github.com/nooa-p/nooa-p.github.io"
    },
    {
      name: "gacha game tools",
      description: "A tool website for two games I play, where you can plan your character builds, calculate materials needed, and track collectibles, etc. A personal project, still in its baby stages and my first real foray into full-stack applications.",
      techs: [
        "next.js", "typescript", "tailwind css", "postgresql"
      ],
      live: undefined,
      repo: "https://github.com/nooa-p/gacha-tools"
    },
    {
      name: "where in the world?",
      description: "A website that shows country data & flags, with the data pulled through an external API. Countries can be searched and filtered by regions. Based on a challenge from Frontend Mentor.",
      techs: [
        "next.js", "typescript", "tailwind css"
      ],
      live: "https://rest-api-countries-bay.vercel.app/",
      repo: "https://github.com/nooa-p/rest-api-countries"
    },
    {
      name: "to-do app",
      description: "A simple to-do app, with a dark mode toggle and basic filtering tools. Based on a challenge from Frontend Mentor.",
      techs: [
        "html5", "vanilla js"
      ],
      live: "https://peltokangas.dev/todo-app/",
      repo: "https://github.com/nooa-p/todo-app" 
    }
  ]
  
  return (
    projects.map((project) => {
      return (
        <div key={project.name} className="p-3 border rounded border-pink-salmon-200 shadow-sm flex flex-col sm:justify-between">
            <div className="space-y-2 mb-2">
            <h4 className="font-medium">{project.name}</h4>
            <div className="flex flex-row gap-1.5 flex-wrap">
              {project.techs.map((tech) => {
                return (
                  <div key={tech} className="bg-[#ffe5e3] border border-pink-salmon-200 text-[10px] uppercase py-[1px] px-1 rounded-sm text-nowrap">{tech}</div>
                )
              })}
            </div>
            <p className="text-sm">{project.description}</p>
            </div>
            <div className="flex flex-row gap-2">
            {project.live ? ( <div className="flex flex-row gap-1 items-center border border-pink-salmon-100 rounded py-0.5 px-1.5"><IconExternalLink size={18} className="text-[#fab8b2]" /><a href={project.live} className="">live</a></div> ) : ""}
            {project.repo ? ( <div className="flex flex-row gap-1 items-center border border-pink-salmon-100 rounded py-0.5 px-1.5"><IconBrandGithub size={18} className="text-[#fab8b2]" /><a href={project.repo} className="">github</a></div> ) : ""}
            </div>
        </div>
      )
    }))
  }


function Project() {
  return (
    <div id="project" className="py-2">
      <h3 className="text-lg font-medium my-3">featured projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
        <ProjectList />
      </div>
    </div>
  )
}

export default Project
