import { LucideStar } from "lucide-react"

interface StarProps {
  onViewChange: (view: string, type?: "client" | "technician" | "admin") => void
}

export default function Star({ onViewChange }: StarProps) {
  return <LucideStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
}
