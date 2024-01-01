'use client'

import { ShoppingCart } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { Separator } from './ui/separator'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import Image from 'next/image'

// /**
//  * Cart Component:
//  * - Displays a shopping cart interface with item count and details.
//  * - Allows users to view cart items, shipping information, fees, and total cost.
//  * - Offers a 'Continue to Checkout' button when the cart has items.
//  * - If the cart is empty:
//  *   - Prompts users to add items to the cart with a link to the product page.
//  *   - Displays an empty cart image.
//  * 
//  * Components and Features:
//  * - Uses Lucide-React's ShoppingCart icon.
//  * - Utilizes a Sheet UI component for cart display.
//  * - Formats prices using the 'formatPrice' utility function.
//  * - Provides links for navigation using Next.js 'Link' component.
//  * - Incorporates styling with Tailwind CSS classes.
//  * 
//  * Functions:
//  * - itemCount: Represents the number of items in the cart.
//  * - fee: Represents a transaction fee applied to the total cost.
//  * 
//  * Components Structure:
//  * - SheetTrigger: Activates the cart display when clicked.
//  * - SheetContent: Contains the cart's content, including item details and totals.
//  * - SheetHeader, SheetFooter: Sections within the cart for better organization.
//  * - Separator: Renders a dividing line within the cart content.
//  * - Image: Displays an image indicating an empty cart when no items are present.
//  * 
//  * Behavior:
//  * - Dynamically adjusts content based on the number of items in the cart.
//  * - Provides a user-friendly interface for cart interaction and checkout.
//  */

const Cart = () => {

  const itemCount = 0;

  const fee = 1

  return (
    <Sheet>
      <SheetTrigger className='group -m-2 flex items-center p-2'>
        <ShoppingCart
          aria-hidden='true'
          className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
        />
        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
          0
        </span>
      </SheetTrigger>
      <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
        <SheetHeader className='space-y-2.5 pr-6'>
          <SheetTitle>Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className='flex w-full flex-col pr-6'>
              {/* TODO cart logic; to complete later */}
              Cart items
            </div>
            <div className='space-y-4 pr-6'>
              <Separator />
              <div className='space-y-1.5 text-sm'>
                <div className='flex'>
                  <span className='flex-1'>Shipping</span>
                  <span>Free</span>
                </div>
                <div className='flex'>
                  <span className='flex-1'>
                    Transaction Fee
                  </span>
                  <span>{formatPrice(fee)}</span>
                </div>
                <div className='flex'>
                  <span className='flex-1'>Total</span>
                  <span>
                    {formatPrice(fee)}
                  </span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href='/cart'
                    className={buttonVariants({
                      className: 'w-full',
                    })}>
                    Continue to Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className='flex h-full flex-col items-center justify-center space-y-1'>
            <div
              aria-hidden='true'
              className='relative mb-4 h-60 w-60 text-muted-foreground'>
              <Image
                src='/giraffe-empty-cart.png'
                fill
                alt='empty shopping cart hippo'
              />
            </div>
            <div className='text-xl font-semibold'>
              Your cart is empty
            </div>
            <SheetTrigger asChild>
              <Link
                href='/products'
                className={buttonVariants({
                  variant: 'link',
                  size: 'sm',
                  className:
                    'text-sm text-muted-foreground',
                })}>
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default Cart