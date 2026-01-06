import { useState } from "react"

function Licznik(){

    const [licznik,dodaj] = useState(0);

    const zwiekszLicznik = () => dodaj(licznik => licznik + 1);

    return(

        <>  
            <div className="licznik">

            <p> {licznik} </p>
            <button onClick={zwiekszLicznik}>
                Dodaj
            </button>
            
            </div>
           
        </>
    );
}

export default Licznik