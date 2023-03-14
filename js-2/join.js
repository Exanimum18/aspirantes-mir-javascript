function join(arr) {
    let resultado = " ";
    for (let i = 0; i < arr.length; i++) {
        resultado += arr[i];
        if (i < arr.length) {
            resultado += " ";
        }
    }
    return resultado;
}

console.log(join(["Hola", "Make", "It", "Real"]));

