import React, { useEffect, useRef, useState } from 'react'
import './newPrompt.css'
import Upload from '../Upload/Upload'
import { IKImage } from 'imagekitio-react'
import model from '../../lib/gemini'
import Markdown from 'react-markdown'

const newPrompt = () => {
  const [question,setQuestions] = useState("")
  const [answer,setAnswer] = useState("")
  
  const [img, setImg] = useState({
    isloading: false,
    error:"",
    dbdata:{},
    aiData:{}
  })

  const endRef = useRef(null);

const add = async (text) => {
  setQuestions(text);
  const result = await model.generateContent(text); // ← use text, not prompt
  const response = await result.response;
  setAnswer(response.text()); // Might need .text instead of text()
};


  useEffect (()=>{
    endRef.current.scrollIntoView({behavior:"smooth"})

  },[question, answer, img.dbdata]);

  const handleSubmit = async (e) => {
    e.preventDefault();
     const text = e.target.text.value;
     if (!text) return;
     add(text)
  }

  return (
    <div className='newPrompt'>
      {img.isloading && <div className="loading">Loading...</div>}
{img.dbdata?.filePath && (
  <IKImage 
    urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
    path={img.dbdata.filePath}
    transformation={[{width:380}]}
    className="uploaded-image"
  />
)}
<div className="chat-messages">
  {question && <div className='message user'>{question}</div>}
  {answer && <div className='message ai'><Markdown>{answer}</Markdown></div>}
</div>

        <div className="endChat" ref={endRef}></div>
        
       <form className="newForm" onSubmit={handleSubmit}> 

        <Upload setImg={setImg} />
         <input id="file" type="file" multiple={false} hidden />
        <input type="text"  name="text" placeholder="Ask anything" />
        <button>
            <img src="/arrow.png" alt="" />
        </button>
      </form>
    </div>
  )
}

export default newPrompt
