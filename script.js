//Criar variaveis

//let nome = "Samuel Santos"
let idade = 45
let idadeEsposa = "45"
const anoNascimento = 1977

// decisão

if (idade === idadeEsposa) {
    //  alert("Igual...")
} else {
    //  alert("Cada um no seu quadrado!")
}

// Lendo informações do HTML

const titulo = document.getElementById("titulo")
const resultado = document.getElementById("resultado")

const nome = document.getElementById("nome")
const email = document.getElementById("email")

titulo.textContent = "Mudei o titulo!! Eu posso..."

function mostrarResultado() {
    titulo.style.color = "#CF00FA"
    titulo.style.backgroundColor = "blue"
    titulo.style.borderRadius = "10px"
    titulo.style.padding = "10px"

    resultado.textContent = nome.value + " " + email.value
}


