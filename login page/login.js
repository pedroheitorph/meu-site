document.getElementById("loginButton").addEventListener("click", function () {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const messageDiv = document.getElementById("message");

    if (username === "") {
        messageDiv.textContent = "Por favor, preencha o nome de usuário.";
        messageDiv.classList.add("error");
    } else if (password === "") {
        messageDiv.textContent = "Digite sua senha.";
        messageDiv.classList.add("error");
    } else {
        messageDiv.textContent = `Bem-vindo, ${username}!`;
        messageDiv.classList.add("success");
    }
});
