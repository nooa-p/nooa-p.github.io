import { Copyright } from "lucide-react"

function Footer() {
  return (
    <div className="flex flex-row text-xs justify-center items-center gap-1.5">
      <Copyright size={14} strokeWidth={1} absoluteStrokeWidth />
      <p>Nooa Peltokangas</p>
    </div>
  )
}

export default Footer