import Produkt from "./produkt";

function Koszyk(){

    return(

        <>
            <div className="koszyk">

                <Produkt name="jablko" />
                <Produkt name="gruszka" />
                <Produkt name="pomarancza" />
                <Produkt name="mandarynka" />
                <Produkt name="banan" />

            </div>
            
        </>
    );
}

export default Koszyk