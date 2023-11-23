import { Inter } from 'next/font/google'
import './style.css'
import QueryProvider from '@/Providers/QueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'FPS - Login',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className} suppressHydrationWarning={true}>
                <QueryProvider>
                    {children}
                </QueryProvider>
            </body>
        </html>
    )
}