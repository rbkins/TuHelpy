import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Filter } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DisputesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Disputas</h2>
        <Button variant="outline" size="sm" className="h-8">
          <Filter className="h-4 w-4 mr-1" />
          Filtrar
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="urgent">Urgentes</TabsTrigger>
          <TabsTrigger value="resolved">Resueltas</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Disputa: Servicio incompleto</h3>
                      <div className="flex items-center mt-1">
                        <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200 mr-2">
                          Urgente
                        </Badge>
                        <span className="text-sm text-gray-500">ID: #12345</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Ver Chat
                    </Button>
                  </div>
                  <div className="mt-3 text-sm">
                    <p className="mb-2">
                      <strong>Cliente:</strong> Juan Pérez - Afirma que el servicio no se completó correctamente.
                    </p>
                    <p className="mb-2">
                      <strong>Técnico:</strong> Roberto Méndez - Afirma que el servicio se completó según lo acordado.
                    </p>
                    <p className="mb-2">
                      <strong>Monto:</strong> $200.00 (retenido)
                    </p>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      Liberar Pago
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Reembolsar
                    </Button>
                    <Button className="flex-1 bg-gray-800 hover:bg-gray-700">Resolver</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Disputa: Cobro excesivo</h3>
                      <div className="flex items-center mt-1">
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200 mr-2">
                          En proceso
                        </Badge>
                        <span className="text-sm text-gray-500">ID: #12346</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Ver Chat
                    </Button>
                  </div>
                  <div className="mt-3 text-sm">
                    <p className="mb-2">
                      <strong>Cliente:</strong> María Rodríguez - Afirma que se le cobró más de lo acordado.
                    </p>
                    <p className="mb-2">
                      <strong>Técnico:</strong> Carlos Sánchez - Afirma que hubo trabajo adicional no contemplado.
                    </p>
                    <p className="mb-2">
                      <strong>Monto:</strong> $350.00 (retenido)
                    </p>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      Liberar Pago
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Reembolsar
                    </Button>
                    <Button className="flex-1 bg-gray-800 hover:bg-gray-700">Resolver</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Disputa: Daño a propiedad</h3>
                      <div className="flex items-center mt-1">
                        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 mr-2">
                          Resuelta
                        </Badge>
                        <span className="text-sm text-gray-500">ID: #12340</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Ver Chat
                    </Button>
                  </div>
                  <div className="mt-3 text-sm">
                    <p className="mb-2">
                      <strong>Cliente:</strong> Carlos López - Afirmó que el técnico dañó un mueble durante el servicio.
                    </p>
                    <p className="mb-2">
                      <strong>Técnico:</strong> Laura García - Negó haber causado el daño.
                    </p>
                    <p className="mb-2">
                      <strong>Resolución:</strong> Reembolso parcial de $100.00 al cliente.
                    </p>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Button variant="outline" size="sm" className="flex-1" disabled>
                      Caso cerrado
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="urgent" className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Disputa: Servicio incompleto</h3>
                      <div className="flex items-center mt-1">
                        <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200 mr-2">
                          Urgente
                        </Badge>
                        <span className="text-sm text-gray-500">ID: #12345</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Ver Chat
                    </Button>
                  </div>
                  <div className="mt-3 text-sm">
                    <p className="mb-2">
                      <strong>Cliente:</strong> Juan Pérez - Afirma que el servicio no se completó correctamente.
                    </p>
                    <p className="mb-2">
                      <strong>Técnico:</strong> Roberto Méndez - Afirma que el servicio se completó según lo acordado.
                    </p>
                    <p className="mb-2">
                      <strong>Monto:</strong> $200.00 (retenido)
                    </p>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      Liberar Pago
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Reembolsar
                    </Button>
                    <Button className="flex-1 bg-gray-800 hover:bg-gray-700">Resolver</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resolved" className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Disputa: Daño a propiedad</h3>
                      <div className="flex items-center mt-1">
                        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 mr-2">
                          Resuelta
                        </Badge>
                        <span className="text-sm text-gray-500">ID: #12340</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Ver Chat
                    </Button>
                  </div>
                  <div className="mt-3 text-sm">
                    <p className="mb-2">
                      <strong>Cliente:</strong> Carlos López - Afirmó que el técnico dañó un mueble durante el servicio.
                    </p>
                    <p className="mb-2">
                      <strong>Técnico:</strong> Laura García - Negó haber causado el daño.
                    </p>
                    <p className="mb-2">
                      <strong>Resolución:</strong> Reembolso parcial de $100.00 al cliente.
                    </p>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Button variant="outline" size="sm" className="flex-1" disabled>
                      Caso cerrado
                    </Button>
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
