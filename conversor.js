function mostra(frase) {
    document.write(frase)
    document.write("<br>")
}

function mostra2(frase) {
    document.write(frase)
    document.write("<br>")
    document.write("<br>")
}

/*{
    mostra2("Converte para decimal nas bases binário, octal e hexadecimal")

    const input = prompt("Escreva um número");

    mostra2("Número escolhido: " + input)

    mostra("Decimal: " + Number.parseInt(input));
    mostra("Binário: " + Number.parseInt(input, 2));
    mostra("Octal: " + Number.parseInt(input, 8));
    mostra2("Hexadecimal: " + Number.parseInt(input, 16));
}*/

{
    mostra2("Converte decimal para as bases binário, octal e hexadecimal");

    let input = Number(prompt("Escreva um número DECIMAL"));

    mostra2("Número escolhido: " + input)

    mostra(input + " de decimal para decimal: " + input);
    mostra(input + " de decimal para binário: " + input.toString(2));
    mostra(input + " de decimal para octal: " + input.toString(8));
    mostra(input + " de decimal para hexadecimal: " + input.toString(16));
}