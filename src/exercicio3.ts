/*Criando uma classe para "Carro" com os atributos marca, modelo e ano */
class Carro {
    constructor (
        public marca: string,
        public modelo: string,
        public ano: number
    ) {}

    detalhes():string{
        return`${this.marca} ${this.modelo} ${this.ano}`; 
    }    
}

/* passando os dados para os parâmetros criados */
const carro1 = new Carro("Toyota", "Paseo", 2022);

/* imprimindo as Informções criadas para a classe carro*/ 
console.log(carro1.detalhes());