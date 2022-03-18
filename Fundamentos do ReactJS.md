# Fundamentos do ReactJS

O ReactJS é single-page. Após a criação do aplicativo React, os arquivos necessário serão criados na pasta src.



## Exibindo uma string na tela

Importando o ReactDOM para renderizar coisas na tela.

```javascript
import ReactDOM from 'react-dom'

ReactDOM.render()
```



O método `render()` recebe dois parâmetros, o primeiro é o que se quer exibir na tela e o segundo será o elemento no qual se quer inserir esse conteúdo.



Ex: 

```javascript
ReactDOM.render('Olá React!!!')
```



Para que seja exibido na tela é preciso que seja pego o id da div que tem no arquivo HTML.

```javascript
// Usando apenas JavaScript puro
const el = document.getElementById('root')

// irá renderizar tudo que vier antes da constante el
ReactDOM.render('Olá React!!!', el)

/* Pode-se usar também uma outra forma*/
ReactDOM.render(
	'Olá React!!!',
    document.getElementById('root')
)
```



----



## Usando a sintaxe JSX

A sintaxe JSX é exatamente sobre usar tags HTML no JavaScript. Será feito uma conversão dinâmica para JavaScript tudo aquilo que for adicionado na div. Sempre que for usado o JSX é necessário importar o React

```react
import ReactDOM from 'react-dom'
import React from 'react'

// Nesse momento está sendo usado a sintaxe do JSX
ReactDOM.render(
	<div>Olá React!!!</div>,
	document.getElementById('root')
)
```



No JSX é possível colocar variáveis nas partes HTML usando um par de chaves para separar o código HTML do JavaScript. 

Ex:

```react
import ReactDOM from 'react-dom'
import React from 'react'

// Os '' não são usados pois a sintaxe do JSX não usa '' pois o javascript não 
// interpreta como um código JSX
const tag = <strong>Olá Mundo!!!</strong>

ReactDOM.render(
	<div>
        { tag }
    </div>,
	document.getElementById('root')
)
```

No código acima será exibido na tela a frase "**Olá Mundo!!!**" em negrito.



### Referenciando um arquivo CSS

Para importar o arquivo CSS será utilizado o `import` relativo

```react
import './index.css'
// caso esteja na mesma pasta que o index.js
```



----



## Primeiro componente

Pode-se criar os componentes na pasta src, porém para ficar mais organizado é melhor criar uma sub pasta dentro da pasta src. O nome do arquivo (componente) será colocado em letra maiúscula.



Criando uma função para exemplificar.

```react
function Primeiro() {
    return 'Primeiro Componente'
}
```

É necessário exportar esse componente para que o index.js tenha acesso, então é colocado um `export default` antes da function.

```react
export default function Primeiro() {
    // pode-se usar também uma função anônima
    return 'Primeiro Componente'
}
```



Após o componente ser exportado, no index.js terá que ser importado:

```react
import './index.css'
// O nome Primeiro pode ser mudado para qualquer um
// Não é necessário colocar .js no arquivo que está sendo importado ex:
// import Comp from './components/Primeiro'
import Primeiro from './components/Primeiro'

import ReactDOM from 'react-dom'
import React from 'react'

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
    </div>, 
    document.getElementById('root')
)
```



A função do primeiro componente pode retornar um trecho jsx  de HTML, não se esquecendo de importar o react.

```react
import React from "react"

export default function Primeiro() {
    return <div>
        <h2>Primeiro Componente</h2>
    </div>
}
```

Quando se tem múltiplos elementos é mais comum envolve-los em um par de parênteses.

```react
import React from "react"

export default function Primeiro() {
    return (
    	 <div>
        <h2>Primeiro Componente</h2>
    </div>
    )
}

// Uma outra ideia de utilização
export default function Primeiro() {
	// mesmo tipo de constante que foi criado na anotação mais no início
    const msg = 'Seja bem vindo(a)!!'

    return ( 
        // É comum quanfo se tem múltiplos elementos envolve-los em um par de parênteses
        <div>
            <h2>Primeiro Componente</h2>
            <p>{ msg }</p>
        </div>
    )
}
```



### Componentes com Propriedades (Componentes Funcionais)

Componentes que são baseados em função. É bom padronizar todos os componentes para .jsx, a única mudança que ocorre é da IDE te ajudar ao completar linhas de código jsx e não js.



Os parâmetros são passados diretamente nos componentes, que são tags HTML. 



Código do componente ComParametro.jsx.

