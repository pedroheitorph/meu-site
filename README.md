# EXERCÍCIO - Criando um site

## 📌 Tópicos abordados
- [x] Cabeçalho com a logo.
- [x] Menu de inteação "sobre" "serviços" "contato/orçamento".
- [x] Imagens centalizadas.
- [x] Descrição da empresa, serviços e afins... todos centralizados e justificados.
- [ ] Colocar foto de background para o site inteiro.
- [ ] Adicionar botão de interação direto para wpp business.
- [ ] 

## 📝 Conteúdo da Aula
Nesta aula aprendi os principios básicos da linguagem HTML, também como funçoes que facilitam sua escrita e visualizacao.

## 💻 Código de Exemplo
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Olins</title>
    <link rel="icon" href="/SITE-OLINS/logo.PNG" type="image/png">
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://unpkg.com">
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <style>
        body {
            text-align: center;
            background: url('/SITE-OLINS/fotos/foto7.jpg') no-repeat center center fixed;
            background-size: cover;
            position: relative;
        }
        body::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.5);
            z-index: -1;
        }
        section {
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }
        section p {
            text-align: justify;
        }
        .imagem-padrao {
            display: block;
            margin: 0 auto;
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            width: 100%;
            max-width: 400px;
        }
        #map {
            margin: 0 auto;
            display: block;
        }
        nav ul {
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: center;
            gap: 20px;
        }
        nav ul li {
            display: inline;
        }
        nav ul li a {
            text-decoration: none;
            color: black;
            font-weight: bold;
        }
        #servicos {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <img src="/SITE-OLINS/logo.PNG" alt="Logomarca Olins" class="logo" width="200">
            <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="sobre">
            <h1>Quem Somos?</h1>
            <p>A <b>Olins</b> é um projeto criado para conectar casamentos às músicas, histórias e melodias que mais refletem a trajetória dos noivos.</p>
            <p>Nos bastidores, somos um casal completamente apaixonado por música,</p>
            <p>que entende o poder que ela tem para trazer as melhores emoções ao seu dia especial, e que sabe que momentos assim não tem preço.</p>
            <img src="/SITE-OLINS/fotos/foto0.JPG" alt="Sobre nós" class="imagem-padrao" width="500">
        </section>
        
        <section id="servicos">
            <h2>O que fazemos?</h2>
            <p>Cantamos histórias, transformamos momentos únicos em experiências emocionantes e inesquecíveis.</p>
            <p>Nossa missão é trazer emoção, leveza e sofisticação para sua cerimônia com:</p>
            <ul>
                <li>As melhores vozes e músicos selecionados</li>
                <li>Formações personalizadas para cada evento.</li>
                <li>Repertórios que contam a sua história.</li>
            </ul>
            <img src="/SITE-OLINS/fotos/foto1.JPG" alt="Nossos serviços" class="imagem-padrao" width="500">
        </section>
        
        <section id="contato">
            <h2>Entre em Contato</h2>
            <form>
                <input type="text" name="nome" placeholder="Digite seu Nome" required>
                <input type="email" name="email" placeholder="Seu Melhor E-mail" required>
                <textarea name="mensagem" placeholder="Escreva sua Mensagem" required></textarea>
                <button type="submit">Enviar Mensagem</button>
            </form>
        </section>
    </main>
    
</body>
</html>
