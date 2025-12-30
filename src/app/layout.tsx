import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NetSecurity',
  description: 'Líder em Cibersegurança',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} font-sans antialiased bg-coal text-eggshell`}>
        <div className="absolute top-0 left-0 w-full z-50">
          <Header />
        </div>
        {children}
      </body>
    </html>
  )
}