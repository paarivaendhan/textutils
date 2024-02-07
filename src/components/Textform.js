import React, {useState} from 'react'


export default function Textform(props) {
    const handleClick = ()=>{
        // console.log("Uppercase was clicked: "+text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleClickLower = ()=>{

      let newText = text.toLowerCase();
      setText(newText);
  }

    const handleCapitalizeClick = ()=>{
      let newText = text.replace(/\b[a-z]/g, function(match){
      return match = match.toUpperCase();
  
    });

    setText(newText);
  }

  const handleCopy = ()=>{
    let copyText = document.getElementById('myBox');

    copyText.select();
    navigator.clipboard.writeText(copyText.value)
    alert("Copied text: "+copyText.value)
    
  }

  const handleRemoveExtraSpace = ()=>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(' '));
  }



  const handleClearClick = ()=>{

    setText('');
}


    const handleOnChange = (event)=>{

        setText(event.target.value);
    }

  const [text, setText] = useState('');
//   text = "New text"; //Wrong way to change the state
//   setText("New text"); // Correct way to change the state
  
  return (
    <>
    <div>
        <h1 className={`text-${props.setTextColor}`}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className={`form-control text-${props.setTextColor} bg-${props.bgColor}`} value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter your text"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClickLower}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeClick}>Convert to Capitalize</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpace}>Remove extra space</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className={`text-${props.setTextColor} container my-2`}>
      <h3>Your text summary :</h3>
      <p><strong>{text.split(" ").filter((element)=>{ return element.length !==0}).length}</strong> words. <strong>{text.length}</strong> characters.</p>
      <p><strong>{0.008 * text.split(" ").filter((element)=>{ return element.length !==0}).length}</strong> minutes to read characters.</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Write something to preview the text..."}</p>
    </div>
    </>
  )
}