```react
import React from "react"
// props é um parâmetro (qualquer nome pode ser colocado)
export default function ComParametro(props){
    // pode-se usar desta forma também
    //const sub = props.subtitulo 
  	return (
        <div>
            <h2>{ props.titulo }</h2>
            <h3>{ sub }</h3>
        </div>
    )
    )
}
```



Código do index.js

```react
import './index.css'
import Primeiro from './components/Primeiro'
import ComParametro from './components/Comparametro'

import ReactDOM from 'react-dom'
import React from 'react'

ReactDOM.render(
    <div id='app'>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Segundo Componente" 
            subtitulo="Muito legal" />
    </div>, 
    document.getElementById('root')
)
```

Os parâmetros `titulo` e `subtitulo` são criados no arquivo **ComParametro.jsx** estão sendo definidos diretamente no componente `<ComParametro />` e sendo passados como `props` para a função do **ComParametro.jsx**.



Mudando algumas coisas dos arquivos citados a cima.



**ComParametro.jsx**

```react
import React from "react"

export default function ComParametro(props){
    // utilizando um if ternário
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                <strong>{ props.aluno } </strong>
                tem nota 
                <strong> { props.nota } </strong>
                e está
                <strong> { status }</strong>!
            </p>
        </div>
    )
}
```



**index.js**

```react
import './index.css'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'

import ReactDOM  from "react-dom";
import React from "react"

const tag = <strong>Olá React!!!</strong>

ReactDOM.render(
    <div id='app'>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Segundo Componente"
            aluno="Augusto" 
            nota="9.6"
        />
    </div>, 
    document.getElementById('root')
)
```

A propriedade `nota` pode ser passada tanto como string, interpretando os números pasados como uma string, quanto pode ser passada como número, sendo adicionado um par de chaves entre o valor `nota={9.6}` e assim será interpretado como um number.



O resultado dos códigos acima será uma exibição da frase "Segundo Componente", logo após o nome do aluno, a nota do aluno e após a verificação do `if` será exibido ou 'Aprovado' ou 'Reprovado' .



### Propriedades que são somente leitura

Um erro muito comum é achar que você consegue alterar os valores que foram passados para um componente. As propriedades passadas como parâmetro não é possível mudar pois são somente para leituras. Só é possível alterar um valor usando um processamento antes, por exemplo:

```react
const notaInt = Math.ceil(props.nota)
```



A propriedade `nota` não será alterada, mas a variável `notaInt` terá um um novo valor, porém a propriedade `nota` não será alterada. Para haver uma mudança pode-se usar os `states`.





### React Fragment

Componentes ou componentes jsx adjacentes. Como por exemplo no código abaixo, caso a tag `<div>` que estava envolvendo os componentes for removida será exibido este erro.

```react
ReactDOM.render(
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Segundo Componente"
            aluno="Augusto" 
            nota="9.6"
        />, 
    document.getElementById('root')
)
```

Para resolver esse erro é necessário criar um arquivo jsx, que seus componentes sejam envolvidos por `React.Fragment` ou usando `<> </>`

```react
import react from 'react'

export default function Fragmento(props){
    return (
    	<React.Fragment>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!!</p>
        </React.Fragment>
    )
}
```

Neste código será retornado apenas o `h2` e o `p` sem uma `div`. Quando se usa o `React.Fragment` é possível usar propriedades, mas quando se usa `<> </>` não tem como colocar propriedades, apenas usando o `React.Fragment`.







### Componente App

A forma mais enxuta de criar um componente funcional é usando uma arrow function `() => {}`. Criando um arquivo na pasta src chamado de App.jsx é colocado tudo que tem que ser renderizado no app. Fazendo com que não precisemos mexer no index.js mais, apenas no App.jsx.



No **index.js** vai ficar assim

```
import App from './App'

ReactDOM.render(
        <App />, 
    document.getElementById('root')
)
```



E no arquivo **App.jsx** ficará assim

```
import React from "react";

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import Fragmento from './components/Fragmento';


export default function App(props) {
    return (
        <div id='app'>
            <h1>Fundamentos React</h1>
            <Fragmento />
            <ComParametro 
                titulo="Segundo Componente"
                aluno="Augusto" 
                nota={9.6}
            />
            <Primeiro></Primeiro>
        </div>
    )
}
```

> Todas as importações que existiam no **index.js** que eram de componentes são retirados e passados para o arquivo **App.jsx**. No index.js ficará apenas as importações do React, do ReactDOM e do App.jsx



#### Funções anônimas

