let monto = parseInt(prompt("Ingrese monto de la inversion"))
let interesAnual = parseInt(prompt("Ingrese interes anual de la inversion"))
let cantidadAnios = parseInt(prompt("Ingrese cantidad de años a invertir"))
let interesAcumulado = prompt("Quiere que su calculo contenga interes acumulado?\nConteste SI o NO.")
let montoTotal = monto
if (interesAcumulado == "SI"){
for (let i = 0; i < cantidadAnios; i++) {
    montoTotal = montoTotal + montoTotal * interesAnual / 100
    console.log("Total en el año ", i + 1, ": ", montoTotal)
}
    } else if (interesAcumulado == "NO"){
        for (let i = 0; i < cantidadAnios; i++) {
            montoTotal = montoTotal + monto * interesAnual / 100
            console.log("Total en el año ", i + 1, ": ", montoTotal)
    }} else console.log("ERORR: INGRESE SI O NO")