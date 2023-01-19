import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Enter your text here")
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    let countChar = 0;
let countCons = 0;

    function handleChange(event) {
        setText(event.target.value)

    }

    function handleClick() {
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase", "success")

    }

    function handleClick2() {
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase", "success")

    }

    function handleVoClick() {
    for(let count=0; count<text.length; count++){

        if(text.charAt(count).match(/[aeiouAEIOU]/)){
            countChar++
            setCount(countChar)
        }
    } 
console.log("No of vowels are " + countChar);
props.showAlert("Vowels counted", "success")

    }


    function handleCoClick() {
        for(let count1=0; count1<text.length; count1++){
    
            if(text.charAt(count1).match(/[bcdfghjklmnpqrstvwxyz]/)){
                countCons++
                setCount1(countCons)
            }
        } 
    console.log("No of consonants are " + countCons);
    props.showAlert("Consonants counted", "success")

        }

    return (
        <>
        <div className="container" style={{color: props.mode==="dark"? "white":"black"
        
        }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">  
                <textarea onChange={handleChange} className="form-control" style={{backgroundColor: props.mode==="dark"? "grey":"white", color: props.mode==="dark"? "white":"black"}} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button onClick={handleClick} className="btn btn-primary mx-2">Convert to Uppercase</button>
            <button onClick={handleClick2} className="btn btn-primary mx-2">Convert to Uppercase</button>
            <button onClick={handleVoClick} className="btn btn-primary mx-2">Count no. of vowels </button>
            <button onClick={handleCoClick} className="btn btn-primary mx-2">Count no. of  constant</button>


        </div>

        <div className="container my-2" style={{color: props.mode==="dark"? "white":"black"}}>
            <h3>Text Summary</h3>
            <p>{text.split(' ').join('').length} words and {text.length} characters</p>
            <h3>{0.008 * text.split(" ").length} minutes to read</h3>
            <h3>Preview</h3>
            <p>{text.length>0?text:"To preview write something above"}</p>

            <p>{count} no of vowels</p>
            <p>{count1} no of copnsonants</p>
        </div>
        </>
    )
}
