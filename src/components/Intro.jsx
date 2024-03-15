import { IconAt, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"

function Intro() {
  return (
    <div className="border-b p-3 pb-5 sm:p-12">
      <div className="flex flex-row items-center sm:pl-8 gap-6">
        <div className="profile-outline">
        <img src="profile.png" className="rounded-full w-20 profile-outset" />
        </div>
        <h2 className="text-3xl font-semibold">hi, i&apos;m nooa &#128075;</h2>
      </div>
      <h3 className="text-xl font-light pt-4 sm:px-4 leading-9">a <span className="title-underline font-medium">full-stack web developer</span>, with a special interest in creating simple yet aesthetic web design and practical data tracking tools</h3>
      <div className="flex flex-col sm:flex-row sm:px-4 pt-2 sm:pt-1 sm:pb-3 gap-4 text-base font-normal text-slate-600 leading-4">
        <div className="flex flex-row gap-1 items-center">
          <IconAt size={18} className="text-[#fab8b2]" />
          <a href="mailto:nooa@peltokangas.dev" className="">mail</a>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <IconBrandGithub size={18} className="text-[#fab8b2]" />
          <a href="https://github.com/nooa-p" className="">github</a>
        </div>
        <div className=" flex flex-row gap-1 items-center">
          <IconBrandLinkedin size={18} className="text-[#fab8b2]" />
          <a href="https://www.linkedin.com/in/nooa-peltokangas/" className="">linkedin</a>
        </div>
      </div>
    </div>
  )
}

export default Intro
