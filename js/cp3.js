function validateFields() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validação do Primeiro Nome
    if (firstName.length < 5) {
        alert('O primeiro nome deve ter no mínimo 5 caracteres.');
        return;
    }

    // Validação do Segundo Nome
    if (lastName.length < 5) {
        alert('O segundo nome deve ter no mínimo 5 caracteres.');
        return;
    }

    // Validação do Email
    if (email.length < 5  || email.indexOf('@') === -1) {
        alert('O email deve ter no mínimo 5 caracteres e conter o caractere "@"');
        return;
    }

    // Validação da Senha
    if (password.length < 6  || password.length > 8) {
        alert('A senha deve ter entre 6 e 8 caracteres.');
        return;
    }

    // Validação da Confirmação de Senha
    if (password !== confirmPassword) {
        alert('A confirmação de senha deve ser igual à senha digitada.');
        return;
    }

    // Todas as validações passaram, então o formulário pode ser enviado
    alert('Formulário enviado com sucesso!');
}