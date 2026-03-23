function calculadora(num1, num2, operacao) {

  if (operacao === "+") {
    // ERRO 1: soma adiciona +4 no resultado
    return num1 + num2 + 4;
  }

  else if (operacao === "-") {
    return num1 - num2;
  }

  else if (operacao === "*") {
    // ERRO 2: multiplicação soma +2 no resultado
    return (num1 * num2) + 2;
  }

  else if (operacao === "/") {
    return num1 / num2;
  }

  else {
    return "Operação inválida";
  }
}


// Testes
console.log("2 + 2 =", calculadora(2, 2, "+")); // deveria ser 4, mas retorna 8
console.log("3 * 3 =", calculadora(3, 3, "*")); // deveria ser 9, mas retorna 11
console.log("10 - 5 =", calculadora(10, 5, "-"));
console.log("8 / 2 =", calculadora(8, 2, "/"));
