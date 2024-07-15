
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import React from 'react'
import { Inter, Space_Grotesk} from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500','600','700' ,'800', '900'],
  variable: '--font-inter'
})

const SpaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500','600','700'],
  variable: '--font-SpaceGrotesk'
})


export const metadata: Metadata = {
  title: 'Devflow',
  description: 'Kuch bhi poch le jo tuze pucna hai coding ke regarding',
  icons:{
    icon: './favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{
      elements: {
        formButtonPrimary: 'primary-gradient',
        footerActionLink: 
        'primary-text-gradient hover:text-primary-500'
      }
    }
    }>
      <html lang="en">
        <body className={ `${inter.variable} ${SpaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}