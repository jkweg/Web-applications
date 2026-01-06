import { useState } from "react"

function Haslo(){

    const [haslo1,setHaslo1] = useState("");
    const [haslo2,setHaslo2] = useState("");

    function handleHaslo1Change(event){
        setHaslo1(event.target.value);
        
    }

    function handleHaslo2Change(event){
        setHaslo2(event.target.value);
       
    }
    let text = "";

    if(haslo1 == "" && haslo2 == ""){
        text = "Prosze wprowadzic haslo"
    }
    else if(haslo1 != haslo2){
        text="Nie zgadza sie"
    }
    else{
        text = ""
    }

    return(

        <>
        
        <p>Haslo: </p>
        <input value={haslo1} onChange={handleHaslo1Change}/>
            
        <p>Powtorz haslo: </p>
        <input value={haslo2} onChange={handleHaslo2Change}/>
        

        <div>

            <p>{text}</p>

        </div>
        </>

    );

}

export default Haslo