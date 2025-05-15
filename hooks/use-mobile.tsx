"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Función para verificar si es móvil
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    // Verificar al cargar
    checkIfMobile()

    // Agregar listener para cambios de tamaño
    window.addEventListener("resize", checkIfMobile)

    // Limpiar listener al desmontar
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return isMobile
}
