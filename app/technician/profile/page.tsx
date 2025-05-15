import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function TechnicianProfile() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src="/placeholder-user.jpg" alt="@tecnico" />
            <AvatarFallback className="text-2xl">RM</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm">
            Cambiar foto
          </Button>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Roberto Méndez</h2>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-600">5.0</span>
            </div>
            <Badge className="mt-2 bg-[#4A4A4A]">Electricista</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Correo Electrónico</p>
              <p>roberto.mendez@ejemplo.com</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Teléfono</p>
              <p>+52 123 456 7890</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Radio de Trabajo</p>
              <p>15 km</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Miembro desde</p>
              <p>Enero 2023</p>
            </div>
          </div>

          <Button variant="outline" size="sm" className="mt-2">
            Editar información
          </Button>
        </div>
      </div>

      <Separator />

      <Tabs defaultValue="availability">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="availability">Disponibilidad</TabsTrigger>
          <TabsTrigger value="services">Servicios</TabsTrigger>
          <TabsTrigger value="reviews">Reseñas</TabsTrigger>
        </TabsList>

        <TabsContent value="availability" className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-4">Horario de Trabajo</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Lunes a Viernes</p>
                    <p className="text-sm text-gray-500">8:00 AM - 6:00 PM</p>
                  </div>
                  <Switch id="weekdays" defaultChecked />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Sábados</p>
                    <p className="text-sm text-gray-500">9:00 AM - 2:00 PM</p>
                  </div>
                  <Switch id="saturday" defaultChecked />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Domingos</p>
                    <p className="text-sm text-gray-500">Cerrado</p>
                  </div>
                  <Switch id="sunday" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Estado Actual</h3>
                <Badge className="bg-green-500">Disponible</Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="available" defaultChecked />
                <Label htmlFor="available">Disponible para nuevos servicios</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-4">Servicios Ofrecidos</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Instalación eléctrica</p>
                    <p className="text-sm text-gray-500">Desde $150</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Editar
                  </Button>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Reparación de cortocircuitos</p>
                    <p className="text-sm text-gray-500">Desde $200</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Editar
                  </Button>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Instalación de lámparas</p>
                    <p className="text-sm text-gray-500">Desde $100</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Editar
                  </Button>
                </div>
              </div>
              <Button className="w-full mt-4 bg-[#4A4A4A] hover:bg-gray-600">+ Agregar Servicio</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="/placeholder-user.jpg" alt="@cliente1" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-medium">Juan Pérez</h4>
                    <span className="mx-2 text-gray-300">•</span>
                    <div className="flex">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    <Clock className="h-3 w-3 inline mr-1" />
                    12/05/2023
                  </p>
                  <p className="mt-2 text-sm">
                    Excelente servicio, muy profesional y puntual. Resolvió el problema rápidamente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="/placeholder-user.jpg" alt="@cliente2" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-medium">María Rodríguez</h4>
                    <span className="mx-2 text-gray-300">•</span>
                    <div className="flex">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    <Clock className="h-3 w-3 inline mr-1" />
                    28/04/2023
                  </p>
                  <p className="mt-2 text-sm">
                    Muy buen trabajo con la instalación de la lámpara. Quedó perfecta y el precio fue justo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
