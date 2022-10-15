import React, { useState } from 'react';


export default function Textform(props) {
    const handleUpCase=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleloCase=()=>{
      let newtext=text.toLowerCase();
      setText(newtext)
  }
  const handlecopy=()=>{
    let newtext=document.getElementById("exampleFormControlTextarea1");
    newtext.select();
    navigator.clipboard.writeText(newtext.value); 
    
}
const handlespace=()=>{
  let newtext=text.split(/[ ]+/);
 setText(newtext.join(" "))
}
  const handlecleat=()=>{
    
    setText(' ')
}

    const handleOnChange=(event)=>{
        
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
      <div className="conatiner" >
      
<div className="mb-3"  style={{backgroundColor:props.mode==='dark'?'#0a344d':'white',color:props.mode==='dark'?'white':'#0a344d'}}>
  <h1>Enter your text..</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#0a344d':'white',color:props.mode==='dark'?'white':'#0a344d'}}id="exampleFormControlTextarea1" rows="6 "></textarea>
  <button className='btn btn-primary my-3' onClick={handleUpCase}>convert to uppercase</button>
  <button className='btn btn-primary my-3 mx-3' onClick={handleloCase}>convert to lowercase</button>
  <button className='btn btn-primary my-3 ' onClick={handlecleat}>clear text</button>
  <button className='btn btn-primary my-3 mx-3 ' onClick={handlecopy}>copy text</button>
  <button className='btn btn-primary my-3 ' onClick={handlespace}>remove extra spaces</button>
</div>
     </div>
      <div className="container" style={{backgroundColor:props.mode==='dark'?'#0a344d':'white',color:props.mode==='dark'?'white':'#0a344d'}}>
      <h2>your text summary</h2>
       <p>{text.split(" ").length}words  {text.length}characters </p>
       <p>{0.008*text.split(" ").length}mins to read</p>
       <h3>preview..</h3>
       <p>{text.length>0?text:"enter text to preview it"}</p>
       </div>
       
    </>
  )
}


