# Aula 01 - HTML BÁSICO

## 📌 Tópicos abordados
- [x] Títulos e tamanhos
- [x] Parágrafos
- [x] Fontes e formatações
- [x] Marcadores "ul" 
- [x] Tópicos ordenados "ol"
- [x] Estilizacao por meio de CSS dentro do HTML

## 📝 Conteúdo da Aula
Nesta aula aprendi os principios básicos da linguagem HTML, também como funçoes que facilitam sua escrita e visualizacao.

## 💻 Código de Exemplo
```html
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Aula 01</title>
    </head>

    <body style="background-color: grey;"> 
        <div class="container" style="color: red;">
            <h1>Título Principal</h1>
            <h2>Título 2</h2>
            <h3 style="color: aquamarine;">Título 3</h3>
            <h4>Título 4</h4>
            <h5>Título 5</h5>
            <h6>Título 6</h6> <!-- ANOTAÇOES DE RODA PÉ -->    
        </div>

        <br> <!-- ALT cima ou baixo (move as tags de lugar -->
        <br> <!-- ALT + SHIFT duplica pra cima ou pra baixo -->
        <p>Parágrafo de exemplo</p>
        <p><b>negrito</b></p> 
        <p><u>sublinhado</u></p> 
        <p><i>itálico</i></p> 

        <p>o time <span style="color: green;">Brasil</span> venceu </p> <!-- jeito de colocar css sem a .page -->

        <ul> <!-- são marcadores -->
            <li>head</li> 
            <li>body</li>
            <li>footer</li>
        </ul>
        <ol> <!-- são tópicos ordenados 1,2,3... -->
            <li>head</li> 
            <li>body</li>
            <li>footer</li>
        </ol>
    </body>

</html>

