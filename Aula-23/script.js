//1

function texto() {
    if(document.getElementById("digite").value === ""){
        document.getElementById("texto").innerHTML = "Por favor inserir um texto"
    }else{
        document.getElementById("texto").innerHTML = document.getElementById("digite").value;
    }
    document.getElementById("digite").value = ""
}

document.getElementById('botao').addEventListener('click', texto);

// 2 

document.getElementById('verde').addEventListener("click", function(){
    document.getElementById("texto").style.color = "green"
})

document.getElementById('azul').addEventListener("click", function(){
    document.getElementById("texto").style.color = "blue"
})

document.getElementById('div').addEventListener("mouseover", ()=>{
    document.getElementById("div").style.backgroundColor = "blue"
})

document.getElementById('div').addEventListener("mouseleave", ()=>{
    document.getElementById("div").style.backgroundColor = "white"
})

// 6

document.getElementById("digite").addEventListener("input", ()=>{
        document.getElementById("contador").innerHTML = document.getElementById("digite").value.length
})