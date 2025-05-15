import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Facebook, Mail } from "lucide-react"
import Link from "next/link"

export default function Login() {
  return (
    <div className="flex flex-col h-full max-w-md mx-auto">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
          <TabsTrigger value="register">Registrarse</TabsTrigger>
        </TabsList>

        <TabsContent value="login" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" type="email" placeholder="correo@ejemplo.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" />
          </div>
          <Link href="/service-request" className="w-full">
            <Button className="w-full bg-[#F28C38] hover:bg-[#e67d29]">Iniciar Sesión</Button>
          </Link>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">O continuar con</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="w-full">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" className="w-full">
              <Facebook className="mr-2 h-4 w-4" />
              Facebook
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="register" className="space-y-4">
          <RadioGroup defaultValue="client" className="mb-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="client" id="client" />
              <Label htmlFor="client">Cliente</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="technician" id="technician" />
              <Label htmlFor="technician">Técnico</Label>
            </div>
          </RadioGroup>

          <div className="space-y-2">
            <Label htmlFor="reg-name">Nombre Completo</Label>
            <Input id="reg-name" type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reg-email">Correo Electrónico</Label>
            <Input id="reg-email" type="email" placeholder="correo@ejemplo.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reg-password">Contraseña</Label>
            <Input id="reg-password" type="password" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reg-id">Documento de Identidad (solo técnicos)</Label>
            <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
              <Mail className="mx-auto h-8 w-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Arrastra tu documento o haz clic para subir</p>
            </div>
          </div>

          <Link href="/profile" className="w-full">
            <Button className="w-full bg-[#F28C38] hover:bg-[#e67d29]">Registrarse</Button>
          </Link>
        </TabsContent>
      </Tabs>
    </div>
  )
}
