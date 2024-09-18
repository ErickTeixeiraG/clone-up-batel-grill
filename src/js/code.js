console.log("Leu o arquivo'codigos js'");
// alert("Leu o arquivo'codigos js'");
var a = "Um texto";
console.log(a, typeof(a));
a = 10;
let b = 5;
console.log(a, b);
console.log(typeof(a), typeof(b));
console.log('a + b: ', (a + b));
console.log('a + b: ', ("0" + a + b)); //atenção
console.log('a + b: ', (a + "0" + b)); //atenção
console.log('a + b: ', (a + b + "0")); //atenção
console.log('a - b: ', (a - b));
console.log('a * b: ', (a * b));
console.log('a / b: ', (a / b));
console.log('a % b: ', (a % b));

// EXEMPLOS DE APLICAÇÃO
// var, let, const, string, number, boolean,
// operadores ( +, -, *, /, %, ++, --)
a = 10;
b = 5;
a++;
b--;
console.log('a: ', a, 'b: ', b);
console.log('a: ', a++, 'b: ', b--); // pós
console.log('a: ', a, 'b: ', b);
console.log('a: ', ++a, 'b: ', --b); // pré
console.log('a: ', a, 'b: ', b);

// EXEMPLOS DE APLICAÇÃO
// let a = 10; //atribuição simples
let e = 5; //atribuição simples
e += a; //atribuição com adição
console.log('e += a: ' + e);
e -= a; //atribuição com subtração
console.log('e -= a: ' + e);
e *= a; //atribuição com multiplicação
console.log('e *= a: ' + e);
e /= a; //atribuição com divisão
console.log('e /= a: ' + e);

