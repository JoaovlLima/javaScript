function BoasVindas(){
let nome; 
let sobrenome;

nome = prompt("digite o seu nome","digite Aqui");                       
sobrenome = prompt("Digite o seu sobrenome","Digite Aqui");

alert("Olá "+nome +" "+sobrenome);}

function Somar(){
    let num1;
    let num2;

    num1 = prompt("Digite o primeiro numero");
    num2 = prompt("digite o segundo numero");

    let soma = parseInt(num1)+parseInt(num2);

    alert(num1+ " + "+num2+" = "+soma)
}

function Subtrair(){
    let num1;
    let num2;

    num1 = prompt("Digite o primeiro numero");
    num2 = prompt("digite o segundo numero");

    let soma = parseInt(num1)-parseInt(num2);

    alert(num1+ " - "+num2+" = "+soma)
}

function Dividir(){
    let num1;
    let num2=0;
    let soma;

    num1 = prompt("Digite o primeiro numero");
    num2 = prompt("digite o segundo numero");

    while(num2==0){
    alert("não é possivel dividir um numero por 0")
    num2 = prompt("digite o segundo numero");
}
    if(num2==0){
        alert("Não é possivel dividir um numero por 0")
    }else{

    soma = parseInt(num1)/parseInt(num2);

    alert(num1+ " / "+num2+" = "+soma)
}
}

function Multiplicar(){
    let num1;
    let num2;

    num1 = prompt("Digite o primeiro numero");
    num2 = prompt("digite o segundo numero");

    let soma = parseInt(num1)*parseInt(num2);

    alert(num1+ " * "+num2+" = "+soma)
}

