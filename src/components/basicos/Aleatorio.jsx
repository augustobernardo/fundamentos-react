import React from "react";

export default (props) => {
    // pode-se usar dessa forma
    // ficando até melhor por usar melnos linhas
    const { min, max } = props;

    const numero = Math.floor(Math.random(min, max) * 10 + 1);

    return (
        <div>
            <h2>Número Aleatório</h2>
            <p>
                <strong>Valor Mínimo:</strong> {props.min}
            </p>
            <p>
                <strong>Valor Máximo:</strong> {props.max}
            </p>
            <p>
                <strong> Valor Escolhido: </strong> {numero}
            </p>
        </div>
    );
};
