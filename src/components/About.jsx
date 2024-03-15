import { IconBrandJavascript, IconBrandTypescript, IconBrandReact, IconBrandNextjs, IconBrandCss3, IconBrandTailwind, IconBrandHtml5, IconBrandNodejs, IconBrandPython, IconBrandGit, IconBrandMongodb, IconSql } from "@tabler/icons-react"

function Skills() {
  const skills = [
    {icon: IconBrandJavascript, label: 'JavaScript'},
    {icon: IconBrandTypescript, label: 'TypeScript'},
    {icon: IconBrandReact, label: 'React'},
    {icon: IconBrandNextjs, label: 'Next.js'},
    {icon: IconBrandCss3, label: 'CSS3'},
    {icon: IconBrandTailwind, label: 'Tailwind'},
    {icon: IconBrandHtml5, label: 'HTML5'},
    {icon: IconBrandNodejs, label: 'Node.js'},
    {icon: IconBrandMongodb, label: 'MongoDB'},
    {icon: IconSql, label: 'PostgreSQL'},
    {icon: IconBrandGit, label: 'Git'},
    {icon: IconBrandPython, label: 'Python'}
  ]

  return (
    skills.map((skill) => {
      return (
        <div key={skill.label} className="min-w-[84.5px] p-0.5">
          <div className="flex flex-col bg-[#ffecde] rounded items-center p-2.5 gap-0.5 border border-romantic-200 max-w-[80.5px]">
          <skill.icon size={40} strokeWidth={1} />
          <h4 className="uppercase text-[11px]">{skill.label}</h4>
          </div>
        </div>
      )
    })
  )
}

function About() {
  return (
    <div id="about" className="border-b flex flex-col md:flex-row py-4">
      <div className="basis-[73%]">
        <h3 className="text-lg font-medium mb-3">about me</h3>

      </div>
      <div className="basis-[27%]">
        <h3 className="text-lg font-medium md:ml-1 mb-3">skills</h3>
        <div className="flex flex-wrap justify-center">
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default About
