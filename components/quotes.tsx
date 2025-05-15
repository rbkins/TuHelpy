import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"
import Link from "next/link"

export default function Quotes() {
  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto">
      <div className="mb-4">
        <h2 className="text-lg font-medium">Presupuestos disponibles</h2>
        <p className="text-sm text-gray-500">Selecciona el técnico que prefieras</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-[#F28C38] shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-start">
              <Avatar className="h-12 w-12 mr-3">
                <AvatarImage src="/placeholder-user.jpg" alt="@tecnico1" />
                <AvatarFallback>RM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Roberto Méndez</h3>
                    <div className="flex items-center mt-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-xs text-gray-600">5.0 (42)</span>
                    </div>
                  </div>
                  <Badge className="bg-[#F28C38]">$200</Badge>
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>A 2.3 km de distancia</span>
                </div>
                <Link href="/service-confirmation" className="w-full">
                  <Button className="w-full mt-3 bg-[#F28C38] hover:bg-[#e67d29]">Seleccionar Técnico</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-start">
              <Avatar className="h-12 w-12 mr-3">
                <AvatarImage src="/placeholder-user.jpg" alt="@tecnico2" />
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Laura García</h3>
                    <div className="flex items-center mt-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 text-gray-300" />
                      <span className="ml-1 text-xs text-gray-600">4.0 (18)</span>
                    </div>
                  </div>
                  <Badge>$180</Badge>
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>A 4.1 km de distancia</span>
                </div>
                <Link href="/service-confirmation" className="w-full">
                  <Button className="w-full mt-3" variant="outline">
                    Seleccionar Técnico
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-start">
              <Avatar className="h-12 w-12 mr-3">
                <AvatarImage src="/placeholder-user.jpg" alt="@tecnico3" />
                <AvatarFallback>CS</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Carlos Sánchez</h3>
                    <div className="flex items-center mt-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3 w-3 text-gray-300" />
                      <Star className="h-3 w-3 text-gray-300" />
                      <span className="ml-1 text-xs text-gray-600">3.0 (7)</span>
                    </div>
                  </div>
                  <Badge>$150</Badge>
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>A 5.8 km de distancia</span>
                </div>
                <Link href="/service-confirmation" className="w-full">
                  <Button className="w-full mt-3" variant="outline">
                    Seleccionar Técnico
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
