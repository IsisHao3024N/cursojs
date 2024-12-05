/*let i  = 0;
while(i < 10){
    console.log(i);
    i++;
}*/

/*let i = 10;
do{
    console.log(i);
    i++;
} while(i < 10);
*/

/*for(let i = 0; i < 10; i--){
    console.log(i);
}*/
let ul = document.querySelector('#tabuada');
let numero = window.prompt('Digite um número para ver a sua tabuada');
for (let i=1; i <= 11; i++){
    let resultado = numero * i;
    console.log(resultado);
    let li = document.createElement('li');
li.innerText = `${numero} * ${i} = ${resultado}`;
ul.appendChild(li);
}