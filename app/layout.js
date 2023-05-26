import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Providers from './components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fit Social',
  description: 'A platform for sports and fitness community ',

  
}

export default function RootLayout({ children }) {
  return (
    /* header */
    

    /* nav */ 

    /* searchBox */ 

    /*Footer */ 
    
    <html lang="en">
    
      <body>

      <Providers >
      
      

        <Header />

        {children}
      </Providers>
        </body>
    </html>
  )
}
