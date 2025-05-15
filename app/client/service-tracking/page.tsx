import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, MessageCircle, Clock, CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function ServiceTracking() {
  return (
    <div className="space-y-6">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Seguimiento de Servicio</h2>
          <Badge className="bg-[#F28C38]">En progreso</Badge>
        </div>
        <p className="text-gray-500">El técnico está en camino</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="md:col-span-2">
          <CardContent className="p-4">
            <div className="flex items-start">
              <Avatar className="h-12 w-12 mr-3">
                <AvatarImage src="/placeholder-user.jpg" alt="@tecnico1" />
                <AvatarFallback>RM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Roberto Méndez</h3>
                    <Badge className="mt-1 bg-[#F28C38]">Electricista</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Link href="/client/chat">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Tiempo estimado de llegada: 15 minutos</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <div className="bg-gray-200 rounded-lg h-[180px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto text-[#F28C38] mb-2" />
              <p className="text-sm text-gray-600">Mapa de seguimiento en tiempo real</p>
            </div>
          </div>
        </div>

        <Card className="md:col-span-2">
          <CardContent className="p-4 h-full flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">Chat</h3>
              <Badge variant="outline" className="text-xs">
                Historial guardado
              </Badge>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 mb-3 min-h-[200px]">
              <div className="flex items-start">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src="/placeholder-user.jpg" alt="@tecnico1" />
                  <AvatarFallback>RM</AvatarFallback>
                </Avatar>
                <div className="bg-gray-100 rounded-lg p-2 max-w-[80%]">
                  <p className="text-sm">
                    Hola, estoy en camino a tu domicilio. Llegaré en aproximadamente 15 minutos.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                </div>
              </div>

              <div className="flex items-start justify-end">
                <div className="bg-[#F28C38]/10 rounded-lg p-2 max-w-[80%]">
                  <p className="text-sm">Perfecto, aquí te espero. La puerta es la azul con el número 123.</p>
                  <p className="text-xs text-gray-500 mt-1">10:32 AM</p>
                </div>
                <Avatar className="h-8 w-8 ml-2">
                  <AvatarImage src="/placeholder-user.jpg" alt="@usuario" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex items-start">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src="/placeholder-user.jpg" alt="@tecnico1" />
                  <AvatarFallback>RM</AvatarFallback>
                </Avatar>
                <div className="bg-gray-100 rounded-lg p-2 max-w-[80%]">
                  <p className="text-sm">
                    Entendido. ¿El apagador que necesitas reemplazar es de un solo interruptor o doble?
                  </p>
                  <p className="text-xs text-gray-500 mt-1">10:35 AM</p>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <Input placeholder="Escribe un mensaje..." className="mr-2" />
              <Button size="icon" className="bg-[#F28C38] hover:bg-[#e67d29]">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-center pt-4">
        <Link href="/client/evaluation">
          <Button className="bg-[#F28C38] hover:bg-[#e67d29]">
            <CheckCircle className="h-4 w-4 mr-2" />
            Marcar como Completado
          </Button>
        </Link>
      </div>
    </div>
  )
}
