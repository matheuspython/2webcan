const form = document.getElementById('cadastro-form');
function validarDigitoVerificadorRG(rg) {
// Remova qualquer caractere não numérico do RG
rg = rg.replace(/[^\d]+/g, '');

// Verifique se o RG tem um formato válido com 9 dígitos
if (rg.length !== 9) {
return false;
}

// Separe os dígitos do RG em um array
const digitos = rg.split('');

// Defina os pesos para cálculo dos dígitos
const pesos = [2, 3, 4, 5, 6, 7, 8, 9];

// Inicialize o total para cálculo
let total = 0;

// Calcule o total multiplicando cada dígito pelo peso correspondente
for (let i = 0; i < 8; i++) {
total += parseInt(digitos[i]) * pesos[i];
}

// Calcule o resto da divisão do total por 11
const resto = total % 11;

// Verifique se o dígito verificador é válido
let digitoVerificador = 11 - resto;
if (digitoVerificador === 10) {
digitoVerificador = 'X'; // Caso especial: dígito verificador X
} else if (digitoVerificador === 11) {
digitoVerificador = '0'; // Caso especial: dígito verificador 0
}

// Verifique se o dígito verificador calculado corresponde ao último dígito do RG
return digitoVerificador === digitos[8];
}

// Exemplo de uso:
const rg = "39.406.714-9"; // Substitua pelo RG que deseja validar
if (validarDigitoVerificadorRG(rg)) {
console.log("Dígito verificador válido");
} else {
console.log("Dígito verificador inválido");
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

    if (cpf == '' || cpf.length != 11) {
        return false;
    }

    // Validação do CPF
    let add = 0;
    for (let i = 0; i < 9; i++) {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) {
        rev = 0;
    }
    if (rev != parseInt(cpf.charAt(9))) {
        return false;
    }

    add = 0;
    for (let i = 0; i < 10; i++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) {
        rev = 0;
    }
    if (rev != parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const endereco = document.getElementById('endereco').value;
    const idade = document.getElementById('idade').value;
    const rg = document.getElementById('rg').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const clearValidationStyles = () => {
        const inputFields = document.querySelectorAll('input');
        inputFields.forEach(input => {
            input.style.border = '';
        });
    }

    clearValidationStyles();

    const errors = [];

    if (!nome) {
        errors.push('Nome é obrigatório.');
        document.getElementById('nome').style.border = '1px solid red';
    }

    if (!validarCPF(cpf)) {
        errors.push('CPF inválido.');
        document.getElementById('cpf').style.border = '1px solid red';
    }

    if (!validarDigitoVerificadorRG(rg)) {
        errors.push('RG inválido.');
        document.getElementById('rg').style.border = '1px solid red';
    }

    if (!endereco) {
        errors.push('Endereço é obrigatório.');
        document.getElementById('endereco').style.border = '1px solid red';
    }

    if (!idade) {
        errors.push('Idade é obrigatória.');
        document.getElementById('idade').style.border = '1px solid red';
    }

    if (!rg) {
        errors.push('RG é obrigatório.');
        document.getElementById('rg').style.border = '1px solid red';
    }

    if (!email) {
        errors.push('E-mail é obrigatório.');
        document.getElementById('email').style.border = '1px solid red';
    }

    if (!senha) {
        errors.push('Senha é obrigatória.');
        document.getElementById('senha').style.border = '1px solid red';
    }

    if (errors.length > 0) {
        alert('Por favor, corrija os seguintes erros:\n' + errors.join('\n'));
    } else {
        // Todos os campos estão preenchidos corretamente, você pode enviar o formulário.
        // form.submit();
    }
});