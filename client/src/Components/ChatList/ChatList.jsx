import React from 'react'
import "./ChatList.css"
import { Link } from 'react-router-dom'

const ChatList = () => {
  return (
    <div className='chatlist'>
      <span className='title'>

        DASHBOARD
      </span>
      <Link to="/dashboard">Create a new chat</Link>
      <Link to="/">Explore AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className='title'>Recent Chats</span>

      <div className="list">
      <Link to="/"> My Chat Title</Link>
      <Link to="/">My Chat Title</Link>
      <Link to="/">My Chat Title</Link>
      <Link to="/">My Chat Title</Link>
      <Link to="/">My Chat Title</Link>
      <Link to="/">My Chat Title</Link>
      <Link to="/">My Chat Title</Link>
      <Link to="/">My Chat Title</Link>
      <Link to="/">My Chat Title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
            <span>Upgrade to AI Mf pro</span>
            <span>Get unlimited to all Features</span>
        </div>
      </div>


    </div>
  )
}

export default ChatList
