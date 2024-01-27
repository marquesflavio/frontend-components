function validarCPF(cpf: string) {
    cpf = cpf.replace(/[^\d]+/g,''); // Remove caracteres não numéricos

    if(cpf.length !== 11 || /^(.)\1+$/.test(cpf)) return false; // Verifica se o CPF tem 11 dígitos e não é uma sequência repetida

    var soma = 0;
    for (var i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    var resto = soma % 11;
    var digitoVerificador1 = (resto < 2) ? 0 : 11 - resto;

    if (parseInt(cpf.charAt(9)) !== digitoVerificador1) return false;

    soma = 0;
    for (var i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = soma % 11;
    var digitoVerificador2 = (resto < 2) ? 0 : 11 - resto;

    return parseInt(cpf.charAt(10)) === digitoVerificador2;
}
