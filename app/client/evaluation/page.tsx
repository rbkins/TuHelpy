"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function Evaluation() {
  const [rating, setRating] = useState(0)

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">¿Cómo calificarías el servicio?</h2>
        <p className="text-gray-500">Tu opinión nos ayuda a mejorar</p>
      </div>

      <div className="flex flex-col items-center">
        <Avatar className="h-20 w-20 mb-3">
          <AvatarImage src="/placeholder-user.jpg" alt="@tecnico1" />
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>
        <h3 className="font-medium">Roberto Méndez</h3>
        <p className="text-sm text-gray-500">Electricista</p>
      </div>

      <div className="flex justify-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} onClick={() => setRating(star)} className="focus:outline-none">
            <Star className={`h-10 w-10 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
          </button>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Comentarios (opcional)</label>
        <Textarea placeholder="Cuéntanos tu experiencia con el servicio..." className="min-h-[100px]" />
      </div>

      <div className="text-sm text-gray-500">
        <p>
          Al enviar tu evaluación, confirmas que el servicio ha sido completado satisfactoriamente y autorizas la
          liberación del pago al técnico.
        </p>
      </div>

      <div className="flex justify-center pt-4">
        <Link href="/client">
          <Button className="bg-[#F28C38] hover:bg-[#e67d29]" disabled={rating === 0}>
            Enviar Evaluación
          </Button>
        </Link>
      </div>
    </div>
  )
}
