import React from "react";

// exatamente o que vai ser passado pro pops é o que foi colocado como propriedades no componente no index.js
export default function ComParametro(props) {
    // pode-se utilizar desta forma também
    // const sub = props.subtitulo

    // usando um if ternário
    const status = props.nota >= 7 ? "Aprovado" : "Reprovado";

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno} </strong>
                tem nota
                <strong> {props.nota} </strong>e está
                <strong> {status}</strong>!
            </p>
        </div>
    );
}
