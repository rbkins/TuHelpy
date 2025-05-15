import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, FileText, Star, PenToolIcon as Tool, DollarSign } from "lucide-react"
import Link from "next/link"

export default function TechnicianDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Bienvenido, Roberto</h2>
          <p className="text-gray-500">Electricista</p>
        </div>
        <Link href="/technician/service-opportunities">
          <Button className="bg-[#4A4A4A] hover:bg-gray-600">Ver Oportunidades</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Tool className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="font-medium mb-1">Servicios Realizados</h3>
            <p className="text-3xl font-bold">42</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-medium mb-1">Ingresos Totales</h3>
            <p className="text-3xl font-bold">$8,450</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="font-medium mb-1">Calificación</h3>
            <div className="flex items-center">
              <p className="text-3xl font-bold mr-2">5.0</p>
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
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                <Tool className="h-5 w-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Reemplazar apagador</h4>
                    <p className="text-sm text-gray-500">Cliente: Juan Pérez</p>
                  </div>
                  <Badge className="bg-[#4A4A4A]">En progreso</Badge>
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Programado para hoy, 2-4 PM</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-medium">$200.00</span>
                  <Link href="/technician/active-services">
                    <Button variant="outline" className="mt-1 w-full sm:w-auto">
                      Ver detalles
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Oportunidades Recientes</h3>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                <FileText className="h-5 w-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Instalación de lámpara</h4>
                    <p className="text-sm text-gray-500">A 4.1 km de distancia</p>
                  </div>
                  <Badge variant="outline">Disponible</Badge>
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Publicado hace 25 min</span>
                </div>
                <div className="flex justify-end mt-2">
                  <Link href="/technician/service-opportunities">
                    <Button className="bg-[#4A4A4A] hover:bg-gray-600">Enviar Presupuesto</Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
