/*1*/
/*
function verificaIdade(idade){
    if(idade < 18){
        console.log("menor de idade");
    }else if(idade <= 65){
        console.log("adulto");
    }else{
        console.log("velho");
    }
}

verificaIdade(Number(prompt("Sua Idade")))

/*2*/

function converteNota(nota){
    switch(nota){
        case 1:
            console.log("A");
        break
        case 2:
            console.log("B");
        break
        case 3:
            console.log("C");
        break
        case 4:
            console.log("D");
        break
        case 5:
            console.log("E");
        break
        default:
            console.log("Coloque um numero")
    }
}

converteNota(Math.floor(Math.random()*6))

// 3 //

function tabuada(nu){
    while(nu >= 0){  
        
        console.log(nu+"---")
        nu-=1
    }
    return
}

tabuada(2)

// 4 //

function calculadora(a,x,b){
    switch(x){
        case "+":
            console.log(a + b)
        break
        case  "-":
            console.log(a - b)
        break
        case  "x":
            console.log(a * b)
        break
        case  "/":
            console.log(a / b)
        break
        default:
            console.log("uma conta")
    }
}

calculadora(5, "-", 2)

// 4.1 //

let a = (x, i) => {
    return `${x} + ${i} = ` + Number(x+i) 
}

console.log(a(1, 5))