import { useState } from "react";

function Formularz(){
    
    const [text,setText] = useState("");
    
    function handleTextChange(event){
        setText(event.target.value);
    }
    return(
            <>
            
            
            <input value={text} onChange={handleTextChange}/>

            <div>

                <p> {text} </p>

            </div>

            </>

    );
}

export default Formularz