import { useState } from "react"

function Logowanie(){

    const [haslo1,setHaslo1] = useState("");
    const [haslo2,setHaslo2] = useState("");
    const [nazwa,setNazwa] = useState("");
    
    function handleHaslo1Change(event){
        setHaslo1(event.target.value);
            
    }
    
    function handleHaslo2Change(event){
        setHaslo2(event.target.value);
           
    }

    function handleNazwaChange(event){
        setNazwa(event.target.value);
    }

    function sprawdzHasla(){
        if(haslo1 == haslo2){
            alert("Zalogowano poprawnie");
        }
        else{
            alert("Hasla nie zgadzaja sie");
        }
    }

    let czyOk = true;
    
    if(haslo1 == "" || haslo2 == "" || nazwa == ""){
        czyOk = true;
    }
    else {
        czyOk = false;
    }
    
    return(
    
        <>
        
        <p>Nazwa uzytkownika</p>
        <input value={nazwa} onChange={handleNazwaChange}/>

        <p>Haslo: </p>
        <input value={haslo1} onChange={handleHaslo1Change}/>
                
        <p>Powtorz haslo: </p>
        <input value={haslo2} onChange={handleHaslo2Change}/>
        <br />
        <br />
        <button disabled={czyOk} onClick={sprawdzHasla}> LOGOWANIE </button>
            
         </>
    
    );

}

export default Logowanie