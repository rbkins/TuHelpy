"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Menu,
  User,
  Home,
  FileText,
  Clock,
  Star,
  LogOut,
  MessageSquare,
  PenToolIcon as Tool,
  CheckSquare,
  BarChart3,
  AlertTriangle,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

interface NavbarProps {
  userType: "client" | "technician" | "admin"
}

export default function Navbar({ userType }: NavbarProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Cerrar el menú móvil cuando cambia la ruta
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuOpen])

  const clientNavItems: NavItem[] = [
    { href: "/client", label: "Inicio", icon: Home },
    { href: "/client/profile", label: "Perfil", icon: User },
    { href: "/client/service-request", label: "Solicitar", icon: FileText },
    { href: "/client/quotes", label: "Presupuestos", icon: FileText },
    { href: "/client/service-tracking", label: "Seguimiento", icon: Clock },
    { href: "/client/evaluation", label: "Evaluaciones", icon: Star },
    { href: "/client/chat", label: "Chat", icon: MessageSquare },
  ]

  const techNavItems: NavItem[] = [
    { href: "/technician", label: "Inicio", icon: Home },
    { href: "/technician/profile", label: "Perfil", icon: User },
    { href: "/technician/service-opportunities", label: "Oportunidades", icon: Tool },
    { href: "/technician/active-services", label: "Servicios", icon: CheckSquare },
    { href: "/technician/tech-evaluation", label: "Evaluaciones", icon: Star },
    { href: "/technician/chat", label: "Chat", icon: MessageSquare },
  ]

  const adminNavItems: NavItem[] = [
    { href: "/admin", label: "Dashboard", icon: BarChart3 },
    { href: "/admin/users", label: "Usuarios", icon: User },
    { href: "/admin/disputes", label: "Disputas", icon: AlertTriangle },
  ]

  const navItems = userType === "client" ? clientNavItems : userType === "technician" ? techNavItems : adminNavItems

  const bgColor = userType === "client" ? "bg-[#F28C38]" : userType === "technician" ? "bg-[#4A4A4A]" : "bg-gray-800"

  const hoverBgColor =
    userType === "client" ? "hover:bg-[#e67d29]" : userType === "technician" ? "hover:bg-gray-600" : "hover:bg-gray-700"

  const activeBgColor =
    userType === "client" ? "bg-[#e67d29]" : userType === "technician" ? "bg-gray-600" : "bg-gray-700"

  return (
    <header className="sticky top-0 z-40">
      {/* Desktop Navigation */}
      <div className={`${bgColor} text-white p-4 flex justify-between items-center`}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div
              className={`${userType === "client" ? "text-[#F28C38]" : "text-[#4A4A4A]"} text-lg font-bold transform rotate-6`}
            >
              Y
            </div>
          </div>
          <h1 className="text-xl font-bold">ServiYa</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link key={item.href} href={item.href}>
                <Button variant="ghost" className={cn("text-white", isActive ? activeBgColor : "hover:bg-white/10")}>
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center">
          <Link href="/" className="hidden md:block">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
          </Link>

          {/* Mobile Menu Trigger */}
          <Button
            variant="ghost"
            size="icon"
            className={`text-white ${hoverBgColor} md:hidden`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-[250px] bg-white dark:bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 ${bgColor} rounded-full flex items-center justify-center`}>
              <div className="text-white text-lg font-bold transform rotate-6">Y</div>
            </div>
            <h2 className="text-lg font-bold">ServiYa</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)]">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isActive
                      ? userType === "client"
                        ? "bg-[#F28C38] hover:bg-[#e67d29]"
                        : userType === "technician"
                          ? "bg-[#4A4A4A] hover:bg-gray-600"
                          : "bg-gray-800 hover:bg-gray-700"
                      : "",
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            )
          })}

          <div className="pt-6">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                variant="outline"
                className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar Sesión
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
