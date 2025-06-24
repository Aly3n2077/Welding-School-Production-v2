import { Loader2 } from "lucide-react"

interface FullPageLoaderProps {
  message?: string
}

export default function FullPageLoader({ message = "Loading..." }: FullPageLoaderProps) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      <Loader2 className="h-12 w-12 animate-spin text-welding-orange" />
      {message && <p className="mt-4 text-lg font-semibold text-steel-blue">{message}</p>}
    </div>
  )
}
