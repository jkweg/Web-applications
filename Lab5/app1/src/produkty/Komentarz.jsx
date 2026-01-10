import { useState } from "react";

function Komentarz({ id, body, postId, likes, user}){

    const [lajki,setLajki] = useState(likes);
    let newId = id;


    function lapkaWGore(){

        setLajki(l => l + 1);
    }

    function lapkaWDol(){

        setLajki(l => l - 1);
    }

    return(

        <>

            <div className="komentarz">


                <div className="ajdi">

                    <p> PostID: {postId} | user: {user.username} ({user.fullName})</p>

                </div>


                <div className="zawartosc">
                
                    <p>{body}</p>

                </div>

                <div className="lajkii">
                    
                    <p> {lajki } </p>
                    <button className="lajk" onClick={lapkaWGore}>👍</button>
                    <button className="lajk" onClick={lapkaWDol} >👎</button>

                </div>

            </div>
        
        </>
    );
}

export default Komentarz