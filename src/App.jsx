import './components/App.css'
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
// quando se tem o 'export default' pode retornar uma função anônima
// tendo o default pode fazer uma arrow function
// em caso de se ter apenas um parâmetro pode tirar os parênteses
// caso tenha um parâmetro apenas mais não for utilizado pode-se colocar um `_` (underline)
// se não tiver parâmentro colocar () vazios
// Na arrow function você pode tirar as chaves e retornar de forma implícita o conteúdo

export default (_) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#04 - Desafio Aleatório" color='#87CEEB'>
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color='#6495ED'>
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetros" color='#1E90FF'>
                <ComParametro 
                    titulo="Segundo Componente" 
                    aluno="Augusto" 
                    nota={9.6} 
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color='#4169E1'>
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);
