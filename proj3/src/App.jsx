import { useState } from "react";
import "./App.css";

function App() {
   
   const [text,setText] = useState("") 
   const [sentencecount,setSentenceCount] = useState(0)
   const [charactercount,setCharacterCount] = useState(0)

   const handletextchange = (e) => {
    const inputtext = e.target.value;
    setText(inputtext)

    const characters = inputtext.replace(/\s+/g, '');
    setCharacterCount(characters.length)

    const sentence = inputtext.trim().split(/(?<=[.!?])/g).filter(sentence => sentence.trim().length > 0);
    setSentenceCount(sentence.length)

   }


    const handleclear = () => {
      setText("")
      setSentenceCount(0)
      setCharacterCount(0)
    }
  return (
    <>
      <div className="container">
        <div className="right">
        <h2 className="heading">Result</h2>
            <p className="sentence">Sentence:{sentencecount}</p>
            <p className="characters">Characters:{charactercount}</p>
        </div>

        <div className="left">
        <textarea placeholder="Add your text here..."
        value={text}
        onChange={handletextchange}>
          {text}
        </textarea>

        </div>
          
      </div>
      <div>
      <button style={{margin:20, backgroundColor:"gray"}}  onClick={handleclear}>
            <span>Clear</span>
          </button>
      </div>
      
    </>
  );
}

export default App;
