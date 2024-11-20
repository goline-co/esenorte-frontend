import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'

export default function Navigation() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button>
          <Menu className='w-4 h-4' />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col justify-end items-end'>
        <nav className='flex flex-col mb-8 w-full'>
          <ul className='flex  flex-col gap-4 text-end list-none justify-center items-center'>
            <li>
              <SheetClose asChild>
                <a href='#'>{'Sobre Nosotros'}</a>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <a href='#'>{'Planes y Convenios'}</a>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <a href='#'>{'Servicio al Cliente'}</a>
              </SheetClose>
            </li>
          </ul>
        </nav>
        <SheetFooter className='w-full'>
          <Button className='w-full'>{'Reserva a tu especilista'}</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
