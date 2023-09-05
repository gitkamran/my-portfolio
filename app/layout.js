import './globals.css'

export const metadata = {
  title: 'Mohammad Kamran | Portfolio',
  description: 'Personal Website And Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir='rtl'>
      <body>
        {children}
      </body>
    </html>
  )
}
