import React from 'react'
import './Signinpage.css'
import { SignIn } from '@clerk/clerk-react'

const Signinpage = () => {
  return (
    <div className='signInPage'>
      <SignIn path="/sign-in" signInUrl="/sign-up"/>  
    </div>
  )
}

export default Signinpage
