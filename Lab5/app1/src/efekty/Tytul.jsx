import { useEffect, useState } from "react";

function Tytul(){

    const [text,setText] = useState("");

    function handleTextChange(event){

        setText(event.target.value);

    }

    useEffect(() => {

        document.title = text;

    },[text]);

    return(

        <>
        
            <input value={text} onChange={handleTextChange}/>
            <p> {text} </p>
        </>
    );

}

export default Tytul