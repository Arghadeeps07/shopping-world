'use client'

import { Trash, XCircleIcon, MinusIcon, PlusIcon } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '../../utils/useCart'
import { formatAmount } from '@/utils/formatAmount'
import { useToast } from '@/hooks/use-toast'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { handleCheckout } from '../services/checkout-cart'

const page = () => {
    const { cartCount, cartItems, cartTotal, incrementCartItems, decrementCartItems, deleteAllItems, deleteById } = useCart()
    const router = useRouter()
    const { toast } = useToast()

    const cartCheckout = async () => {
        try {
            const body = cartItems.map((item: any) => {
                return {
                    price: item.price_id,
                    quantity: item.quantity
                }
            })
            const url = await handleCheckout(body)
            router.push(url)
        } catch (err) {
            console.log("err")
            toast({
                title: `Checkout failed`
            })
        }
    }

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            toast({
                title: 'Order placed! You will receive an email confirmation.'
            })
            deleteAllItems()
        }

        if (query.get('canceled')) {
            toast({
                title: 'Order canceled -- continue to shop around and checkout when you are ready.'
            })
        }
    }, [])

    return (
        <div className='m-2 sm:m-5 px-4 md:px-10 lg:px-20 dark:bg-gray-900 dark:text-gray-200'>
            {cartCount > 0 ? (
                <>
                    <h2 className='text-2xl md:text-4xl font-semibold'>Cart Items: {cartCount}</h2>
                    <button className='text-blue-500 mt-2 font-bold hover:text-blue-700 hover:cursor-pointer'
                        onClick={deleteAllItems}
                    >
                        Clear all <Trash className='inline-block w-4 h-4' />
                    </button>
                </>
            ) : (
                <>
                    <h2 className='text-2xl md:text-4xl font-semibold'>Your shopping cart is empty!</h2>
                    <Link href='/products' className='text-lg md:text-xl mt-1 text-blue-500 underline'>Shop here</Link>
                </>
            )}

            {cartCount > 0 && (
                <div>
                    {cartItems.map((item: any) => (
                        <div key={item.id} className='flex flex-col sm:flex-row justify-between border rounded-md p-4 my-2 bg-white dark:bg-gray-800 hover:shadow-lg'>
                            <Link href={`/products/${item.id}`} className='flex items-center'>
                                <Image src={item.image} alt={item.name} width={80} height={80} className='w-20 h-auto' />
                                <p className='font-semibold text-lg md:text-xl ml-2'>{item.name}</p>
                            </Link>
                            <div className='flex items-center gap-2 sm:gap-5 mt-2 sm:mt-0'>
                                <div className='flex items-center gap-2'>
                                    <button disabled={item.quantity == 1} className='p-1 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white disabled:cursor-not-allowed'
                                        onClick={() => decrementCartItems(item.id)}
                                    >
                                        <MinusIcon className='w-5 h-5 md:w-6 md:h-6' />
                                    </button>
                                    <p className='font-semibold text-lg md:text-xl'>{item.quantity}</p>
                                    <button className='p-1 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white'
                                        onClick={() => incrementCartItems(item.id)}
                                    >
                                        <PlusIcon className='w-5 h-5 md:w-6 md:h-6' />
                                    </button>
                                </div>
                                <p className='text-lg md:text-xl font-semibold'>{formatAmount(item.price)}</p>
                                <button className='text-blue-500 hover:text-blue-700'
                                    onClick={() => deleteById(item.id)}
                                >
                                    <XCircleIcon className='w-5 h-5 md:w-6 md:h-6' />
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className='flex flex-col items-end border-t py-4 mt-8'>
                        <p className='text-lg md:text-xl'>
                            Total: <span className='font-bold text-green-500'>{cartTotal}</span>
                        </p>
                        <button className='mt-4 py-2 px-6 bg-blue-500 text-white hover:bg-blue-700 rounded-md text-sm md:text-base'
                            onClick={cartCheckout}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default page
