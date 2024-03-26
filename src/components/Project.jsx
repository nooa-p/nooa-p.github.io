function ProjectList() {
  const projects = [
    {
      name: "personal portfolio",
      description: "description",
      image: "",
      techs: [
        "react", "vite", "tailwind css"
      ],
      live: "https://peltokangas.dev",
      repo: "https://github.com/nooa-p/nooa-p.github.io"
    },
    {
      name: "gacha game tools",
      description: "description",
      image: "",
      techs: [
        "next.js", "typescript", "tailwind css", "postgresql"
      ],
      live: undefined,
      repo: "https://github.com/nooa-p/gacha-tools"
    },
    {
      name: "audiophile e-commerce website",
      description: "description",
      image: "",
      techs: [
        "react", "vite", "vanilla css"
      ],
      live: undefined,
      repo: "https://github.com/digitalents-academy/e-commerce-audiophile"
    },
    {
      name: "countries through rest api",
      description: "description",
      image: "",
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
        <div key={project.name} className="flex flex-col sm:flex-row gap-2 p-2 border rounded">
          <img src="https://placehold.co/200x113" alt="" className="rounded-sm" />
          <div>
            <h4>{project.name}</h4>
            <div className="flex flex-row">
              {project.techs.map((tech) => {
                return (
                  <div key={tech}>{tech}</div>
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
      <div className="flex flex-col gap-4">
        <ProjectList />
      </div>
    </div>
  )
}

export default Project
