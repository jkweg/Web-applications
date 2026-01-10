import { useEffect, useState } from "react";

function Odliczanie(){

    const [licznik,setLicznik] = useState(15);
    const [czyChodzi,setCzyChodzi] = useState(false);


    useEffect(() => {

    let interval = null;

    if (czyChodzi && licznik >0){

        interval = setInterval( () => {

            setLicznik( l => Math.max(l - 0.1,0));
        },100);

    }
    else
        {
            clearInterval(interval);
        }
    
    return () => clearInterval(interval);

    } , [czyChodzi,licznik]);

    const buttonText = () => {

        if(licznik <= 0){
            return "Odliczanie zakonczone";
        }
        return czyChodzi ? "Stop" : "Start";

    };

    function handleClick(){

        setCzyChodzi(!czyChodzi);
    }

    return(

        <>
        
            <p> {licznik.toFixed(1)} sekund </p>

            <button disabled={licznik <= 0} onClick={handleClick}> {buttonText()} </button>


        
        </>
    );

}

export default Odliczanie