import "./Card.css";
import React from "react";

export default (props) => {
    // const = {} == objeto
    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color ||'#F00'
    }

    return (
        // pode colocar a const style diretamente no componente abrindo mais um par de chaves -- style={{pode quebrar a linha aqui}}
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
};
