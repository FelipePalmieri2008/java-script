// script.js
function validarLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensagem = document.getElementById("mensagem");

    // Validação básica
    if (!email || !password) {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    // Validação de senha forte (pode ser personalizada)
    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
        mensagem.textContent = "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula e um número.";
        return;
    }

    // Verifica se as credenciais estão corretas (substituir por consulta a um banco de dados)
    if (email === "seu_email@example.com" && password === "sua_senha_forte") {
        // Armazenar as credenciais localmente (não recomendado para senhas reais)
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        mensagem.textContent = "Login realizado com sucesso!";
    } else {
        mensagem.textContent = "Email ou senha inválidos.";
    }
}
