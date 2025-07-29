import React, { useEffect, useRef } from 'react'
import './Chatpage.css'
import NewPrompt from '../../Components/newPrompt/newPrompt'

const Chatpage = () => {
  
  return (
    <div className='chatPage'>
      chatpath
      <div className="waper">
        <div className="chat">
          <div className="message">Text Message from ai</div>
         <div className="message user">Text Message from user To make the scrollbar blend with the dark background, you'll need to style it using CSS pseudo-elements. Since you're using a dark theme, we can set the scrollbar track and thumb to match your background color</div>
         <div className="message">Text Message from ai</div>     
           <div className="message user">Text Message from user</div>
           <div className="message">Text Message from ai</div>
         <div className="message user">Text Message from user</div>
         <div className="message">Text Message from ai</div>     
           <div className="message user">Text Message from user</div>
           <div className="message">Text Message from ai</div>
         <div className="message user">Text Message from user</div>
         <div className="message">Text Message from ai</div>     
           <div className="message user">Text Message from user</div>
            <div className="message">Text Message from ai</div>
         <div className="message user">Text Message from user</div>
         <div className="message">Text Message from ai</div>     
           <div className="message user">Text Message from user</div>
           <div className="message">Text Message from ai</div>
         <div className="message user">Text Message from user</div>
         <div className="message">Text Message from ai</div>     
           <div className="message user">Text Message from user</div>
           <div className="message">Text Message from ai</div>
         <div className="message user">Text Message from user</div>
         <div className="message">Text Message from ai</div>     
           <div className="message user">Text Message from user</div>
           <NewPrompt/>
           



        </div>
      </div>
    </div>
  )
}

export default Chatpage
