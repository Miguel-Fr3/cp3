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
//function toggleDarkMode() {
    //document.body.classList.toggle('dark-mode');
//}
// variavel checkbox
const checkbox = document.querySelector('.checkbox');

// adição do eventlistener pra trocar o tema
checkbox.addEventListener('change', function() {

  const body = document.body;

  body.classList.toggle('form-check-escuro');

});
//tema claro
function applyLightModeStyles() {
  const form = document.querySelector('form');
  form.classList.remove('form-check-escuro');

  const title = document.querySelector('h1');
  title.classList.remove('dark');

  const formElements = form.querySelectorAll('label, input[type="text"], input[type="email"], input[type="password"], button[type="submit"], .error');
  formElements.forEach(element => {
    element.classList.remove('form-check-escuro');
  });
}
//tema escuro
function applyDarkModeStyles() {
  const form = document.querySelector('form');
  form.classList.add('form-check-escuro');

  const title = document.querySelector('h1');
  title.classList.add('form-check-escuro');

  const formElements = form.querySelectorAll('label, input[type="text"], input[type="email"], input[type="password"], button[type="submit"], .error');
  formElements.forEach(element => {
    element.classList.add('form-check-escuro');
  });
}

const form = document.getElementById("registration");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para testar a validação

    validateFields();
});

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
    if (email.length < 5 || email.indexOf('@') === -1) {
        alert('O email deve ter no mínimo 5 caracteres e conter o caractere "@"');
        return;
    }

    // Validação da Senha
    if (password.length < 6 || password.length > 8) {
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
