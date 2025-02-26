# Aula LOGIN - Aula sobre Login

## 📌 Tópicos abordados
- [x] Aprendendo a fazer campos para nome de usuário e senha.
- [x] Criando um botão de login
- [x] Exibir alerta com mensagem de "Bem-vindo""
- [x] Exibindo alerta caso campo esteja vazio
- [x] Estrutura de arquivos (index.html + style.css + script.js)

## 📝 Conteúdo da Aula
Nessa aula aprendi a como estruturar uma página simples de login, com nome de usuário e senha. Acessando corretamente, o usuário recebe uma mensagem de boas vindas. Caso contrário, se o usuário preenche o nome de usuário, ou sua senha, de forma incorreta, é exibido um aviso.
Também tive a parte de aprendizado para estilizar essa página, usando css e js.

## 💻 Código de Exemplo
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="container">
        <h1>Login</h1>
        <form id="loginForm">
            <label for="username">Nome de Usuário</label>
            <input type="text" id="username" placeholder="Digite seu nome de usuário">

            <label for="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha">

            <button type="button" id="loginButton">Login</button>
        </form>
        <div id="message" class="message"></div>
    </div>
    <script src="login.js"></script>
</body>
<footer>
    <div class="container">
        <h1>Login</h1>
        <form id="loginForm">
            <label for="username">Nome de Usuário</label>
            <input type="text" id="username" placeholder="Digite seu nome de usuário">

            <label for="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha">

            <button type="button" id="loginButton">Login</button>
        </form>
        <div id="message" class="message"></div>
    </div>
</footer>
</html>

### 🟢 JavaScript
```javascript
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

`(### CSS`)
```css
/* Importa a fonte Roboto do Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

/* Centraliza o conteúdo na página */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: black;
}

/* Estiliza o contêiner principal */
body, .container {
    background-color: whitesmoke;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    width: 300px;
    text-align: center;
    transition: box-shadow 0.3s ease;
}

/* Efeito ao passar o mouse na caixa de login */
.container:hover {
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
}

/* Estiliza os títulos */
h1 {
    font-weight: 700;
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
}

/* Centraliza os elementos do formulário */
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Estiliza os rótulos */
label {
    font-weight: 400;
    font-size: 14px;
    color: #555;
    display: block;
    margin-bottom: 5px;
    text-align: center;
    width: 60%;
}

/* Estiliza os campos de entrada */
input {
    width: 60%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 300;
}

/* Adiciona efeito ao focar nos inputs */
input:focus {
    outline: none;
    border-color: #007BFF;
    box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.5);
}

/* Estiliza o botão */
button {
    width: 67.5%;
    padding: 10px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

/* Efeito ao passar o mouse no botão */
button:hover {
    background-color: #0056b3;
}

/* Mensagens de erro e sucesso */
.message {
    margin-top: 15px;
    font-size: 14px;
    text-align: center;
    color: #333;
}

.message.error {
    color: #e74c3c;
}

.message.success {
    color: #2ecc71;
}

