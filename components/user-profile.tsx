import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, LogOut, Settings, Star } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function UserProfile() {
  // Asumimos que es un cliente por defecto, en una app real esto vendría de un contexto o estado global
  const userType = "client"

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src="/placeholder-user.jpg" alt="@usuario" />
            <AvatarFallback className="text-2xl">JD</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-bold">Juan Pérez</h2>
          <div className="flex items-center mt-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 text-gray-300" />
            <span className="ml-1 text-sm text-gray-600">4.0</span>
          </div>
          {userType === "technician" && <Badge className="mt-2 bg-[#F28C38]">Electricista</Badge>}
        </div>

        <div className="flex-1">
          {userType === "client" ? (
            <>
              <h3 className="font-medium mb-3">Información Personal</h3>
              <div className="space-y-2 mb-4">
                <div>
                  <p className="text-sm font-medium">Correo Electrónico</p>
                  <p className="text-sm">juan.perez@ejemplo.com</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Teléfono</p>
                  <p className="text-sm">+52 123 456 7890</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Dirección</p>
                  <p className="text-sm">Calle Principal #123, Ciudad</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <h3 className="font-medium mb-3">Información Profesional</h3>
              <div className="space-y-2 mb-4">
                <div>
                  <p className="text-sm font-medium">Especialidad</p>
                  <p className="text-sm">Electricista</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Radio de Trabajo</p>
                  <p className="text-sm">15 km</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Horario</p>
                  <p className="text-sm">Lunes a Viernes: 8:00 - 18:00</p>
                  <p className="text-sm">Sábados: 9:00 - 14:00</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Separator className="my-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium mb-3">Historial de Servicios</h3>
          <div className="space-y-3 mb-6">
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
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Métodos de Pago</h3>
          <Card className="mb-6">
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
        </div>
      </div>

      <div className="mt-auto space-y-2 max-w-xs mx-auto w-full">
        <Button variant="outline" className="w-full flex justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Configuración
        </Button>
        <Link href="/" className="w-full">
          <Button variant="outline" className="w-full flex justify-start text-red-500 hover:text-red-600">
            <LogOut className="mr-2 h-4 w-4" />
            Cerrar Sesión
          </Button>
        </Link>
      </div>
    </div>
  )
}
