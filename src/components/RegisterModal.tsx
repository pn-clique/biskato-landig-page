import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import type { ReactNode } from 'react'

interface RegisterDialogProps {
  children: ReactNode
}

export function RegisterDialog({ children }: RegisterDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Criar conta</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para crie uma conta
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            id="name"
            placeholder="Digite seu nome completo"
            className="col-span-3"
          />
          <Input
            id="username"
            placeholder="Digite seu e-mail"
            className="col-span-3"
          />
          <Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            className="col-span-3"
          />
          <Input
            id="confirm-password"
            type="password"
            placeholder="Confirmar sua senha"
            className="col-span-3"
          />
        </div>
        <DialogFooter>
          <Button
            type="submit"
            variant={'outline'}
            className="border-violet-600 text-violet-600"
          >
            Criar conta
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
