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


    if (lastName.length < 5) {
        alert('O segundo nome deve ter no mínimo 5 caracteres.');
        return;
    }


    if (email.length < 5  || email.indexOf('@') === -1) {
        alert('O email deve ter no mínimo 5 caracteres e conter o caractere "@"');
        return;
    }


    if (password.length < 6  || password.length > 8) {
        alert('A senha deve ter entre 6 e 8 caracteres.');
        return;
    }

    if (password !== confirmPassword) {
        alert('A confirmação de senha deve ser igual à senha digitada.');
        return;
    }


    alert('Formulário enviado com sucesso!');
}

//Função para alternar o modo claro/escuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}