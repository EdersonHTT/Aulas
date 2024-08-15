// 1
document.body.style.width = "100%"
document.body.style.height = "100vh"
document.body.style.display = "flex"
document.body.style.alignItems = "center"
document.body.style.justifyContent = "center"

function lista(){
    itens.push(document.createElement("li"))

    for(let x in itens){
        ul.appendChild(itens[x])
        itens[x].textContent = input.value
    }
}

function apagarLista(){
    ul.removeChild(itens[itens.length-1])
    itens.pop(itens.length-1)
}

let itens = []

let input = document.createElement("input")
let botao1 = document.createElement("button")
let botao2 = document.createElement("button")
let ul = document.createElement("ul")

document.getElementById("div1").appendChild(input)
document.getElementById("div1").appendChild(botao1)
document.getElementById("div1").appendChild(botao2)
document.getElementById("div1").appendChild(ul)

botao1.textContent = "Criar"
botao2.textContent = "Apagar"

botao1.addEventListener("click", lista)
botao2.addEventListener("click", apagarLista)

// 2

let botao3 = document.createElement("button")
let botao4 = document.createElement("button")

document.getElementById("div2").appendChild(botao3)
document.getElementById("div2").appendChild(botao4)

botao3.textContent = "Aparecer"
botao4.textContent = "Apagar"

let p = document.createElement("p")

document.getElementById("div2").appendChild(p)

p.textContent = "Olá Mundo"

botao3.addEventListener("click", ()=> p.style.display = "block")
botao4.addEventListener("click", ()=> p.style.display = "none")

// 3

let botao5 = document.createElement("button")
let botao6 = document.createElement("button")

document.getElementById("div3").appendChild(botao5)
document.getElementById("div3").appendChild(botao6)

botao5.textContent = "Somar"
botao6.textContent = "Subtrair"

let p2 = document.createElement("p")

document.getElementById("div3").appendChild(p2)

botao5.addEventListener("click", ()=> p2.textContent = Number(p2.textContent) + 1)
botao6.addEventListener("click", ()=> p2.textContent = Number(p2.textContent) - 1)





