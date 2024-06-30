import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './globals.css'
import UserProvider from './context/user.js'
import CartProvider from './context/cart.js'

export const metadata = {
  title: 'Next-Ebay',
  description: 'Ebay Clone Marketplace',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ToastContainer />

        <UserProvider>
          <CartProvider>{children}</CartProvider>
        </UserProvider>
      </body>
    </html>
  )
}
