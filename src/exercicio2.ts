/* Criando função para mostrar uma mensagem de bem-vindo com nome personalizado*/
function nomePersonalizado (nome: string) : string{
    return `Hello World. Olá, ${nome}! Bem-vindo ao Typescript`;
}
/*passando o nome que será exibido*/
console.log(nomePersonalizado("Vinicius"));