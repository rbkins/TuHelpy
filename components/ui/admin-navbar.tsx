"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  User,
  AlertTriangle,
  LogOut,
  Menu,
} from "lucide-react"

const adminNavItems = [
  { href: "/admin", label: "Dashboard", icon: BarChart3 },
  { href: "/admin/users", label: "Usuarios", icon: User },
  { href: "/admin/disputes", label: "Disputas", icon: AlertTriangle },
]

export default function AdminNavbar() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        <Link href="/admin">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="text-gray-800 text-lg font-bold transform rotate-6">
                Y
              </div>
            </div>
            <span className="font-bold text-xl">Admin Panel</span>
          </div>
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        {adminNavItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={`text-white ${isActive ? "bg-gray-700" : "hover:bg-gray-700"}`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {item.label}
              </Button>
            </Link>
          )
        })}
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/login">
          <Button variant="ghost" className="text-white hover:bg-gray-700">
            <LogOut className="h-4 w-4 mr-2" />
            Cerrar Sesión
          </Button>
        </Link>
      </div>
    </nav>
  )
}
