import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Eye, Ban, Filter } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Gestión de Usuarios</h2>
        <Button variant="outline" size="sm" className="h-8">
          <Filter className="h-4 w-4 mr-1" />
          Filtrar
        </Button>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input placeholder="Buscar usuarios..." className="pl-9" />
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="technicians">Técnicos</TabsTrigger>
          <TabsTrigger value="clients">Clientes</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-4">
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
                      <Badge className="mt-1 bg-gray-800">Técnico</Badge>
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

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="/placeholder-user.jpg" alt="@tecnico2" />
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Laura García</h3>
                      <Badge className="mt-1 bg-gray-800">Técnico</Badge>
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
                    <span>Fontanera • 18 servicios • 4.0 ★</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="technicians" className="space-y-4 mt-4">
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
                      <Badge className="mt-1 bg-gray-800">Técnico</Badge>
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
                  <AvatarImage src="/placeholder-user.jpg" alt="@tecnico2" />
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Laura García</h3>
                      <Badge className="mt-1 bg-gray-800">Técnico</Badge>
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
                    <span>Fontanera • 18 servicios • 4.0 ★</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clients" className="space-y-4 mt-4">
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

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="/placeholder-user.jpg" alt="@cliente2" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">María Rodríguez</h3>
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
                    <span>8 servicios solicitados • 4.5 ★</span>
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
