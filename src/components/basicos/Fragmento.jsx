import React from "react";
/* 
    Pode ser usado React.Fragment ou apenas <> </>

    Ao usar <> </> não se consegue colocar propriedades, apenas copm o React.Fragment
*/
// será exportado todo o conteúdo porém fora de uma div

export default function Fragmento(props) {
    return (
        <>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!!</p>
        </>
    );
}
