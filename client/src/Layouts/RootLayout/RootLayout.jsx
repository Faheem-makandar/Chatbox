import React from 'react'
import './RootLayout.css'
import { Outlet , Link } from 'react-router-dom'
import logo from '../../../public/logo.png'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const RootLayout = () => {
  return (
    <div className='rootLayout'>
      <header> 
        <Link to="/" className='logo'>
          <img src={logo} alt="logo" />
          <span>AI MF</span>
        </Link>
        <div className="user">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
