import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Filter } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function ServiceOpportunities() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Oportunidades de Servicio</h2>
        <Button variant="outline" size="sm" className="h-8">
          <Filter className="h-4 w-4 mr-1" />
          Filtrar
        </Button>
      </div>

      <Tabs defaultValue="available" className="mb-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="available">Disponibles</TabsTrigger>
          <TabsTrigger value="applied">Aplicados</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Reemplazar apagador</h3>
                <Badge className="bg-[#F28C38]">Electricista</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Necesito reemplazar un apagador que no funciona en mi sala...
              </p>
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>A 2.3 km</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Hace 10 min</span>
                </div>
              </div>
              <Link href="/quote-confirmation">
                <Button className="w-full bg-[#F28C38] hover:bg-[#e67d29]">Enviar Presupuesto</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Instalación de lámpara</h3>
                <Badge className="bg-[#F28C38]">Electricista</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">Necesito instalar una lámpara de techo en mi comedor...</p>
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>A 4.1 km</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Hace 25 min</span>
                </div>
              </div>
              <Link href="/quote-confirmation">
                <Button className="w-full bg-[#F28C38] hover:bg-[#e67d29]">Enviar Presupuesto</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Revisar cortocircuito</h3>
                <Badge className="bg-[#F28C38]">Electricista</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">Tengo un problema con el circuito eléctrico en mi cocina...</p>
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>A 5.8 km</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Hace 1 hora</span>
                </div>
              </div>
              <Link href="/quote-confirmation">
                <Button className="w-full bg-[#F28C38] hover:bg-[#e67d29]">Enviar Presupuesto</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applied" className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Cambio de enchufes</h3>
                <Badge>Pendiente</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">Necesito cambiar 3 enchufes que están dañados...</p>
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>A 3.5 km</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Presupuesto: $150</span>
                </div>
              </div>
              <Button className="w-full" variant="outline" disabled>
                Esperando respuesta
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
