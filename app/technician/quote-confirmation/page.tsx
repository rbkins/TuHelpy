import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function QuoteConfirmation() {
  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Enviar Presupuesto</h2>
        <p className="text-gray-500">Proporciona tu mejor oferta para este servicio</p>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium">Reemplazar apagador</h3>
            <Badge className="bg-[#4A4A4A]">Electricista</Badge>
          </div>
          <p className="text-sm text-gray-600 mb-3">Necesito reemplazar un apagador que no funciona en mi sala...</p>
          <div className="flex justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              <span>A 2.3 km</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>Hace 10 min</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="price">Precio (MXN)</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <Input id="price" type="number" className="pl-7" placeholder="0.00" />
          </div>
          <p className="text-xs text-gray-500">Recuerda que se aplicará una comisión del 10% sobre el precio final.</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="availability">Disponibilidad</Label>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="justify-start">
              <Clock className="h-4 w-4 mr-2" />
              Hoy
            </Button>
            <Button variant="outline" className="justify-start">
              <Clock className="h-4 w-4 mr-2" />
              Mañana
            </Button>
            <Button variant="outline" className="justify-start">
              <Clock className="h-4 w-4 mr-2" />
              En 2 días
            </Button>
            <Button variant="outline" className="justify-start">
              <Clock className="h-4 w-4 mr-2" />
              Personalizado
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Notas adicionales (opcional)</Label>
          <Textarea id="notes" placeholder="Agrega cualquier información relevante sobre el servicio..." />
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <Link href="/technician/service-opportunities">
          <Button className="bg-[#4A4A4A] hover:bg-gray-600">Enviar Presupuesto</Button>
        </Link>
      </div>
    </div>
  )
}
