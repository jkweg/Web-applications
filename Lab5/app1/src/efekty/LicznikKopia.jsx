import { useEffect, useState } from "react"

function LicznikKopia(){

    const [licznik,dodaj] = useState(0);

    const zwiekszLicznik = () => dodaj(licznik => licznik + 1);

    useEffect(() => {

        console.log("Hello world");

    },[]);

    useEffect(() => {

        console.log(`Licznik zwiekszyl sie do ${licznik}`);

    },[licznik]);



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

export default LicznikKopia