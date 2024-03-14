function Intro() {
  return (
    <div className="border-b px-12 py-12">
      <div className="flex flex-row items-center pl-8 gap-6">
        <div className="profile-outline">
        <img src="profile.png" className="rounded-full w-20 profile-outset" />
        </div>
        <h2 className="text-3xl font-semibold">hi, i&apos;m nooa &#128075;</h2>
      </div>
      <h3 className="text-xl font-light pt-4 px-4 leading-9">a <span className="title-underline font-medium">full-stack web developer</span>, with special interest in creating simple yet aesthetic web design and practical data tracking tools</h3>
    </div>
  )
}

export default Intro
