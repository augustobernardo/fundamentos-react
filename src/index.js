import './index.css'
import ReactDOM  from "react-dom";
import App from './App';

// Pegando o elemento do HTML para colocar no JS
//const el = document.getElementById('root')

const tag = <strong>Olá React!!!</strong>

/* colocando o par de chaves em uma propriedade transforma ela em número */


// Esse método recebe dois parâmetros, o primeiro é o que se quer exibir na tela
// O segundo será o elemento no qual se quer inserir esse conteúdo.
ReactDOM.render(
    <App />,
    document.getElementById('root')
    //pode-se usar dessa forma também
)
// Ele irá renderizar na tela o que for colocado antes

