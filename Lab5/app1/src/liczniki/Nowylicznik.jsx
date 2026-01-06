import { useState } from "react";
import Przycisk from "./Przycisk";

function Nowylicznik(){

    const [licznik,dodaj] = useState(0);

    const zwiekszLicznik = () => dodaj(licznik => licznik + 1);

    return(
            <>
            <div className="licznik">

                <p>{licznik}</p>
                <Przycisk f = {zwiekszLicznik} />

            </div>
            

            </>
            
    );
}

export default Nowylicznik