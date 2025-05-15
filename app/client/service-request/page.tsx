import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { MapPin, Mic, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function ServiceRequest() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-2">Describe lo que necesitas</h2>
        <div className="relative">
          <Textarea
            placeholder="Ej: Necesito reemplazar un apagador que no funciona en mi sala..."
            className="min-h-[100px] pr-10"
            defaultValue="Necesito reemplazar un apagador que no funciona en mi sala"
          />
          <Button variant="ghost" size="icon" className="absolute right-2 bottom-2">
            <Mic className="h-5 w-5 text-gray-500" />
          </Button>
        </div>
      </div>

      <Card className="border-[#F28C38]/30 bg-[#F28C38]/5">
        <CardContent className="p-4">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-[#F28C38] flex items-center justify-center mr-3 mt-1">
              <span className="text-white font-bold">AI</span>
            </div>
            <div>
              <p className="text-sm mb-2">
                Parece que necesitas un <strong>electricista</strong> para reemplazar un interruptor de luz.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#F28C38]">Electricista</Badge>
                <Badge variant="outline">Fontanero</Badge>
                <Badge variant="outline">Técnico General</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium">Tu ubicación</h2>
          <Button variant="ghost" size="sm" className="h-8 text-[#F28C38]">
            <MapPin className="h-4 w-4 mr-1" />
            Cambiar
          </Button>
        </div>
        <div className="bg-gray-200 rounded-lg h-[180px] flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-8 w-8 mx-auto text-[#F28C38] mb-2" />
            <p className="text-sm text-gray-600">Calle Principal #123, Ciudad</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-2">Radio de búsqueda</h2>
        <div className="px-2">
          <Slider defaultValue={[15]} max={50} step={1} />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>5 km</span>
            <span>15 km</span>
            <span>50 km</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <Link href="/client/quotes">
          <Button className="bg-[#F28C38] hover:bg-[#e67d29]">
            <Send className="h-4 w-4 mr-2" />
            Enviar Solicitud
          </Button>
        </Link>
      </div>
    </div>
  )
}
