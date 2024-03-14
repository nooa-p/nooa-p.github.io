import { IconCopyright } from "@tabler/icons-react"

function Footer() {
  return (
    <div className="flex flex-row text-sm justify-center items-center gap-1 font-light">
      <IconCopyright size={20} strokeWidth={1.25} />
      <p className="leading-3 -mt-[0.5px]">2024 Nooa Peltokangas</p>
    </div>
  )
}

export default Footer
