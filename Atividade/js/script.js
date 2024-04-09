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
let palavra = document.getElementById("palavra").value;
let error = document.getElementById("erro");
let result = document.getElementById("resultado");
error.innerText = "";
result.innerText = "";


let inversa = "";
if (palavra == ""){
    error.innerText = "Favor informar uma palavra!";
} else {
for (let i = 1; i <= palavra.length; i++) {
  inversa += palavra.charAt(palavra.length - i);
}


palavra.toLowerCase() == inversa.toLowerCase()
  ? (result.innerText = "A palavra é um palíndromo!")
  : (error.innerText = "A palavra não é um palíndromo!");
  };
};

/* exercicio 9 */
const exercicio9 = () => {
    let resposta = document.getElementById("resposta")
    let soma = 0;
    
    resposta.innerText = ""
    
    for (let contador = 1;  contador < 101; contador++ )
   
    if (contador % 1 == 0) {
        soma += contador;
        resposta.innerText = soma 
      
        console.log(soma)

    } 
}  

/* exercicio 10 */
const exercicio10 = () => {
        let num = document.getElementById("num").value;
        let result = document.getElementById("resultado");
        let soma = 0;
        let media = 0;
      
        result.innerText = "" //começar a escrever no vazio

        let contador = 0;
        while (contador <= num) {
          soma += contador;
          media = soma / contador
          contador ++;
        }
        result.innerText = `A Soma dos numeros é ${soma} a media é ${media}`;
      };

      /* exercicio 11 */
      const exercicio11 = () => {
        // let num = document.getElementById("num").value;
        let result = document.getElementById("resposta");
        
        for (let i = 1 ; i <= 100;  i++) {
            if (i % 3 === 0 ) {
                result.innerHTML += ` ${i}<br> `;
                console.log(i)
            }    
        }
    };
    /* exercicio 12 */
    const exercicio12 = () => {
    let num = document.getElementById("num").value
    let result = document.getElementById("resultado");
    let soma = 0 ;
    let error = document.getElementById("erro");

    result.innerText = "";


if (num <= 9){
    error.innerHTML = `<h3>Favor informar um numero!</h3>`;
} else {
    for (let i = 1; i <= num.length; i++) {
        soma += parseInt(num.charAt(num.length - i));
    }
    result.innerText = soma
    }
};
    
    /* exercicio 13 */

const exercicio13 = () => { 
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let error = document.getElementById("erro");
    let result = document.getElementById("resultado");
    let maior, menor;
    result.innerText = "";
    if (num2 < num1) {
        menor = parseInt(num2)
        maior = parseInt(num1)
    } else {
        menor = parseInt(num1);
        maior = parseInt(num2);
    }

    if (parseInt(num1) <= 0 || parseInt(num2) <= 0) {
        error.innerText = "Digite Números maiores que Zero";
        result.innerText = "";
    }else{
        error.innerText = "" ;
        for (let i = menor; i <= maior; i++) {
            let teste = verificarPrimo(i);
            if(teste)
                result.innerText += ` ${i}`
        }
    }
};

function verificarPrimo(numero){
    let primo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) primo = false;
    }
    return primo
};



    /* exercicio 14 */
const exercicio14 = () => {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let error = document.getElementById("erro");
    let result = document.getElementById("resultado");
 
    if (num1 <= 0 || num2 <= 0) {
        error.innerHTML = `Favor informar uma palavra!`
        result.innerHTML = ""
    } else { 
        let area = num1 * num2 
        error.innerText = "";
        result.innerHTML = `O lado ${num1} com ${num2} resutará em: ${area}`
        }
};
/* exercicio 15 */
const exercicio15 = () => {
let pala = document.getElementById("palavra").value;
  document.getElementById("resultado").innerText = "";
  document.getElementById("erro").innerText = "";
  console.log(pala.length);
  let vog = [`a`, `e`, `i`, `o`, `u`];
  let consoante = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  pala = pala.toLowerCase();
  if (pala == "") {
    document.getElementById("erro").innerText = `Favor informar uma palavra`;
  }
  for (let i = 0; i < pala.length; i++) {
    for (let l = 0; l < vog.length; l++) {
      if (pala.charAt(i) == vog[l]) {
        document.getElementById("resultado").innerText += ` #${pala.charAt(i)}`;
      }
    }
    for (let z = 0; z < consoante.length; z++) {
      if (pala.charAt(i) == consoante[z]) {
        document.getElementById("erro").innerText += ` #${pala.charAt(i)}`;
      }
    }
  }
};

/* exercicio 16 */
const exercicio16 = () => {
    let num1 = document.getElementById("num1").value
    let resposta = document.getElementById("resultado")
    let error = document.getElementById("erro")
    let area = 0;
    if (num1 < 0) {
        resposta.innerHTML = "";
        error.innerHTML = "informe um numero positivo"
    } else {
        
        area = num1 ** 2 * Math.PI.toFixed(5);
        error.innerHTML = "";
        resposta.innerHTML = `A area do ciculo de raio ${num1} é = ${area} `
    }
};
/* exercicio 17 */

