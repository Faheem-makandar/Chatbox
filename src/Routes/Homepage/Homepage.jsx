import React, { useState } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Homepage = () => {
  const [typeingStatus,setTypingStatus] = useState("human1")
  return (
    <div className="homePage">
      <img src="/orbital.png" alt="" className="orbital" />

      <div className="left">
        <h1>AI Mf</h1>
        <h2>SuperChange your creativity and productivity</h2>
        <h3>This usually happens when you're using the Link component in your code</h3>
        <Link to="/dashboard">Get started</Link>
      </div>

      <div className="right">
        <div className="imgcontainer">
          <div className="bgcontainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="Bot" className="bot" />
          <div className="chat">
            <img src={typeingStatus==="human1" ? "/human1.jpeg": typeingStatus==="human2" ? "/human2.jpeg" :
              "bot.png"
            } alt="" />
          <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Human1:We produce food for Mice',
        2000, ()=>{
          setTypingStatus("bot")
        },
        'Bot:We produce food for Hamsters',
        2000,()=>{
          setTypingStatus("human2")
        },
        'Human2:We produce food for Guinea Pigs',
        2000,()=>{
          setTypingStatus("bot")
        },
        'Bot:We produce food for Chinchillas',
        2000,()=>{
          setTypingStatus("human1")
        },
      ]}
      wrapper="span"
      repeat={Infinity}
      cursor={true}
      omitDeletionAnimation={true}
     />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
