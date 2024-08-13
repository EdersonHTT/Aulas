
/*1)*/

document.getElementById("botao").addEventListener("click", function (){
    function algo (a){
        for(x of a){
            if(x === a[0]){     
                frase = x
            } else {
                frase += " " + x
            }
        }
        return frase
    }
    
    let frase
    
    let a = ["bem", "vindo", "ao", "Js"]
    
    alert(algo(a))
})


/*2)*/

var nome = "eder"
let idede = 16
const curso = "FrontEnd"

console.log(`Nome: ${nome}\nIdade: ${idede}\nCurso: ${curso}`)

/*2.2)*/

let aluno = {
    nome: "eder",
    idede: 16,
    curso: "FrontEnd",
};

let aluno2 = [];

aluno2.push(aluno);

console.log(aluno2);

/*2.3)*/

let nada;

console.log(nada);

let nada2 = null;

console.log(nada2);


/*3.1)*/

function conta (n1, n2){
    return n1 + n2
}

let a = Math.floor(Math.random()*100)
let c = Math.floor(Math.random()*100)

console.log(conta(a , c))

/*3.1)*/

function conta2 (n1, n2){
    console.log(n1, n2)
    return n1 % n2 === 0
}

let a2 = Math.floor(Math.random()*100) + 1

console.log(conta2(a2 , 4))

/*3.1)*/

let a3= Math.floor(Math.random()*100)

console.log(a3 > 10 && a3 < 20)