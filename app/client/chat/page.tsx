"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  MessageCircle,
  Send,
  Paperclip,
  ImageIcon,
  ArrowLeft,
} from "lucide-react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [openChatId, setOpenChatId] = useState<number | null>(1); // null = lista, id = chat abierto

  const contacts = [
    {
      id: 1,
      name: "Roberto Méndez",
      role: "Electricista",
      status: "En línea",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 2,
      name: "Laura García",
      role: "Fontanera",
      status: "Hace 5 min",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 3,
      name: "Carlos Sánchez",
      role: "Carpintero",
      status: "Hace 1 hora",
      avatar: "/placeholder-user.jpg",
    },
  ];

  // Mensajes por chatId (simulación para frontend)
  const messagesByChatId: Record<number, Array<any>> = {
    1: [
      {
        id: 1,
        sender: "tech",
        text: "Hola, estoy en camino a tu domicilio. Llegaré en aproximadamente 15 minutos.",
        time: "10:30 AM",
      },
      {
        id: 2,
        sender: "user",
        text: "Perfecto, aquí te espero. La puerta es la azul con el número 123.",
        time: "10:32 AM",
      },
      {
        id: 3,
        sender: "tech",
        text: "Entendido. ¿El apagador que necesitas reemplazar es de un solo interruptor o doble?",
        time: "10:35 AM",
      },
      {
        id: 4,
        sender: "user",
        text: "Es de un solo interruptor. Está en la sala, junto a la entrada principal.",
        time: "10:36 AM",
      },
      {
        id: 5,
        sender: "tech",
        text: "Perfecto, llevo el material necesario. Nos vemos en unos minutos.",
        time: "10:37 AM",
      },
    ],
    2: [
      {
        id: 1,
        sender: "tech",
        text: "Hola, ¿en qué puedo ayudarte hoy?",
        time: "09:00 AM",
      },
    ],
    3: [
      {
        id: 1,
        sender: "tech",
        text: "Buenos días, ¿qué servicio necesitas?",
        time: "08:00 AM",
      },
    ],
  };

  const handleSend = () => {
    if (message.trim()) {
      // Aquí iría la lógica para enviar el mensaje (usar openChatId para el chat actual)
      setMessage("");
    }
  };

  // Si no hay chat abierto, mostrar lista de chats
  if (openChatId === null) {
    return (
      <div className="flex flex-col h-[calc(100vh-12rem)] md:h-[calc(100vh-14rem)]">
        <div className="p-4 border-b">
          <h2 className="font-bold text-lg">Mensajes</h2>
        </div>
        <div className="divide-y flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="p-4 flex items-center hover:bg-gray-50 cursor-pointer"
              onClick={() => setOpenChatId(contact.id)}
              data-chat-id={contact.id}
            >
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage
                  src={contact.avatar || "/placeholder.svg"}
                  alt={contact.name}
                />
                <AvatarFallback>
                  {contact.name.charAt(0)}
                  {contact.name.split(" ")[1].charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium truncate">{contact.name}</h3>
                  <span className="text-xs text-gray-500">
                    {contact.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 truncate">{contact.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Chat abierto
  const currentContact = contacts.find((c) => c.id === openChatId);
  const messages = messagesByChatId[openChatId] || [];

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] md:h-[calc(100vh-14rem)]">
      {/* Encabezado del chat */}
      <div className="p-4 border-b flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="mr-2"
          onClick={() => setOpenChatId(null)}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage
            src={currentContact?.avatar || "/placeholder-user.jpg"}
            alt={currentContact?.name || ""}
          />
          <AvatarFallback>
            {currentContact?.name?.charAt(0)}
            {currentContact?.name?.split(" ")[1]?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="font-medium">{currentContact?.name}</h3>
          <p className="text-xs text-green-500">{currentContact?.status}</p>
        </div>
        <Button variant="ghost" size="icon">
          <MessageCircle className="h-5 w-5" />
        </Button>
      </div>

      {/* Mensajes */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
            data-message-id={msg.id}
          >
            {msg.sender === "tech" && (
              <Avatar className="h-8 w-8 mr-2 mt-1">
                <AvatarImage
                  src={currentContact?.avatar || "/placeholder-user.jpg"}
                  alt={currentContact?.name || ""}
                />
                <AvatarFallback>
                  {currentContact?.name?.charAt(0)}
                  {currentContact?.name?.split(" ")[1]?.charAt(0)}
                </AvatarFallback>
              </Avatar>
            )}
            <div
              className={`rounded-lg p-3 max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-[#F28C38] text-white"
                  : "bg-gray-100"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p
                className={`text-xs mt-1 ${
                  msg.sender === "user" ? "text-white/70" : "text-gray-500"
                }`}
              >
                {msg.time}
              </p>
            </div>
            {msg.sender === "user" && (
              <Avatar className="h-8 w-8 ml-2 mt-1">
                <AvatarImage src="/placeholder-user.jpg" alt="Usuario" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
      </div>

      {/* Entrada de mensaje */}
      <div className="p-4 border-t">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="text-gray-500">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500 mr-2">
            <ImageIcon className="h-5 w-5" />
          </Button>
          <Input
            placeholder="Escribe un mensaje..."
            className="flex-1"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button
            className="ml-2 bg-[#F28C38] hover:bg-[#e67d29]"
            onClick={handleSend}
            disabled={!message.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
