
function texto() {
    if(document.getElementById("texto").innerHTML.includes("Por favor insira um text") ){   
        document.getElementById("texto").innerHTML = ""
        document.getElementById("digite").value = ""
    }else if(document.getElementById("digite").value === ""){
        document.getElementById("texto").innerHTML = document.getElementById("digite").value;
    }else{
        document.getElementById("texto").innerHTML += document.getElementById("digite").value;
    }
    document.getElementById("digite").value = ""
}

document.getElementById('digite').addEventListener("input", texto);
