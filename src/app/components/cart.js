'use client'
import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
function Cart() {
    const cart = useSelector(state => state.cart.cart)
    return (
        <div>
            <Link href={'/detail'} >
                <div className='fixed top-6 right-2 z-40'>
                    <svg className='text-slate-800 w-14 h-14' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='fill-current cursor-pointer opacity-60 hover:opacity-100'
                            d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                            stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className='relative right-[-33px] top-[-63px] flex rounded-full bg-red-700 w-6 h-6'>
                        <span className=' m-auto text-slate-200 font-semibold'>
                            {cart.length}
                        </span>
                    </div>
                </div>
            </Link>
        </div>


    )
}

export default Cart