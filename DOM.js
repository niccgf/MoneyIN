$( document ).ready(function() 
{
    isDocumentReady = true;
});

    $("#formDinero").hide();
    $(".contact100-form-title").hide();
    $(".wrap-input100 validate-input").hide();
    $("#inputDinero").hide();
    $("#focusInputDinero").hide();
    $(".texto-1-light").hide();
    $("#wrapCuotas").hide();
    $("#inputCuotas").hide();
    $("#containerGuardar").hide();
    $("#guardar").hide();

    function sumar(valor1, valor2) {
        return valor1 + valor2;
    }

    function multiplicar(valor1, valor2) {
        return valor1 * valor2;
    }

    function dividir(valor1, valor2) {
        return valor1 / valor2
    }

                // AJAX

    const URLGET = "https://jsonplaceholder.typicode.com/posts"


    $("#guardarNombre").click(() => {
        var nombre = document.getElementById("inputNombre").value;
        console.log(nombre);
        if (isNaN(nombre)) {
            const infoPost = { 
                name: nombre
            }
            jQuery.post(URLGET, infoPost,(respuesta,estado) => {
                if(estado === "success") {
                    $("#inputNombre").fadeOut( function() {
                        $(this).remove();
                    });
                    $("#guardarNombre").fadeOut();
                    $("#wrapNombre").fadeOut( function() {
                        $(this).remove();
                    });
                    $("#formNombre").prepend(`<span id="titulo-nombre">Hola, ${respuesta.name}</span>`);
                    console.log("¡Listo!");
                    inicio();
                }
            });
        } else
            alert("Volvé a intentarlo, colocá tu nombre en el campo de texto");
    });

    $("#inputNombre").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#guardarNombre").click();
        }
    });

    interes1 = 0.35
    interes2 = 0.40
    interes3 = 0.50
    interes4 = 0.70

    function inicio() {
        $("#formDinero").fadeIn();
        $(".contact100-form-title").fadeIn();
        $(".wrap-input100 validate-input").fadeIn();
        $("#inputDinero").fadeIn();
        $("#focusInputDinero").fadeIn();
        $(".texto-1-light").fadeIn();
        $("#wrapCuotas").fadeIn();
        $("#inputCuotas").fadeIn();
        $("#containerGuardar").fadeIn();
        $("#guardar").fadeIn();
    }


    // Esta función la dejo fuera de jquery para el botón recreado de "enviar"

    function enviarDuplicado(){
        var primerNumero = parseInt(document.getElementById("inputDinero").value);
        var segundoNumero = parseInt(document.getElementById("inputCuotas").value);
        if(isNaN(primerNumero) || isNaN(segundoNumero))
            alert("Incorrecto")
        else
            pedirCuotas();
    }

    $('#guardar').click(function enviar(){
        var primerNumero = parseInt(document.getElementById("inputDinero").value);
        var segundoNumero = parseInt(document.getElementById("inputCuotas").value);
        if(isNaN(primerNumero) || isNaN(segundoNumero))
            alert("Incorrecto")
        else
            pedirCuotas();
    });
    
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
        let infoLoanTexto = document.createTextNode("El interés será de $"+interesTotal.toFixed(2)+", y el total será de $"+resultado+" en "+segundoNumero+" cuotas fijas de $"+valorCuota.toFixed(2)+".");
        infoLoan.id = "texto-2";
        infoLoan.appendChild(infoLoanTexto);
        document.getElementsByClassName("wrap-contact100")[0].appendChild(infoLoan);

        let containerEnviar = document.getElementsByClassName("container-contact100-form-btn")[1];
        let botonEnviar = document.getElementsByClassName("contact100-form-btn")[1];
        if (isDocumentReady) {
            $(botonEnviar).fadeOut( function() {
                $(this).remove();
            });
            $(containerEnviar).fadeOut( function(){
                $(this).remove();
            });
        }
        botonReintentar();
    }

    function botonReintentar() {

        let containerBotonReintentar = document.createElement("div");
        containerBotonReintentar.id = "container-reintentar";
        document.getElementsByClassName("wrap-contact100")[0].appendChild(containerBotonReintentar);

            //      Usé este método LET con DOM normal sin jQuery para que el container se posicione abajo de todo
        if (isDocumentReady) {
            $('#container-reintentar').prepend('<button id="boton-reintentar"></button>');
            $('#boton-reintentar').prepend('<div>REINTENTAR</div>');

            $("#boton-reintentar").click(function reiniciar() {
                $("#boton-reintentar").fadeOut( function(){
                    $(this).remove();
                });
                $("#texto-1-infoTitulo").fadeOut( function(){
                    $(this).remove();
                });
                $("#texto-2").fadeOut( function(){
                    $(this).remove();
                });
                $("#container-reintentar").fadeOut( function(){
                    $(this).remove();
                });
                recrear();
            });
        }
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
        containerRecrearEnviar.setAttribute("onclick","enviarDuplicado();");

        document.getElementsByClassName("wrap-contact100")[0].appendChild(containerRecrearEnviar);
    }