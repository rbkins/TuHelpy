import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, CreditCard, Clock } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function ServiceConfirmation() {
  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto">
      <div className="mb-4">
        <h2 className="text-lg font-medium">Confirmar Servicio</h2>
        <p className="text-sm text-gray-500">Revisa los detalles y realiza el pago</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="md:col-span-2">
          <CardContent className="p-4">
            <div className="flex items-start">
              <Avatar className="h-12 w-12 mr-3">
                <AvatarImage src="/placeholder-user.jpg" alt="@tecnico1" />
                <AvatarFallback>RM</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">Roberto Méndez</h3>
                <div className="flex items-center mt-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-xs text-gray-600">5.0 (42)</span>
                </div>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>A 2.3 km de distancia</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-2">Detalles del Servicio</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Servicio:</span>
                <span>Reemplazar apagador</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Categoría:</span>
                <Badge className="bg-[#F28C38]">Electricista</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Ubicación:</span>
                <span>Calle Principal #123</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Fecha estimada:</span>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Hoy, 2-4 PM</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Método de Pago</h3>
            <RadioGroup defaultValue="card1">
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="card1" id="card1" />
                <Label htmlFor="card1" className="flex items-center">
                  <CreditCard className="h-4 w-4 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Visa terminada en 4242</p>
                    <p className="text-xs text-gray-500">Expira 12/25</p>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="new-card" id="new-card" />
                <Label htmlFor="new-card" className="text-[#F28C38]">
                  + Agregar nueva tarjeta
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-4" />

      <div className="space-y-2 mb-6 max-w-md mx-auto w-full">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$200.00</span>
        </div>
        <div className="flex justify-between">
          <span>Comisión de servicio</span>
          <span>$20.00</span>
        </div>
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>$220.00</span>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          El pago se retendrá hasta que el servicio se complete satisfactoriamente.
        </p>
      </div>

      <div className="mt-auto pt-4 max-w-xs mx-auto w-full">
        <Link href="/service-tracking" className="w-full">
          <Button className="w-full bg-[#F28C38] hover:bg-[#e67d29]">Confirmar y Pagar</Button>
        </Link>
      </div>
    </div>
  )
}
