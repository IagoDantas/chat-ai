'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  })

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chat bot</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full pr-4 h-[440px]">
          {messages.map(message => {
            return (
              <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="https://i.pinimg.com/1200x/3d/64/45/3d6445331c772158aefcd8b69d5a4621.jpg" />
                  </Avatar>
                )}
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>IG</AvatarFallback>
                    <AvatarImage src="https://github.com/IagoDantas.png" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">{message.role === 'user' ? 'Usuário:' : 'AI'}</span>
                  {message.content}
                </p>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}