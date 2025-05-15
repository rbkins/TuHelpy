"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./globals.css"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(true)

  // Detectar si es móvil o desktop
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // No mostrar el menú hamburguesa en la página de login
  const showMenu = pathname !== "/login"

  const getViewTitle = () => {
    switch (pathname) {
      case "/":
        return "Bienvenida"
      case "/login":
        return "Registro / Inicio de Sesión"
      case "/profile":
        return "Perfil de Usuario"
      case "/service-request":
        return "Solicitud de Servicio"
      case "/quotes":
        return "Presupuestos"
      case "/service-confirmation":
        return "Confirmación de Servicio"
      case "/service-tracking":
        return "Seguimiento de Servicio"
      case "/evaluation":
        return "Evaluación"
      case "/service-opportunities":
        return "Oportunidades de Servicio"
      case "/quote-confirmation":
        return "Confirmación de Presupuesto"
      case "/active-services":
        return "Servicios Activos"
      case "/tech-evaluation":
        return "Evaluación (Técnico)"
      case "/admin-panel":
        return "Panel de Administración"
      default:
        return "ServiYa"
    }
  }

  // Renderizar navegación para desktop
  const renderDesktopNav = () => (
    <div className="hidden lg:block lg:w-64 bg-white shadow-md p-6 h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="mb-8">
        <div className="w-16 h-16 bg-[#F28C38] rounded-full mx-auto mb-4 flex items-center justify-center">
          <div className="text-white text-3xl font-bold transform rotate-6">Y</div>
        </div>
        <h2 className="text-xl font-bold text-center text-[#4A4A4A]">ServiYa</h2>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium text-gray-500 text-sm mb-3">NAVEGACIÓN</h3>
        <Link href="/">
          <Button variant="ghost" className="w-full justify-start">
            1. Bienvenida
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="ghost" className="w-full justify-start">
            2. Registro/Login
          </Button>
        </Link>
        <Link href="/profile">
          <Button variant="ghost" className="w-full justify-start">
            3. Perfil Usuario
          </Button>
        </Link>
        <Link href="/service-request">
          <Button variant="ghost" className="w-full justify-start">
            4. Solicitud Servicio
          </Button>
        </Link>
        <Link href="/quotes">
          <Button variant="ghost" className="w-full justify-start">
            5. Presupuestos
          </Button>
        </Link>
        <Link href="/service-confirmation">
          <Button variant="ghost" className="w-full justify-start">
            6. Confirmación
          </Button>
        </Link>
        <Link href="/service-tracking">
          <Button variant="ghost" className="w-full justify-start">
            7. Seguimiento
          </Button>
        </Link>
        <Link href="/evaluation">
          <Button variant="ghost" className="w-full justify-start">
            8. Evaluación
          </Button>
        </Link>
        <Link href="/service-opportunities">
          <Button variant="ghost" className="w-full justify-start">
            9. Oportunidades
          </Button>
        </Link>
        <Link href="/quote-confirmation">
          <Button variant="ghost" className="w-full justify-start">
            10. Conf. Presupuesto
          </Button>
        </Link>
        <Link href="/active-services">
          <Button variant="ghost" className="w-full justify-start">
            11. Servicios Activos
          </Button>
        </Link>
        <Link href="/tech-evaluation">
          <Button variant="ghost" className="w-full justify-start">
            12. Eval. Técnico
          </Button>
        </Link>
        <Link href="/admin-panel">
          <Button variant="ghost" className="w-full justify-start">
            13. Panel Admin
          </Button>
        </Link>
      </div>
    </div>
  )

  return (
    <html lang="es">
      <body className="bg-gray-100 min-h-screen">
        {!isMobile && renderDesktopNav()}

        <div className={`${!isMobile ? "lg:pl-64" : ""} min-h-screen flex flex-col`}>
          <div className="w-full max-w-5xl mx-auto p-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#F28C38] text-white p-4 flex items-center justify-between">
                {pathname !== "/" && (
                  <Link href="/">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-[#e67d29]">
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                  </Link>
                )}
                <h1 className="text-xl font-bold flex-1 text-center">{getViewTitle()}</h1>
                {showMenu && isMobile && (
                  <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-[#e67d29]">
                        <Menu className="h-5 w-5" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="w-[300px] sm:w-[400px]">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold">Navegación rápida</h2>
                        <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                          <X className="h-5 w-5" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        <Link href="/" onClick={() => setOpen(false)}>
                          <Button variant="outline" className="w-full justify-start">
                            1. Bienvenida
                          </Button>
                        </Link>
                        <Link href="/login" onClick={() => setOpen(false)}>
                          <Button variant="outline" className="w-full justify-start">
                            2. Registro/Login
                          </Button>
                        </Link>
                        <Link href="/profile" onClick={() => setOpen(false)}>
                          <Button variant="outline" className="w-full justify-start">
                            3. Perfil Usuario
                          </Button>
                        </Link>
                        <Link href="/service-request" onClick={() => setOpen(false)}>
                          <Button variant="outline" className="w-full justify-start">
                            4. Solicitud Servicio
                          </Button>
                        </Link>
                        <Link href="/quotes" onClick={() => setOpen(false)}>
                          <Button variant="outline" className="w-full justify-start">
                            5. Presupuestos
                          </Button>
                        </Link>
                        <Link href="/service-confirmation" onClick={() => setOpen(false)}>
                          <Button variant="outline" className="w-full justify-start">
                            6. Confirmación
                          </Button>
                        </Link>
                        <Link href="/service-tracking" onClick={() => setOpen(false)}>
                          <Button variant="outline" className="w-full justify-start">
                            7. Seguimiento
                          </Button>
                        </Link>
                        <Link href="/evaluation" onClick={() => setOpen(false)}>
                          <Button variant="outline" className="w-full justify-start">
                            8. Evaluación
                          </Button>
                        </Link>
                        <Link href="/service-opportunities" onClick={() => setOpen(false)}>
                          <Button variant="outline" className="w-full justify-start">
                            9. Oportunidades
                          </Button>
                        </Link>
                        <Link href="/quote-confirmation" onClick={() => setOpen(false)}>
                          <Button variant="outline" className="w-full justify-start">
                            10. Conf. Presupuesto
                          </Button>
                        </Link>
                        <Link href="/active-services" onClick={() => setOpen(false)}>
                          <Button variant="outline" className="w-full justify-start">
                            11. Servicios Activos
                          </Button>
                        </Link>
                        <Link href="/tech-evaluation" onClick={() => setOpen(false)}>
                          <Button variant="outline" className="w-full justify-start">
                            12. Eval. Técnico
                          </Button>
                        </Link>
                        <Link href="/admin-panel" onClick={() => setOpen(false)}>
                          <Button variant="outline" className="w-full justify-start">
                            13. Panel Admin
                          </Button>
                        </Link>
                      </div>
                    </SheetContent>
                  </Sheet>
                )}
                {!showMenu && <div className="w-10"></div>}
              </div>
              <div className="p-4 min-h-[600px] lg:min-h-[700px] overflow-y-auto">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
