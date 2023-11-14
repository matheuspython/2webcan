const form = document.getElementById('cadastro-form');

function validarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]+/g, '');

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

    // Removido o trecho de validação do RG
    // if (!validarDigitoVerificadorRG(rg)) {
    //     errors.push('RG inválido.');
    //     document.getElementById('rg').style.border = '1px solid red';
    // }

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
