import type { Metadata } from 'next'
import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
