"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function TechEvaluation() {
  const [rating, setRating] = useState(0)

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6 text-center">
        <h2 className="text-lg font-medium">¿Cómo calificarías al cliente?</h2>
        <p className="text-sm text-gray-500">Tu opinión nos ayuda a mejorar</p>
      </div>

      <div className="flex flex-col items-center mb-6">
        <Avatar className="h-20 w-20 mb-3">
          <AvatarImage src="/placeholder-user.jpg" alt="@cliente1" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <h3 className="font-medium">Juan Pérez</h3>
        <p className="text-sm text-gray-500">Cliente</p>
      </div>

      <div className="flex justify-center mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} onClick={() => setRating(star)} className="focus:outline-none">
            <Star className={`h-10 w-10 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
          </button>
        ))}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Comentarios (opcional)</label>
        <Textarea placeholder="Cuéntanos tu experiencia con el cliente..." className="min-h-[100px]" />
      </div>

      <div className="text-sm text-gray-500 mb-6">
        <p>
          Al enviar tu evaluación, confirmas que el servicio ha sido completado satisfactoriamente y recibirás el pago
          una vez que el cliente también confirme la finalización.
        </p>
      </div>

      <Link href="/service-opportunities">
        <Button className="w-full bg-[#F28C38] hover:bg-[#e67d29] mt-auto" disabled={rating === 0}>
          Enviar Evaluación
        </Button>
      </Link>
    </div>
  )
}
