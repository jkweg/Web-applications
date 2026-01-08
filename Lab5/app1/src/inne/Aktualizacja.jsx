import { useState } from "react";

function Aktualizacja(){

    const obj1 = {nazwa: "Pomidor" , cena:"50"}

    const [pomidor,setPomidor] = useState(obj1);

    const updatePomidor = () => {
        setPomidor(prevPomidor => ({...prevPomidor,  cena:100}))
    }

    function update2(){
        setPomidor(p => ({...p,cena:100}))
    }

    return(

        <>
        
        <p> Cena pomidora to: {pomidor.cena} </p>
        <button onClick={update2}> Zwieksz cene </button>
        </>

    );

}

export default Aktualizacja