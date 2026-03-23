function calculadora(num1, num2, operacao) {

  if (operacao === "+") {

    return num1 + num2;
  }

  else if (operacao === "-") {
    return num1 - num2;
  }

  else if (operacao === "*") {
    // ERRO 2: multiplicação soma +2 no resultado : corrigido
    return (num1 * num2);
  }

  else if (operacao === "/") {
    return num1 / num2;
  }

  else {
    return "Operação inválida";
  }
}


// Testes
console.log("2 + 2 =", calculadora(2, 2, "+")); 
console.log("3 * 3 =", calculadora(3, 3, "*")); 
console.log("10 - 5 =", calculadora(10, 5, "-"));
console.log("8 / 2 =", calculadora(8, 2, "/"));
