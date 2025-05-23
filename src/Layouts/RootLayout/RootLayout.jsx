import React from 'react'
import './RootLayout.css'
import { Outlet , Link } from 'react-router-dom'
import logo from '../../../public/logo.png'
import { ClerkProvider } from '@clerk/clerk-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
    <div className='rootLayout'>
      <header> 
        <Link to="/" className='logo'><img src={logo} alt="" />
        <span>AI MF</span>
            </Link>
            <div className="user">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
    </ClerkProvider>
  )
}

export default RootLayout
