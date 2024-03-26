function ProjectList() {
  const projects = [
    {
      name: "personal portfolio",
      description: "",
      image: "https://placehold.co/1280x720",
      techs: [
        "react", "vite", "tailwind css"
      ],
      live: "https://peltokangas.dev",
      repo: "https://github.com/nooa-p/nooa-p.github.io"
    },
    {
      name: "gacha game tools",
      description: "description",
      image: "project2-min.webp",
      techs: [
        "next.js", "typescript", "tailwind css", "postgresql"
      ],
      live: undefined,
      repo: "https://github.com/nooa-p/gacha-tools"
    },
    {
      name: "audiophile e-commerce website",
      description: "description",
      image: "https://placehold.co/1280x720",
      techs: [
        "react", "vite", "vanilla css"
      ],
      live: undefined,
      repo: "https://github.com/digitalents-academy/e-commerce-audiophile"
    },
    {
      name: "countries through rest api",
      description: "description",
      image: "project4-min.webp",
      techs: [
        "next.js", "typescript", "tailwind css"
      ],
      live: "https://rest-api-countries-bay.vercel.app/",
      repo: "https://github.com/nooa-p/rest-api-countries"
    }
  ]
  
  return (
    projects.map((project) => {
      return (
        <div key={project.name} className="flex flex-col sm:flex-row gap-3.5">
          <img src={project.image} alt="" className="rounded sm:w-1/2 sm:min-w-[326px] border" />
          <div className="flex flex-col sm:justify-between sm:py-1">
            <div className="space-y-2 mb-2 sm:mb-2">
            <h4 className="font-medium">{project.name}</h4>
            <div className="flex flex-row gap-1.5 flex-wrap">
              {project.techs.map((tech) => {
                return (
                  <div key={tech} className="bg-[#ffecde] border border-romantic-200 text-[10px] uppercase py-[1px] px-1 rounded-sm text-nowrap">{tech}</div>
                )
              })}
            </div>
            <p className="text-sm">{project.description}</p>
            </div>
            <div>
              {/* TODO: add icons for links? */}
            {project.live ? <a href={project.live} className="py-0.5 px-2.5 mr-2 border border-pink-salmon-200 rounded-sm text-sm bg-[#ffe1de]">live</a> : ""}
            {project.repo ? <a href={project.repo} className="py-0.5 px-2.5 border border-pink-salmon-200 text-sm rounded-sm bg-[#ffe1de]">github</a> : ""}
            </div>
          </div>
        </div>
      )
    })
  )
}

function Project() {
  return (
    <div id="project" className="py-2">
      <h3 className="text-lg font-medium my-3">featured projects</h3>
      <div className="flex flex-col gap-6">
        <ProjectList />
      </div>
    </div>
  )
}

export default Project
