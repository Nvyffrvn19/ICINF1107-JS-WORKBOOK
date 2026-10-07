// ============================================================
// EJERCICIO 1: VARIABLES Y TIPOS DE DATOS
// ============================================================
// https://www.w3schools.com/js/js_variables.asp
// https://www.w3schools.com/js/js_strings.asp

// 1.1 Crea una variable `nombre` con tu nombre y `edad` con tu edad.
//     Luego retorna una frase: "Soy <nombre> y tengo <edad> años."

const presentarse = () => {
    let nombre = 'Gabriel'
    let edad = 18

    return `Soy ${nombre} y tengo ${edad} años`
};

// 1.2 Dado el valor 42, retorna su tipo de dato como string (ej: "number")

const obtenerTipo = (valor) => {
    return typeof valor
};

// ============================================================
// EJERCICIO 2: CONDICIONES
// ============================================================
// https://www.w3schools.com/js/js_if_else.asp

// 2.1 Recibe un número y retorna:
//     "positivo" si es mayor que 0
//     "negativo" si es menor que 0
//     "cero" si es exactamente 0

const clasificarNumero = (num) => {
    if (num > 0) {
        return "positivo";
    }
    else if (num < 0) {
        return "negativo";
    }
    else {
        return "cero";
    }
};

// 2.2 Recibe una nota (0-100) y retorna la letra según:
//     90-100 => "A", 80-89 => "B", 70-79 => "C"
//     60-69 => "D", menos de 60 => "F"

const notaALetra = (nota) => {
    if (nota >= 90 && nota <= 100) {
        return "A";
    }
    else if (nota >= 80 && nota <= 89) {
        return "B";
    }
    else if (nota >= 70 && nota <= 79) {
        return "C"
    }
    else if (nota >= 60 && nota <= 69) {
        return "D"
    }
    else {
        return "F"
    }
};

// ============================================================
// EJERCICIO 3: BUCLES
// ============================================================
// https://www.w3schools.com/js/js_loop_for.asp

// 3.1 Retorna la suma de todos los números del 1 al n (inclusive).

const sumarHasta = (n) => {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    return suma;
};

// 3.2 Retorna un array con los números del 1 al n.
//     Ej: contarHasta(5) => [1, 2, 3, 4, 5]

const contarHasta = (n) => {
    const resultado = [];
    for (let i = 1; i <= n; i++) {
        resultado.push(i);
    }
    return resultado;
};

// ============================================================
// EJERCICIO 4: ARREGLOS
// ============================================================
// https://www.w3schools.com/js/js_arrays.asp

const calificaciones = [72, 95, 58, 88, 100, 65];

// 4.1 Retorna el promedio de las calificaciones.

const promedio = (arr) => {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma / arr.length;
};

// 4.2 Retorna la calificación más alta.

const maximo = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

// 4.3 Retorna solo las calificaciones aprobadas (>= 60).

const aprobadas = (arr) => {
    const aprobadas = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 60) {
            aprobadas.push(arr[i]);
        }
    }
    return aprobadas;
};

// 4.4 Retorna un nuevo array con cada calificación convertida a porcentaje de 100.
//     Ej: [72, 95] -> [72%, 95%] (como strings)

const aPorcentaje = (arr) => {
    const porcentajes = [];
    for (let i = 0; i < arr.length; i++) {
        porcentajes.push(arr[i] + "%");
    }
    return porcentajes;
};

// 4.5 Ordena el array de menor a mayor sin usar el método .sort().
//     Ej: ordenarSinSort([5, 3, 8, 1, 2]) -> [1, 2, 3, 5, 8]

const ordenarSinSort = (arr) => {
    const ordenado = [...arr];
    for (let i = 0; i < ordenado.length - 1; i++) {
        for (let j = 0; j < ordenado.length - 1 - i; j++) {
            if (ordenado[j] > ordenado[j + 1]) {
                [ordenado[j], ordenado[j + 1]] = [ordenado[j + 1], ordenado[j]];
            }
        }
    }
    return ordenado;
};

