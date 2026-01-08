
function Ternary(){

    let a = true;
    let b = false;



    return(
        
        <>
        
        <p>{a ? "Stwierdzenie a jest prawdziwe": "Stwierdzenie a jest falszywe"}</p>

        <p>{b ? "Stwierdzenie b jest prawdziwe": "Stwierdzenie b jest falszywe"}</p>
        
        </>
    );
}

export default Ternary