import React, { useEffect, useRef, useState } from 'react'
import './newPrompt.css'
import Upload from '../Upload/Upload'
import { IKImage } from 'imagekitio-react'
import model from '../../lib/gemini'

const newPrompt = () => {

  const [img, setImg] = useState({
    isloading: false,
    error:"",
    dbdata:{}
  })

  const endRef = useRef(null)

  useEffect (()=>{
    endRef.current.scrollIntoView({behavior:"smooth"})

  },[])

  const add = async () => {
    const prompt = "write a story about an AI and magic";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text;
    console.log(text);

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
        <div className="endChat" ref={endRef}></div>
      <button onClick={add} >TEST AI</button>
      <form className="newForm">
        <Upload setImg={setImg} />
         <input id="file" type="file" multiple={false} hidden />
        <input type="text" placeholder="Ask anything" />
        <button>
            <img src="/arrow.png" alt="" />
        </button>
      </form>
    </div>
  )
}

export default newPrompt
