// src/app/layout.tsx

import { ReactNode } from 'react'

export const metadata = {
  title: 'Boatly',
  description: 'Rent dream boats worldwide',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de">
      <head>
        {/* Google Fonts preload */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous" 
        />
        {/* Poppins in den Gewichten 400,500,700 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#000',
          color: '#fff',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  )
}