const exercicio17 = () => {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let error = document.getElementById("erro");
    let result = document.getElementById("resultado");
 
    if (num1 <= 0 || num2 <= 0) {
        error.innerHTML = `Favor informar uma palavra!`
        result.innerHTML = ""
    } else { 
        let area = (num1 * num2) / 2
        error.innerText = "";
        result.innerHTML = `A base ${num1} com a altura ${num2} resutará em: ${area}`
        }
};

/* exercicio 18 */
const exercicio18 = () => {
    let num1 = document.getElementById("num1").value * 1
    let num2 = document.getElementById("num2").value * 1 
    let num3 = document.getElementById("num3").value * 1
    let error = document.getElementById("erro");
    let result = document.getElementById("resultado");
    let soma = num1 + num2
    let multiplica = soma * num3 
 
    if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
        error.innerHTML = `Favor informar uma palavra!`
        result.innerHTML = ""
    } else { 
        error.innerText = "";
        result.innerHTML = `A base ${num1} com a altura ${num2} resutará em: ${multiplica / 2}`
        }
}
    
/* exercicio 19 */

const exercicio19 = () => {
    let data = document.getElementById("data").value
    let error = document.getElementById("erro");
    let result = document.getElementById("resultado");
    let dataNasc = new Date(data);
    let dataAtual = new Date();
    let diferenca = dataAtual.getTime() - dataNasc.getTime();
    const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
if (data == "")  {
    error.innerText = `digite uma data valida`
} else {
    error.innerHTML = ""
    result.innerText = `A idade é de ${idade}`;
}


};

/* exercicio 20 */

const exercicio20 = () => {let frase = document.getElementById("frase").value;
let error = document.getElementById("erro");
let result = document.getElementById("resultado");
error.innerText = "";
result.innerText = "";


let inversa = "";
if (frase == ""){
    error.innerText = "Favor informar uma frase!";
} else {
for (let i = 1; i <= frase.length; i++) {
  inversa += frase.charAt(frase.length - i);
}

result.innerText = inversa 
  };
};

const exercicio21 = () => {let frase = document.getElementById("frase").value;
let error = document.getElementById("erro");
let result = document.getElementById("resultado");
let novotexto = frase.split(" ");
error.innerText = "";
result.innerText = "";


if (frase == ""){
    error.innerText = "Favor informar uma frase!";
} else {
    result.innerText =  `${novotexto.join("")}`


  };
};

let soma = 0;
const exercicio22 = () => {
let num = document.getElementById("num").value;
let result = document.getElementById("resultado");
let error = document.getElementById("erro");

result.innerText = "";

if (soma <= 100) {
    soma += parseInt(num);
}
result.innerText = `a soma total é ${soma}`;
error.innerHTML = "";
};

const exercicio23 = () => {
    let frase = document.getElementById("frase").value;
    let pala = document.getElementById("palavra").value;
    frase = frase.toLowerCase();
    pala = pala.toLowerCase();
    let corte = frase.split(" ");
    let contador = 0;
    console.log(corte);
    if (frase == "" || pala == "") {
      document.getElementById("erro").innerText =
        "Escreva uma frase e uma palavra";
    } else {
      for (let i = 0; i < corte.length; i++) {
        if (corte[i] == pala) {
          contador++;
        }
      }
      document.getElementById(
        "resultado"
      ).innerText = `O número de vezes que ${pala} aparece é ${contador}`;
    }
  };

  
  const exercicio24 = () => {
    let resultado = document.getElementById("resultado");
  
    let valor = document.getElementById("frase").value;
    let frase = valor.split(" ");
    const array = [];
  
    let erro = document.getElementById("erro");
  
    if (valor == "") {
      erro.innerText = "Coloque um título!";
      resultado.innerHTML = "";
    } else {
      erro.innerText = "";
      const fraseMod = frase.map((palavra) => {
        const primeiraLetra = palavra[0].toUpperCase(); 
        array.push(primeiraLetra); 
        return primeiraLetra + palavra.slice(1); 
      });
      resultado.innerHTML = `<h1>${fraseMod.join(" ")}</h1>`;
    }
  };
const exercicio25 = () => {
    let num1 = document.getElementById("num1").value
    let num2 =  document.getElementById("num2").value
    let num3 =  document.getElementById("num3").value
    let result = document.getElementById("resultado");
    let error = document.getElementById("erro");
    let num = [num1, num2, num3]

    num.sort((a,b)=> a - b)
    if (num1 == "" || num2 == "" || num3 == "") {
        error.innerText = "Favor informar um numero!";
    
    } else {
        error.innerText = "" 
        result.innerText = num
    } 
    };
