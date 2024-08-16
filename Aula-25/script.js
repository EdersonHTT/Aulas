let titulo = document.getElementById("titulo")
let ano = document.getElementById("ano")
let imagem = document.getElementById("imagem")

const chave = "cde0095a"

fetch(`http://www.omdbapi.com/?t=Shrek&apikey=${chave}`)

    .then(response => response.json())
    .then(data => {
        document.getElementById("titulo").textContent = `${data.Title}`
        document.getElementById("ano").textContent = `${data.Year}`
        document.getElementById("imagem").src = data.Poster
    })