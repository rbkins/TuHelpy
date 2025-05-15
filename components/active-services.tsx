import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, MessageCircle, CheckCircle, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function ActiveServices() {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-lg font-medium">Servicios Activos</h2>
        <p className="text-sm text-gray-500">Gestiona tus servicios en curso</p>
      </div>

      <Tabs defaultValue="active" className="mb-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="active">Activos</TabsTrigger>
          <TabsTrigger value="pending">Pendientes</TabsTrigger>
          <TabsTrigger value="completed">Completados</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <Avatar className="h-12 w-12 mr-3">
                  <AvatarImage src="/placeholder-user.jpg" alt="@cliente1" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Reemplazar apagador</h3>
                      <p className="text-sm text-gray-500">Juan Pérez</p>
                    </div>
                    <Badge className="bg-[#F28C38]">En progreso</Badge>
                  </div>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Calle Principal #123</span>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Llamar
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat
                    </Button>
                  </div>
                  <Link href="/tech-evaluation">
                    <Button className="w-full mt-2 bg-[#F28C38] hover:bg-[#e67d29]">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Marcar como Completado
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <Avatar className="h-12 w-12 mr-3">
                  <AvatarImage src="/placeholder-user.jpg" alt="@cliente2" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Instalación de lámpara</h3>
                      <p className="text-sm text-gray-500">María Rodríguez</p>
                    </div>
                    <Badge>Pendiente</Badge>
                  </div>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Av. Secundaria #456</span>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Llamar
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Programado para mañana, 10:00 AM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <Avatar className="h-12 w-12 mr-3">
                  <AvatarImage src="/placeholder-user.jpg" alt="@cliente3" />
                  <AvatarFallback>CS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Cambio de enchufes</h3>
                      <p className="text-sm text-gray-500">Carlos Sánchez</p>
                    </div>
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                      Completado
                    </Badge>
                  </div>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Calle Terciaria #789</span>
                  </div>
                  <div className="flex items-center mt-2 justify-between">
                    <span className="text-sm font-medium">$150.00</span>
                    <div className="flex">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