Só podem ser retornadas se tiverem `export default` antes, por exemplo

```react
export default function(props) {
	return (
		<>
			<h1>Pode ser uma função anônima!!</h1>
		</>
	)
}
```

Podemos também tirar a palavra `function` e vai virar uma arrow function, por exemplo

```
export default (props) => {
	return (
		<>
			<h1>Pode ser uma arrow function também</h1>
		</>
	)
}
```

>  Na arrow function você pode tirar as chaves e retornar de forma implícita o conteúdo, lembrando de retirar também o `return()`. 
>
> 
>
> Caso tenha apenas um parâmetro pode-se tirar os parênteses.
>
>  
>
>  Caso não tenha parâmetro, pode colocar um par de parênteses vazios, simbolizando que não haverá nenhum parâmetro sendo passado
>
>  
>
> Caso tenha um parâmetro apenas mais não for utilizado pode-se colocar um `_` (underline)

A forma mais reduzida que se pode chegar é aplicando esses detalhes, ficando como o código abaixo

```react
export default _ => 
    <div id='app'>
        <h1>Fundamentos React</h1>
        <Fragmento />
        <ComParametro 
            titulo="Segundo Componente"
            aluno="Augusto" 
            nota={9.6}
        />
        <Primeiro></Primeiro>
    </div>
```



-----



## Component Card

Criando uma pasta dentro do components chamada de "Card.jsx", dentro dela criei um arquivo com o nome de **Card.jsx**. Esse componente vai importar um arquivo css, o **Card.css**.



#### ClassName

No jsx não se pode colocar uma `class='nomeDaClasse'` pois a palavra "class" é reservada do JavaScript, então é utilizado o `className=""`. Criando cards para guardar os exercícios.



#### Props children

Dentro do Card você consegue acessar os elementos que estão dentro de outro componente a partir do `props.children`. Exemplo no código abaixo



No **App.jsx**

```react

export default (_) => (
    <div id="app">
        <h1>Fundamentos React</h1>

        <Card titulo="Desafio Aleatório">
            <Aleatorio min={1} max={10} />
        </Card>

        <h1>Número Aleatório</h1>
        
        <Fragmento />
        <ComParametro titulo="Segundo Componente" aluno="Augusto" nota={9.6} />
        <Primeiro></Primeiro>
    </div>
);
```



No **Card.jsx**

```react
import "./Card.css";
import React from "react";

export default (props) => {
    return (
        <div className="Card">
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
};
```

Usando o `props.children` é passado tudo que estiver dentro do componente Card.



---



### Passando cores pelos componentes

Como as cores estão sendo passadas pelos componentes são interpretadas como **props**. Essa forma de passar cores é dinâmica. Passa para o componente uma propriedade chamada de `style={}` . Exemplo abaixo



**App.jsx**

```react
<Card titulo="#04 - Desafio Aleatório" color='#080'></Card>
```



**Card.jsx**

```react
export default (props) => {
    // const = {} == objeto
    const cardStyle = {
        backgroundColor: props.color || '#000',
       // caso não consiga pegar o color vai mostrar a cor a partir do || como cor padrão
       borderColor: props.color ||'#f00'
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
};
```

Pode-se passar diretamente no componente porém será necessário o uso de mais um par de chaves, `style={{}}` o segundo par de chaves será para a criação do objeto, podendo quebrar a linha para deixar mais organizado.

```react
style={{
	backgroundColor: props.color || '#000',
	borderColor: props.color ||'#f00'
}}
```





































# Resumindo Conceitos

- Os valores passados pelos 'props' são imutáveis. Ele é somente leitura.
- Nos componentes é possível passar propriedades do pai p/ o filho.
- O filho renderiza as propriedades do pai com props.children
- O pai renderiza o filho importando-o
- É possível passar um propriedade pro filho de forma indireta, ou seja, no momento da criação do componente pai, repassar a propriedade pro filho.
- Comunicação direta é quando o Pai passa informações pro filho.
- Comunicação indireta é quando o Filho pega informações do pai.
- O pai sempre tem uma referência do filho.
- Os componentes possuem um estado. Componentes baseados em classe e componentes baseados em funções.
- A comunicação indireta consiste em o Pai passar uma função pro filho, e este invocar a função.
- Mudamos estados a partir de eventos
- Existem discussões sobre o uso de "this" no Javascript
- Podemos ter componentes baseados em classe ou componentes baseados em função
- Existem os componentes com estado e os sem estado
- Quanto mais componentes sem estado, melhor, pois é mais fácil de ser usado
