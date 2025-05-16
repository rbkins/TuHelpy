import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Facebook } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fa7a22] to-white via-[#e1874a] p-4">
      <div className="max-w-md w-full">
        <div className="mb-8 text-center">
          <Link href="/">
            <Image
              src="/Group 13.png"
              alt="ServiYa Logo"
              width={80}
              height={80}
              className="mx-auto"
            />
          </Link>
          <h1 className="text-2xl font-bold mt-4 text-[#4A4A4A]">ServiYa</h1>
          <p className="text-muted-foreground text-white">
            Conecta con profesionales o ofrece tus servicios
          </p>
        </div>

        <Tabs defaultValue="cliente" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="cliente">Cliente</TabsTrigger>
            <TabsTrigger value="tecnico">Técnico</TabsTrigger>
          </TabsList>

          <TabsContent value="cliente">
            <Card>
              <CardHeader>
                <CardTitle>Crear cuenta de Cliente</CardTitle>
                <CardDescription>
                  Regístrate para solicitar servicios profesionales
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input id="name" placeholder="Tu nombre completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar contraseña</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full bg-[#F28C38] hover:bg-[#F28C38]/90">
                  Registrarse
                </Button>
                <div className="relative w-full">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-muted-foreground">
                      O regístrate con
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline">
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
                  <Button variant="outline">
                    <Facebook className="mr-2 h-4 w-4 text-blue-600" />
                    Facebook
                  </Button>
                </div>
                <div className="text-center mt-4">
                  <p className="text-sm text-muted-foreground">
                    ¿Ya tienes una cuenta?{" "}
                    <Link
                      href="login"
                      className="text-[#F28C38] hover:underline"
                    >
                      Inicia sesión
                    </Link>
                  </p>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="tecnico">
            <Card>
              <CardHeader>
                <CardTitle>Crear cuenta de Técnico</CardTitle>
                <CardDescription>
                  Regístrate para ofrecer tus servicios profesionales
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tech-name">Nombre completo</Label>
                  <Input id="tech-name" placeholder="Tu nombre completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tech-email">Correo electrónico</Label>
                  <Input
                    id="tech-email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tech-phone">Teléfono</Label>
                  <Input
                    id="tech-phone"
                    type="tel"
                    placeholder="+52 55 1234 5678"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tech-specialty">Especialidad</Label>
                  <Input
                    id="tech-specialty"
                    placeholder="Ej: Electricista, Plomero, etc."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tech-password">Contraseña</Label>
                  <Input id="tech-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tech-confirm-password">
                    Confirmar contraseña
                  </Label>
                  <Input id="tech-confirm-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tech-id">Documento de identidad (KYC)</Label>
                  <div className="border-2 border-dashed rounded-md p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="space-y-2">
                      <div className="text-[#F28C38]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 mx-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p>Arrastra y suelta o haz clic para subir</p>
                        <p>Formatos aceptados: JPG, PNG, PDF</p>
                      </div>
                    </div>
                    <Input id="tech-id" type="file" className="hidden" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Necesitamos verificar tu identidad para garantizar la
                    seguridad de nuestros usuarios.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full bg-[#F28C38] hover:bg-[#F28C38]/90">
                  Registrarse como Técnico
                </Button>
                <div className="text-center mt-4">
                  <p className="text-sm text-muted-foreground">
                    ¿Ya tienes una cuenta?{" "}
                    <Link
                      href="login"
                      className="text-[#F28C38] hover:underline"
                    >
                      Inicia sesión
                    </Link>
                  </p>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
