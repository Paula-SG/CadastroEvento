let dataEvento = new Date('02/24/2022')
let dataHoje = new Date ()

console.log(dataEvento)

if(dataEvento > dataHoje) {console.log("Evento válido")}
else {console.log("Evento inválido")}

let idadeparticipante = 18

if(idadeparticipante < 18) {console.log ("Não é possível realizar o cadastro por não ter a idade permitida.")}
else {console.log("Cadastro permitido!")}

let quantparticipante = 15

if(quantparticipante < 33) {console.log("Cadastro permitido!")}
else {console.log("Cadastro não permitido; Limite excedido.")}

let listadeparticipantes = ["Guilherme", "Paula", "Isa", "Enzo", "Felipe", "Miguel"]

for(let contador = 0; contador < 6; contador++)
 {console.log(listadeparticipantes[contador])}

 