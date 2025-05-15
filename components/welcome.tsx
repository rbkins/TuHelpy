import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mb-8 text-center">
        <div className="w-32 h-32 bg-[#F28C38] rounded-full mx-auto mb-4 flex items-center justify-center">
          <div className="text-white text-6xl font-bold transform rotate-6">Y</div>
        </div>
        <h1 className="text-2xl font-bold text-[#4A4A4A] mb-2">ServiYa</h1>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          ¡Bienvenido a ServiYa! Conecta con profesionales o ofrece tus servicios.
        </p>
      </div>

      <div className="space-y-4 w-full max-w-xs">
        <Link href="/service-request" className="w-full">
          <Button className="w-full bg-[#F28C38] hover:bg-[#e67d29]">Explorar como Cliente</Button>
        </Link>
        <Link href="/service-opportunities" className="w-full">
          <Button className="w-full bg-[#4A4A4A] hover:bg-gray-600">Explorar como Técnico</Button>
        </Link>
        <Link href="/login" className="w-full">
          <Button variant="outline" className="w-full">
            Iniciar Sesión / Registrarse
          </Button>
        </Link>
      </div>
    </div>
  )
}
