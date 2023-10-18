import React from 'react'
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react'

export default function CartAction() {
  return (
    <div className=''>
      <Button class>
        <ShoppingBag size={18} color='white'/>
      </Button>
    </div>
  )
}
