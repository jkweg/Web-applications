import { useEffect, useState } from "react";


function Licznik(){

    const [licznik,setLicznik] = useState( () => {

        const savedLicznik = localStorage.getItem("ile");
        return savedLicznik ? Number(savedLicznik) : 0;
    }
    );

    useEffect(() => {

        localStorage.setItem("ile",licznik);

    },[licznik]);


    const zwiekszLicznik = () => setLicznik(l => l + 1);

    function zerujLicznik(){
        
        setLicznik(0);
    }

    return(

        <>  
            <div className="licznik">

            <p> {licznik} </p>
            <button onClick={zwiekszLicznik}>
                Dodaj
            </button>

            <button onClick={zerujLicznik}>Zeruj</button>
            
            </div>
           
        </>
    );

}

export default Licznik

