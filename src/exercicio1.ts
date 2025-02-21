/*definindo uma array com numeros que serão somados */ 

let valoresNumeros: number[] = [10,10,10];

/*Criando função que soma todos os numeros passados no Array (.reduce faz com que o array seja reduzido a um unico valor"Quando precisa transformar um array em um único valor ") */
let somaValores: number = valoresNumeros.reduce((acc, val) => acc + val, 0);
console.log("soma dos Valores:", somaValores);