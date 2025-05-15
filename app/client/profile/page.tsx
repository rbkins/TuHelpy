import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Star } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ClientProfile() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src="/placeholder-user.jpg" alt="@usuario" />
            <AvatarFallback className="text-2xl">JD</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm">
            Cambiar foto
          </Button>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Juan Pérez</h2>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 text-gray-300" />
              <span className="ml-1 text-sm text-gray-600">4.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Correo Electrónico</p>
              <p>juan.perez@ejemplo.com</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Teléfono</p>
              <p>+52 123 456 7890</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Dirección</p>
              <p>Calle Principal #123, Ciudad</p>
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

      <Tabs defaultValue="history">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="history">Historial de Servicios</TabsTrigger>
          <TabsTrigger value="payment">Métodos de Pago</TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Reparación de Enchufe</p>
                  <p className="text-sm text-gray-500">Completado - 12/05/2023</p>
                </div>
                <div className="flex">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Instalación de Lámpara</p>
                  <p className="text-sm text-gray-500">Completado - 28/04/2023</p>
                </div>
                <div className="flex">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3 w-3 text-gray-300" />
                  <Star className="h-3 w-3 text-gray-300" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-3">
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <p className="font-medium">Visa terminada en 4242</p>
                  <p className="text-sm text-gray-500">Expira 12/25</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Button className="bg-[#F28C38] hover:bg-[#e67d29]">+ Agregar método de pago</Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}
