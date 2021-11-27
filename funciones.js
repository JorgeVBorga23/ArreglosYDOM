let trianguloPascal = (capas, resultado) => {

    let res = resultado
    let limite = capas
    /* 
       creamos la matriz bidimensional
       llenamos con 1 las primeras dos capas
          1
         1 1
    */
    let matriz = new Array()
    matriz[0] = new Array(1)
    matriz[0][0] = 1
    matriz[1] = new Array(2)
    matriz[1][0] = 1
    matriz[1][1] = 1

    //creamos los arrays en cada capa y llenamos con 1 los extremos
    for (let i = 2; i < limite; i++) {
        matriz[i] = new Array(matriz[i - 1].length + 1)
        matriz[i][0] = 1
        matriz[i][matriz[i].length - 1] = 1

        //llenamos los otros valores con las sumas de los valores de capas anteriores
        for (let n = 1; n < matriz[i].length - 1; n++) {
            matriz[i][n] = matriz[i - 1][n - 1] + matriz[i - 1][n]
        }

    }
    //mostramos los resultados en html
    let texto = ""
    for (var n = 0; n < limite; n++) {
        for (let i = 0; i < matriz[n].length; i++) {

            texto = texto + (matriz[n][i] + " ")
            res.innerHTML = texto
        }
        texto = texto + ("<br/>")
        res.innerHTML = texto

    }




}

let imprimirTriangulo = () => {

    let ncapas = document.getElementById("inputcapas").value
    let resultado = document.getElementById("resultado")
    trianguloPascal(ncapas, resultado)

}

let formarMatriz = () => {

    //creamos la matriz de n x n

    let n = document.getElementById("nfilcol").value
    let matriz = new Array(n)
    for (let k = 0; k < n; k++) {
        matriz[k] = new Array(n)

    }

    //pedimos los valores y llenamos la matriz
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {

            valor = parseInt(prompt("LLenando la matriz de " + n + "X" + n + "\nValor de la posicion [" + i + "][" + j + "]"))

            //si se ingresa cualquier cosa que no sea un numero lo tomamos como cero
            if (isNaN(valor)) {
                numero = 0
            } else {
                numero = valor
            }
            matriz[i][j] = numero
        }

    }
    //imprimimos la matriz en el formulario
    let p = document.getElementById("matriz")
    let txt = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            txt = txt + matriz[i][j]

            p.innerHTML = txt
        }
        txt = txt + "<br/>"
        p.innerHTML = txt
    }
    //verificamos si la matriz es triangular o no
    let resultmatriz = document.getElementById("resmatriz")
    if (verificarMatriz(matriz, n)) {
        resultmatriz.style.color = "#7FFF52"
        resultmatriz.innerHTML = "Si es triangular superior"
    } else {
        resultmatriz.style.color = "red"
        resultmatriz.innerHTML = "No es triangular superior"
    }

}

let verificarMatriz = (matriz, n) => {

    //Si encontramos un numero diferente de cero cuando las filas son mayores a las columnas automaticamente 
    // ya no es triangular superior

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i > j && matriz[i][j] != 0) {
                return false
            }
        }
    }
    return true
}

