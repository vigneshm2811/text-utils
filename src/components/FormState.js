import React, { useState } from 'react'


export default function FormState(props) {

    const [text, setText] = useState("")
    const upperCase = () => {
        // let a =text.toUpperCase()
        console.log(text)
        setText(text.toUpperCase())
        props.showAlert("Converted to Upper Case","success")
    }
    const LowerCase = () => {
        // let a =text.toUpperCase()
        console.log(text)
        setText(text.toLowerCase())
        props.showAlert("Converted to Lower Case","success")

    }
    const handelOnchange = (event) => {
        setText(event.target.value)

    }
    const copyClipBoard = ()=> {
        navigator.clipboard.writeText(text)
        props.showAlert("text Copied to Clip board","success")

    }
    const clearText = ()=> {
        setText("")
        props.showAlert("text was Cleared","success")

    }
    // setText("hello")
    return (
        <div className="container" style={props.mode} {...props.showAlert}>
            <div className="mt-5 w-75 mx-auto">
                <label htmlFor="text" className="form-label">Text Operations will Perform Here</label>

                <textarea className="form-control" id="text" rows="6" value={text} onChange={handelOnchange}  >
                </textarea>
                <button className="btn btn-primary mt-3 mx-2" onClick={upperCase}>UpperCase</button>
                <button className="btn btn-primary mt-3 mx-2" onClick={LowerCase}>LowerCase</button>
                <button className="btn btn-danger mt-3 mx-2" onClick={clearText}>clear</button>
                <button className="btn btn-danger mt-3 mx-2" onClick={copyClipBoard}>Copy</button>
            </div>
            <div className='mx-auto w-75 mt-3'>
                <h3>Summary of the ParaGraph</h3>
                <p>Total {text.length} Charcters  and  {text.split(" ").length} Words</p>
                <p>Time to Read words {(text.split(" ").length)*0.08} min</p>
            </div>

            <div className='w-75 mx-auto mt-3'>
                <h4>Text Preview</h4>

                <p className='border shadow p-3' style={{minHeight:"200px"}}>{text}</p>
                
            </div>
        </div>
    )
}
