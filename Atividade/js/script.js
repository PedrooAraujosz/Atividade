exercicio1=()=> {
    document.getElementById("resposta").innerHTML = "<h3> Resposta da atividade</h3>"
for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `#${i}`;
    }
};

/* exercicio2 */
exercicio2=()=> {
    document.getElementById("resposta").innerHTML = "<h3> Resposta da atividade</h3>"
    let num = document.getElementById ("num").value
    for (let i = 0; i <= num ; i+= 2) {
        console.log(i)  
        document.getElementById("resposta").innerHTML += `#${i}`;

    }
};
/* exercicio3 */
const exercicio3 = () => {
    let num = document.getElementById("num").value
    let error = document.getElementById("erro")
    let result = document.getElementById("resultado")

    if (num <= 0) {
        error.innerText = `informar número válido, o numero ${num} não é positivo`;
        result.innerHTML = "";
    } else {
        error.innerText = "";
        let primo = true;
        for (let i = 2; i < num; i++) {
        if (num % i == 0) primo = false;
            
        }

    primo 
       ? (result.innerText = `O número ${num} é primo!`)
       : (result.innerText = `O numero ${num} não é primo`);
    }
};

/* exercicio 4 */

const exercicio4 = () => {
    let num = document.getElementById("num").value
    let error = document.getElementById("erro")
    let result = document.getElementById("resultado")
    result.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        result.innerHTML +=  `${i} X ${num} = ${i*num} <br />`;
        }
};

/* exercicio 5 */
    exercicio5 = () => {
        let num = document.getElementById("num").value;
        let result = document.getElementById("resultado");
      
        result.innerText = ""; //começar a escrever no vazio
        let contador = 1;
        while (contador < num) {
          result.innerText += ` # ${contador}`;
          contador += 2;
        }
        console.log();
      };
/* exercicio 6 */
const exercicio6 = () => {
    let num = document.getElementById("num").value;
    let i = 0;
  let soma = 0 
    document.getElementById("resultado").innerText = ""
    while (i <= num) {
      if(i % 2 == 0) soma += i 
      i++
    }
    document.getElementById("resultado").innerText = soma 
  };

// exercicio6 = () => {
//     let num = document.getElementById("num").value;
//     let result = document.getElementById("resultado");
  
//     result.innerText = "";
//     let contador = 0;
//     while (contador <= num) {
//       result.innerText += ` # ${contador}`;
//       contador += 2;
//     }
//     console.log();
 
   /* exercicio 7 */
   const exercicio7 = () => {
       let resposta = document.getElementById("resposta");
       resposta.innerText = "";
       let contador = 10
       while (contador >= 0) {


       resposta.innerText +=`# ${contador}`;
       contador -= 1
       
    }
   console.log(contador);
};

/* exercicio 8 */
const exercicio8 = () => {

};

/* exercicio 9 */
const exercicio9 = () => {
    let soma = 0;
    for (let contador = 1;  contador < 101; contador++ )
    if (contador % 1 == 0) {
        soma += contador;
    } 
}
 resposta.innerHTML = `<h2> Resposta </h2>`  
}
