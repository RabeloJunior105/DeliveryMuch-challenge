# Desafio Delivery Much

Desafio [clique aqui](https://github.com/delivery-much/challenge)

## Instalação

Use o gerenciamento de pacote [npm](https://nodejs.org/en/) ou [yarn](https://yarnpkg.com/) para efetuar a instalação das dependencias.

## VARIÁVEIS GLOBAIS
Crie um arquivo .env copie as informações do arquivo .env-example e cole no seu .env com as credenciais do [GIPHY](https://developers.giphy.com/docs/sdk), assim você conseguira ter o retorno das gifs de cada receita

## INICIALIZAÇÃO O PROJETO
Para iniciarmos a aplicação, necessitamos instalar todas as dependencias

Rode os seguintes comandos:

```bash
npm install ou yarn
```
Depos rode o seguinte comando para startar a aplicação em mode DEV
```bash
npm start:dev
```

### Acesse a aplicação
Em seu navegador

## SOBRE AS ROTAS

URL E PORTA BASE PARA ACESSO DA API LOCAL
```bash
http://localhost:3333
```
ROTA DE LISTAGEM

```bash
[GET] /recipies/?i={ingredient_1},{ingredient_2}
```
RETORNO
```JSON
{
  "keywords": [
    "cherry"
  ],
  "recipies": [
    {
      "title": "Fresh Mozzarella Kabobs",
      "ingredients": [
        "balsamic vinaigrette",
        "cherry",
        "grape tomatoes"
      ],
      "link": "http://www.kraftfoods.com/kf/recipes/fresh-mozzarella-kabobs-55734.aspx",
      "gif": "https://media2.giphy.com/media/vV81KcJ9Eu15m/giphy.gif?cid=765a8170fc10ruwbmcfgd4bodg2ijeiac0bj6zfwo6w5jxft&rid=giphy.gif"
    },
  ]
}
```


## License
[Junior Rabelo](https://github.com/delivery-much/challenge)
