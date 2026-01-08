import { useState } from "react";

function Dodawanie({dodaj}){

    const [imie,setImie] = useState("");
    const [nazwisko,setNazwisko] = useState("");
    const [rocznik,setRocznik] = useState();

    function handleImieChange(event){
        setImie(event.target.value)
    }

    function handleNazwiskoChange(event){
        setNazwisko(event.target.value);
    }

    function handleRocznikChange(event){
        setRocznik(event.target.value)
    }

    function sprawdzenie(){
        if(imie != "" && nazwisko != "" && rocznik){
            return false
        }
        else{
            return true
        }
    }

    function handleClick(){

        const nowyStudent = {imie , nazwisko , rocznik}

        setImie("");
        setNazwisko("");
        setRocznik("");

        dodaj(nowyStudent);

    }


    return(
        <>
        
        <label> Imie: </label>
        <input value={imie} onChange={handleImieChange}/> <br /> <br />

        <label> Nazwisko: </label>
        <input value={nazwisko} onChange={handleNazwiskoChange}/> <br /> <br />

        <label> Rocznik: </label>
        <input value={rocznik} onChange={handleRocznikChange} type="number"/> <br /> <br />

        <button disabled={sprawdzenie()} onClick={handleClick}>
            DODAJ
        </button>

        

        </>
        
    );

}

export default Dodawanie