import { useEffect, useState } from "react"
import Komentarz from "./Komentarz";

function Komentarze(){

    const [komentarze,setKomentarze] = useState([]);

    useEffect(() => {

        fetch('https://dummyjson.com/comments')
        .then(res => res.json())
        .then(data => setKomentarze(data.comments));
    },[]);

    return(
        <div className="Komentarze">

            {komentarze.map(k => (

                <Komentarz id={k.id} 
                body={k.body}
                postId={k.postId}
                likes={k.likes}
                user={k.user}
                />

            ))}
        </div>
    );
}

export default Komentarze