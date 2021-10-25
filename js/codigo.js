var numEnPantalla = document.getElementById("numeroEnPantalla");
var currentFontSize = window
    .getComputedStyle(document.getElementById("numeroEnPantalla"), null)
    .getPropertyValue("font-size");
var arrayOperadores = document.getElementsByClassName("btn2");
var arrayNumeros = document.getElementsByClassName("btn3");
var arrayEspeciales = document.getElementsByClassName("btn1");
var operador1 = 0;
var operador2 = 0;
var idOperacion = null; // 1: suma 2:resta 3:multi 4:divi
var clearPressed = true;
var shiftPressed = false;
var aux = 0;
var tienePunto = false;
var fueOperacion = false;

function selNum(id) {
    let a = "";
    for (i = 0; i < arrayOperadores.length; i++) {
        arrayOperadores[i].style.setProperty(
            "background-color",
            "rgba(244,152,39,255)"
        );
        arrayOperadores[i].style.setProperty("color", "white");
    }
    font();
    for (i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i].id == id) {
            arrayNumeros[i].style.setProperty(
                "background-color",
                "rgba(159,159,159,0.8)"
            );
            let x = i;
            setTimeout(() => {
                arrayNumeros[x].style.setProperty(
                    "background-color",
                    "rgba(49,49,49,255)"
                );
            }, 200);
        }
    }
    for (i = 0; i < arrayEspeciales.length; i++) {
        if (arrayEspeciales[i].id == id) {
            arrayEspeciales[i].style.setProperty(
                "background-color",
                "rgba(159,159,159,0.8)"
            );
            let x = i;
            setTimeout(() => {
                arrayEspeciales[x].style.setProperty(
                    "background-color",
                    "rgba(159,159,159,255)"
                );
            }, 200);
        }
    }
    switch (id) {
        case "num0":
            a = "0";
            if (fueOperacion) {
                numEnPantalla.innerHTML = "";
                fueOperacion = false;
            }
            break;
        case "num1":
            a = "1";
            if (fueOperacion) {
                numEnPantalla.innerHTML = "";
                fueOperacion = false;
            }
            break;
        case "num2":
            a = "2";
            if (fueOperacion) {
                numEnPantalla.innerHTML = "";
                fueOperacion = false;
            }
            break;
        case "num3":
            a = "3";
            if (fueOperacion) {
                numEnPantalla.innerHTML = "";
                fueOperacion = false;
            }
            break;
        case "num4":
            a = "4";
            if (fueOperacion) {
                numEnPantalla.innerHTML = "";
                fueOperacion = false;
            }
            break;
        case "num5":
            a = "5";
            if (fueOperacion) {
                numEnPantalla.innerHTML = "";
                fueOperacion = false;
            }
            break;
        case "num6":
            a = "6";
            if (fueOperacion) {
                numEnPantalla.innerHTML = "";
                fueOperacion = false;
            }
            break;
        case "num7":
            a = "7";
            if (fueOperacion) {
                numEnPantalla.innerHTML = "";
                fueOperacion = false;
            }
            break;
        case "num8":
            a = "8";
            if (fueOperacion) {
                numEnPantalla.innerHTML = "";
                fueOperacion = false;
            }
            break;
        case "num9":
            a = "9";
            if (fueOperacion) {
                numEnPantalla.innerHTML = a;
                fueOperacion = false;
            }
            break;
        case "clear":
            a = "0";
            numEnPantalla.innerHTML = a;
            operador1 = 0;
            operador2 = 0;
            clearPressed = true;
            shiftPressed = false;
            tienePunto = false;
            currentFontSize = "62";
            break;
        case "suma":
            numEnPantalla.innerHTML = "";
            document
                .getElementById(id)
                .style.setProperty("background-color", "white");
            document
                .getElementById(id)
                .style.setProperty("color", "rgba(244,152,39,255)");
            operador1 = operador2;
            operador2 = 0;
            idOperacion = 1;
            tienePunto = false;
            break;
        case "resta":
            numEnPantalla.innerHTML = "";
            document
                .getElementById(id)
                .style.setProperty("background-color", "white");
            document
                .getElementById(id)
                .style.setProperty("color", "rgba(244,152,39,255)");
            operador1 = operador2;
            operador2 = 0;
            idOperacion = 2;
            tienePunto = false;
            break;
        case "multiplicacion":
            numEnPantalla.innerHTML = "";
            document
                .getElementById(id)
                .style.setProperty("background-color", "white");
            document
                .getElementById(id)
                .style.setProperty("color", "rgba(244,152,39,255)");
            operador1 = operador2;
            operador2 = 0;
            idOperacion = 3;
            tienePunto = false;
            break;
        case "division":
            numEnPantalla.innerHTML = "";
            document
                .getElementById(id)
                .style.setProperty("background-color", "white");
            document
                .getElementById(id)
                .style.setProperty("color", "rgba(244,152,39,255)");
            operador1 = operador2;
            operador2 = 0;
            idOperacion = 4;
            tienePunto = false;
            break;
        case "igual":
            let resultado = 0;
            if (idOperacion != null) {
                fueOperacion = true;
                switch (idOperacion) {
                    case 1: //suma
                        resultado = parseFloat(operador1) + parseFloat(operador2);
                        aux = parseFloat(resultado);
                        if (Number.isInteger(resultado)) {
                            tienePunto = false;
                            numEnPantalla.innerHTML = resultado;
                        } else {
                            numEnPantalla.innerHTML = intlRound(aux, 6, false);
                        }
                        font();
                        operador1 = parseFloat(resultado);
                        clearPressed = false;
                        idOperacion = null;
                        break;
                    case 2: //resta
                        resultado = parseFloat(operador1) - parseFloat(operador2);
                        aux = parseFloat(resultado);
                        if (Number.isInteger(resultado)) {
                            tienePunto = false;
                            numEnPantalla.innerHTML = resultado;
                        } else {
                            numEnPantalla.innerHTML = intlRound(aux, 6, false);
                        }
                        font();
                        operador1 = parseFloat(resultado);
                        clearPressed = false;
                        idOperacion = null;
                        break;
                    case 3: //multiplicacion
                        resultado = parseFloat(operador1) * parseFloat(operador2);
                        aux = parseFloat(resultado);
                        if (Number.isInteger(resultado)) {
                            tienePunto = false;
                            numEnPantalla.innerHTML = resultado;
                        } else {
                            numEnPantalla.innerHTML = intlRound(aux, 6, false);
                        }
                        font();
                        operador1 = parseFloat(resultado);
                        clearPressed = false;
                        idOperacion = null;
                        break;
                    case 4: //division
                        resultado = parseFloat(operador1) / parseFloat(operador2);
                        aux = parseFloat(resultado);
                        if (Number.isInteger(resultado)) {
                            tienePunto = false;
                            numEnPantalla.innerHTML = resultado;
                        } else {
                            numEnPantalla.innerHTML = intlRound(aux, 6, false);
                        }
                        font();
                        operador1 = parseFloat(resultado);
                        clearPressed = false;
                        idOperacion = null;
                        break;
                    case 5:
                        resultado = (parseFloat(operador1) * parseFloat(operador2)) / 100;
                        aux = parseFloat(resultado);
                        if (Number.isInteger(resultado)) {
                            tienePunto = false;
                            numEnPantalla.innerHTML = resultado;
                        } else {
                            numEnPantalla.innerHTML = intlRound(aux, 6, false);
                        }
                        font();
                        operador1 = parseFloat(resultado);
                        clearPressed = false;
                        idOperacion = null;
                        break;
                }
            }
            break;
        case "punto":
            if (!tienePunto) {
                if (numEnPantalla.innerHTML == "0") {
                    a = "0.";
                } else {
                    a = ".";
                }
                tienePunto = true;
            }
            break;
        case "porcentaje":
            if (idOperacion != null) {
                switch (idOperacion) {
                    case 1:
                        numEnPantalla.innerHTML =
                            parseFloat(operador1) +
                            (numEnPantalla.innerHTML / 100) * operador1;
                        break;
                    case 2:
                        numEnPantalla.innerHTML =
                            parseFloat(operador1) -
                            (numEnPantalla.innerHTML / 100) * operador1;
                        break;
                    case 3:
                        numEnPantalla.innerHTML =
                            parseFloat(operador1) *
                            ((numEnPantalla.innerHTML / 100) * operador1);
                        break;
                    case 4:
                        numEnPantalla.innerHTML =
                            parseFloat(operador1) /
                            ((numEnPantalla.innerHTML / 100) * operador1);
                        break;
                }
            } else {
                a = "0";
            }
            // numEnPantalla.innerHTML = "";
            // operador1 = operador2;
            // operador2 = 0;
            // idOperacion = 5;
            // tienePunto= false;
            break;
        case "masmenos":
            if (numEnPantalla.innerHTML == "0" || numEnPantalla == "") {
                numEnPantalla.innerHTML == "0";
                a = "0";
            } else {
                numEnPantalla.innerHTML = parseFloat(numEnPantalla.innerHTML) * -1;
            }
            break;
    }

    if (numEnPantalla.innerHTML.length < 9) {
        if (numEnPantalla.innerHTML == "0" || numEnPantalla == "") {
            if (fueOperacion) {
                numEnPantalla.innerHTML = operador1;
            } else {
                numEnPantalla.innerHTML = a;
                operador2 = numEnPantalla.innerHTML;
            }
        } else {
            if (fueOperacion) {
                numEnPantalla.innerHTML = operador1;
            } else {
                numEnPantalla.innerHTML += a;
            }
            if (!clearPressed) {
                operador2 = aux;
                clearPressed = true;
            } else {
                operador2 = numEnPantalla.innerHTML;
            }
        }
    }
    font();
}

