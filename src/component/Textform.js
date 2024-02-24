import React, {useState} from 'react'

export default function (props) {
    const [text, setText] = useState("");
    // text="enter text here"; // wrong way to change the state
    // setText = ("enter text here"); // correct way to change the state
    const handleUpClick = ()=>{
    // console.log("upercase was clicked: "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!","success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!","success");
    }
    const handleClear = ()=>{
        let newText = ('');
        setText(newText);
        props.showAlert("textfield has been cleared!","warning");
    }
    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
        }
    const handleCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard!","info");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra spaces has been removed!","info");
    }
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-info mx-3" onClick={handleLowClick}>Convert To Lowercase</button>
            <button className="btn btn-danger mx-2" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-warning mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>your text summary is here</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p><b>{0.008 * text.split(" ").length}</b> minutes time has been taken to read</p>
        <h4>Preview Of Text</h4>
        <p>{text.length>0?text:"Enter your text to preview it here"}</p>
    </div>
    </>
  )
}