// ============================================================
// EJERCICIO 5: FUNCIONES PURAS
// ============================================================
// https://www.w3schools.com/js/js_functions.asp

// 5.1 Retorna el factorial de n. Ej: factorial(5) -> 120

const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
};

// 5.2 Retorna true si la palabra es un palíndromo. Ej: "oso" -> true

const esPalindromo = (palabra) => {
    const palabraReversa = palabra.split("").reverse().join("");
    return palabra === palabraReversa;
};

// 5.3 Dado un array, retorna sus elementos al revés. NO uses .reverse()

const invertir = (arr) => {
    const invertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        invertido.push(arr[i]);
    }
    return invertido;
};

// ============================================================
// EJERCICIO 6: DOM (interacción con la página)
// ============================================================
// https://www.w3schools.com/js/js_htmldom.asp
// Este ejercicio usa el HTML incluido en index.html.

// 6.1 Cuando el usuario haga clic en el botón #saludar,
//     muestra en #mensaje: "¡Hola, <valor del input>!"

const saludar = () => {
    // TODO
};

// 6.2 Cuando el usuario escriba en #texto, muestra en #contador
//     la cantidad de caracteres: "3 caracteres"

const contarCaracteres = () => {
    // TODO
};

// ============================================================
// VERIFICACIÓN - NO MODIFICAR
// ============================================================
// Abre index.html en el navegador y revisa la consola (F12).

const verificar = () => {
    const resultados = [];
    const prueba = (nombre, actual, esperado) => {
        const ok = JSON.stringify(actual) === JSON.stringify(esperado);
        resultados.push(`${ok ? "PASS" : "FAIL"} - ${nombre}`);
        if (!ok)
            console.log(
                `${nombre}: se esperaba ${JSON.stringify(esperado)} y se obtuvo ${JSON.stringify(actual)}`,
            );
    };

    prueba(
        "presentarse",
        typeof presentarse() === "string" &&
            presentarse().toLowerCase().includes("soy"),
        true,
    );
    prueba("obtenerTipo", obtenerTipo(42), "number");
    prueba("clasificarNumero (5)", clasificarNumero(5), "positivo");
    prueba("clasificarNumero (-3)", clasificarNumero(-3), "negativo");
    prueba("clasificarNumero (0)", clasificarNumero(0), "cero");
    prueba("notaALetra (95)", notaALetra(95), "A");
    prueba("notaALetra (75)", notaALetra(75), "C");
    prueba("notaALetra (40)", notaALetra(40), "F");
    prueba("sumarHasta(5)", sumarHasta(5), 15);
    prueba("contarHasta(4)", contarHasta(4), [1, 2, 3, 4]);
    prueba("promedio", promedio(calificaciones), 79.66666666666667);
    prueba("maximo", maximo(calificaciones), 100);
    prueba("aprobadas", aprobadas(calificaciones), [72, 95, 88, 100, 65]);
    prueba("aPorcentaje", aPorcentaje([72, 95]), ["72%", "95%"]);
    prueba("ordenarSinSort", ordenarSinSort([5, 3, 8, 1, 2]), [1, 2, 3, 5, 8]);
    prueba("factorial(5)", factorial(5), 120);
    prueba("esPalindromo('oso')", esPalindromo("oso"), true);
    prueba("esPalindromo('hola')", esPalindromo("hola"), false);
    prueba("invertir", invertir([1, 2, 3]), [3, 2, 1]);

    console.log(resultados.join("\n"));
    console.log();

    const fallos = resultados.filter((r) => r.startsWith("FAIL"));

    console.log(
        `${resultados.length - fallos.length}/${resultados.length} ejercicios completados correctamente.`,
    );
};

document.addEventListener("DOMContentLoaded", () => {
    verificar();
    contarCaracteres();
    saludar();
});