function intlRound(numero, decimales = 2, usarComa = false) {
    var opciones = {
        maximumFractionDigits: decimales,
        useGrouping: false,
    };
    usarComa = usarComa ? "es" : "en";
    return new Intl.NumberFormat(usarComa, opciones).format(numero);
}

function keyboardEvents(event) {
    switch (event.keyCode) {
        case 8:
            if (numEnPantalla.innerHTML.length != 1) {
                numEnPantalla.innerHTML = numEnPantalla.innerHTML.substr(
                    0,
                    numEnPantalla.innerHTML.length - 1
                );
                font();
            } else {
                numEnPantalla.innerHTML = 0;
                currentFontSize = "70";
            }
            break;
        case 13:
            selNum("igual");
            break;
        case 16:
            shiftPressed = true;
            break;
        case 27:
            selNum("clear");
            break;
        case 48:
            selNum("num0");
            break;
        case 49:
            selNum("num1");
            break;
        case 50:
            selNum("num2");
            break;
        case 51:
            if (shiftPressed) {
                selNum("masmenos");
                shiftPressed = false;
            } else {
                selNum("num3");
            }
            break;
        case 52:
            selNum("num4");
            break;
        case 53:
            if (shiftPressed) {
                selNum("porcentaje");
                shiftPressed = false;
            } else {
                selNum("num5");
            }
            break;
        case 54:
            selNum("num6");
            break;
        case 55:
            if (shiftPressed) {
                selNum("division");
                shiftPressed = false;
            } else {
                selNum("num7");
            }
            break;
        case 56:
            selNum("num8");
            break;
        case 57:
            selNum("num9");
            break;
        case 187:
            if (shiftPressed) {
                selNum("multiplicacion");
                shiftPressed = false;
            } else {
                selNum("suma");
            }
            break;
        case 189:
            selNum("resta");
            break;
        case 190:
            selNum("punto");
            break;
    }
}

var widthPantalla =
    document.getElementById("pantallaOperaciones").offsetWidth - 56;
function font() {
    if (numEnPantalla.innerHTML.length < 9) {
        document
            .getElementById("numeroEnPantalla")
            .style.removeProperty("word-break");
        if (
            document.getElementById("numeroEnPantalla").offsetWidth > widthPantalla
        ) {
            document
                .getElementById("numeroEnPantalla")
                .style.setProperty(
                    "font-size",
                    "" + (parseFloat(currentFontSize) - 8) + "px"
                );
            currentFontSize = "" + (parseFloat(currentFontSize) - 8);
        } else {
            if (parseFloat(currentFontSize) != 70) {
                document
                    .getElementById("numeroEnPantalla")
                    .style.setProperty(
                        "font-size",
                        "" + (parseFloat(currentFontSize) + 8) + "px"
                    );
                currentFontSize = "" + (parseFloat(currentFontSize) + 8);
            }
        }
    } else {
        document
            .getElementById("numeroEnPantalla")
            .style.setProperty("word-break", "break-all");
    }
}
