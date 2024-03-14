import { IconBrandJavascript, IconBrandTypescript, IconBrandReact } from "@tabler/icons-react"

function Skills() {
  const skills = [
    {icon: IconBrandJavascript, label: 'JavaScript'},
    {icon: IconBrandTypescript, label: 'TypeScript'},
    {icon: IconBrandReact, label: 'React'}
  ]

  return (
    skills.map((skill) => {
      return (
        <div key={skill.label} className="w-1/2 p-1">
          <div className="flex flex-col bg-romantic-50">
          <skill.icon />
          <h4>{skill.label}</h4>
          </div>
        </div>
      )
    })
  )
}

function About() {
  return (
    <div id="about" className="border-b flex flex-col sm:flex-row py-4">
      <div className="basis-9/12">
        <h3 className="text-lg font-medium">about</h3>
      </div>
      <div className="basis-3/12">
        <h3 className="text-lg font-medium">skills</h3>
        <div className="flex flex-wrap">
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default About
