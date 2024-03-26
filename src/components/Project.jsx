function ProjectList() {
  const projects = [
    {
      name: "personal portfolio",
      description: "description",
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
          <img src={project.image} alt="" className="rounded-sm sm:w-1/2 border" />
          <div className="space-y-1">
            <h4 className="font-medium">{project.name}</h4>
            <div className="flex flex-row gap-1.5">
              {project.techs.map((tech) => {
                return (
                  <div key={tech} className="bg-[#ffecde] border border-romantic-200 text-[10px] uppercase py-[1px] px-1 rounded-sm">{tech}</div>
                )
              })}
            </div>
            <p>{project.description}</p>
            {project.live ? <a href={project.live}>live</a> : ""}
            {project.repo ? <a href={project.repo}>repo</a> : ""}
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
