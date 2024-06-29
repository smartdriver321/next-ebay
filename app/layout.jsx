import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './globals.css'

export const metadata = {
  title: 'Next-Ebay',
  description: 'Ebay Clone Marketplace',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  )
}
