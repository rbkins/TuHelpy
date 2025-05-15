import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BarChart3, Search, Users, AlertTriangle, DollarSign, CheckCircle, Ban, Eye, MessageSquare } from "lucide-react"

export default function AdminPanel() {
  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto">
      <div className="mb-4">
        <h2 className="text-lg font-medium">Panel de Administración</h2>
        <p className="text-sm text-gray-500">Gestiona la plataforma y usuarios</p>
      </div>

      <Tabs defaultValue="dashboard" className="mb-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="users">Usuarios</TabsTrigger>
          <TabsTrigger value="disputes">Disputas</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4 mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 flex flex-col items-center">
                <Users className="h-8 w-8 text-[#F28C38] mb-2" />
                <p className="text-2xl font-bold">1,245</p>
                <p className="text-sm text-gray-500">Usuarios Activos</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center">
                <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                <p className="text-2xl font-bold">856</p>
                <p className="text-sm text-gray-500">Servicios Completados</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center">
                <DollarSign className="h-8 w-8 text-green-500 mb-2" />
                <p className="text-2xl font-bold">$12,450</p>
                <p className="text-sm text-gray-500">Ingresos Totales</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center">
                <AlertTriangle className="h-8 w-8 text-red-500 mb-2" />
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-gray-500">Alertas de Fraude</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Actividad Reciente</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="h-[250px] flex items-center justify-center">
                <BarChart3 className="h-20 w-20 text-gray-300" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4 mt-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input placeholder="Buscar usuarios..." className="pl-9" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="/placeholder-user.jpg" alt="@tecnico1" />
                    <AvatarFallback>RM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Roberto Méndez</h3>
                        <Badge className="mt-1 bg-[#F28C38]">Técnico</Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8 text-red-500">
                          <Ban className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <span>Electricista • 42 servicios • 5.0 ★</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-start">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="/placeholder-user.jpg" alt="@cliente1" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Juan Pérez</h3>
                        <Badge className="mt-1">Cliente</Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8 text-red-500">
                          <Ban className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <span>15 servicios solicitados • 4.0 ★</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="disputes" className="space-y-4 mt-4">
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
                    <Button className="flex-1 bg-[#F28C38] hover:bg-[#e67d29]">Resolver</Button>
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
                    <Button className="flex-1 bg-[#F28C38] hover:bg-[#e67d29]">Resolver</Button>
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
