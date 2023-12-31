import Header from '@/components/header/Header'
import './globals.css'

export const metadata = {
  title: 'Mohammad Kamran | Portfolio',
  description: 'Personal Website And Portfolio',
  themeColor: '#E0E7FF'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir='rtl'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
