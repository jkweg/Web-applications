
import Produkt from "./produkt";

function Nowykoszyk(){

    const Produkty = ["jablko","gruszka" , "pomarancza" , "mandarynka","banan"];


    return(
        <div className="koszyk">
            {Produkty.map(produkt => <Produkt name={produkt} />)}
        </div>
        
    );
}

export default Nowykoszyk