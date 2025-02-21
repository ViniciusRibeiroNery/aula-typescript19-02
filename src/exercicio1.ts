let valoresNumeros: number[] = [10,10,10];

let somaValores: number = valoresNumeros.reduce((acc, val) => acc + val, 0);
console.log("soma dos Valores:", somaValores);