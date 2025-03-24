// PALINDROMOS 
// Averiguar si un texto es palindromos
// -- ignorar los espacios
// -- ignorar mayúsculas/minúsculas
// -- ignorar tildes (acentos)

let string = "   dabale arroz a la zorra el abad   "

string = string.trim().split("").reverse().join("")
console.log(string)


