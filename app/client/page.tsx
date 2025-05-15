import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, FileText, Star, PenToolIcon as Tool } from "lucide-react"
import Link from "next/link"

export default function ClientDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Bienvenido, Juan</h2>
          <p className="text-gray-500">¿Qué servicio necesitas hoy?</p>
        </div>
        <Link href="/client/service-request">
          <Button className="bg-[#F28C38] hover:bg-[#e67d29]">Solicitar Servicio</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#F28C38]/10 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-[#F28C38]" />
            </div>
            <h3 className="font-medium mb-1">Servicios Solicitados</h3>
            <p className="text-3xl font-bold">8</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Tool className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-medium mb-1">Servicios Completados</h3>
            <p className="text-3xl font-bold">6</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="font-medium mb-1">Calificación Promedio</h3>
            <div className="flex items-center">
              <p className="text-3xl font-bold mr-2">4.8</p>
              <div className="flex">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Servicios Activos</h3>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-[#F28C38]/10 rounded-full flex items-center justify-center mr-3">
                <Tool className="h-5 w-5 text-[#F28C38]" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Reemplazar apagador</h4>
                    <p className="text-sm text-gray-500">Técnico: Roberto Méndez</p>
                  </div>
                  <Badge className="bg-[#F28C38]">En progreso</Badge>
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Programado para hoy, 2-4 PM</span>
                </div>
                <Link href="/client/service-tracking">
                  <Button variant="outline" className="mt-3 w-full sm:w-auto">
                    Ver detalles
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Servicios Recientes</h3>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <Tool className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Instalación de Lámpara</h4>
                    <p className="text-sm text-gray-500">Técnico: Laura García</p>
                  </div>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                    Completado
                  </Badge>
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Completado el 28/04/2023</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <Star className="h-3 w-3 text-gray-300" />
                    <Star className="h-3 w-3 text-gray-300" />
                  </div>
                  <span className="text-sm font-medium">$180.00</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
