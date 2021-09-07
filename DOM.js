$( document ).ready(function() 
{
   console.log("El DOM esta listo");
});


function sumar(valor1, valor2) {
    return valor1 + valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    return valor1 / valor2
}

function porcentuar(valor3){
    var porcentaje = Number(valor3*100).toFixed(1);
    porcentaje+="%";
    return porcentaje;
}


interes1 = 0.35
interes2 = 0.40
interes3 = 0.50
interes4 = 0.70

function enviar(){
    var primerNumero = parseInt(document.getElementById("inputDinero").value);
    var segundoNumero = parseInt(document.getElementById("inputCuotas").value);
    if(isNaN(primerNumero) || isNaN(segundoNumero))
        alert("Incorrecto")
    else
        pedirCuotas();
};

function pedirCuotas(ii) {
    var primerNumero = parseInt(document.getElementById("inputDinero").value);
    var segundoNumero = parseInt(document.getElementById("inputCuotas").value);
    switch(segundoNumero) {
        case 12:
            interesTotal = multiplicar(primerNumero, interes1);
            resultado = sumar(primerNumero, interesTotal);
            valorCuota = dividir(resultado, segundoNumero);
            break;
        case 18:
            interesTotal = multiplicar(primerNumero, interes2);
            resultado = sumar(primerNumero, interesTotal);
            valorCuota = dividir(resultado, segundoNumero);
            break;
        case 24:
            interesTotal = multiplicar(primerNumero, interes3);
            resultado = sumar(primerNumero, interesTotal);
            valorCuota = dividir(resultado, segundoNumero);
            break;
        case 48:
            interesTotal = multiplicar(primerNumero, interes4);
            resultado = sumar(primerNumero, interesTotal);
            valorCuota = dividir(resultado, segundoNumero);
            break;
        case null:
            alert("¡Hasta pronto!")
            break;
        default:
            pedirCuotas()
            break; 
    }
    alert("¡Gracias por usar nuestro servicio!");
    printearElemento();
}


function printearElemento() {

    var segundoNumero = parseInt(document.getElementById("inputCuotas").value);

    let congrats = document.createElement("div");
    let congratsTexto = document.createTextNode("¡LISTO!");
    congrats.id = "texto-1-infoTitulo";
    congrats.appendChild(congratsTexto);
    document.getElementsByClassName("wrap-contact100")[0].appendChild(congrats);

    let infoLoan = document.createElement("div");
    let infoLoanTexto = document.createTextNode("El interés será de $"+interesTotal+", y el total será de $"+resultado+" en "+segundoNumero+" cuotas fijas de $"+valorCuota.toFixed(2)+".");
    infoLoan.id = "texto-2";
    infoLoan.appendChild(infoLoanTexto);
    document.getElementsByClassName("wrap-contact100")[0].appendChild(infoLoan);

    let containerEnviar = document.getElementsByClassName("container-contact100-form-btn")[0];
    let botonEnviar = document.getElementsByClassName("contact100-form-btn")[0];
    botonEnviar.remove();
    containerEnviar.remove();

    botonReintentar();
}

function botonReintentar() {

    let containerBotonReintentar = document.createElement("div");
    containerBotonReintentar.id = "container-reintentar";

    let botonReintentar = document.createElement("button");
    botonReintentar.id = "boton-reintentar";

    containerBotonReintentar.appendChild(botonReintentar);
    document.getElementsByClassName("wrap-contact100")[0].appendChild(containerBotonReintentar);

    let containerTextoBoton = document.createElement("div");
    let textoBoton = document.createTextNode("REINTENTAR");

    containerTextoBoton.appendChild(textoBoton);
    document.getElementById("boton-reintentar").appendChild(containerTextoBoton);

    // botonReintentar.setAttribute("onclick","reiniciar();"); >>> lo reemplacé con jQuery

    $("#boton-reintentar").click(function reiniciar() {
        document.getElementById("boton-reintentar").remove();
        document.getElementById("texto-1-infoTitulo").remove();
        document.getElementById("texto-2").remove();
        document.getElementById("container-reintentar").remove();
        recrear();
    });
}


function reiniciar() {
    document.getElementById("boton-reintentar").remove();
    document.getElementById("texto-1-infoTitulo").remove();
    document.getElementById("texto-2").remove();
    document.getElementById("container-reintentar").remove();
    recrear();
}


function recrear() {

    let containerRecrearEnviar = document.createElement("div");
    containerRecrearEnviar.className = "container-contact100-form-btn";
    let recrearEnviar = document.createElement("button");
    recrearEnviar.className = "contact100-form-btn";
    
    let containerTxtRecrear = document.createElement("span");
    let txtRecrear = document.createTextNode("Enviar");
    containerTxtRecrear.appendChild(txtRecrear);

    recrearEnviar.appendChild(containerTxtRecrear);
    containerRecrearEnviar.appendChild(recrearEnviar);
    containerRecrearEnviar.setAttribute("onclick","enviar();");

    document.getElementsByClassName("wrap-contact100")[0].appendChild(containerRecrearEnviar);
}
