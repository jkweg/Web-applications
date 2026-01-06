
function Przycisk(props){

    const funkcja = props.f;

    return (
        <button onClick={funkcja}>
            Dodaj
        </button>
    );
}

export default Przycisk