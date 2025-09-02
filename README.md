# Demo

Um app para capturar as breves epifanias da sua vida

## Sobre o app

A ideia do aplicativo é que ele sirva para fazer anotações, tendo como base gravações de audio.
O usuario pode gravar ideias, ideias musicais, trechos de musicas, historias do dia a dia e o que mais quiser. A criatividade é quem manda.

### Ambiente de desenvolvimento e ferramentas

- [Expo Router](https://docs.expo.dev/versions/latest/sdk/router)
- [Firebase](https://firebase.google.com/docs/firestore?hl=pt-br).

### Funcionalidades

- Gravar um audio 
- Salvar audio (local ou na nuvem)
- Excluir audio
- Editar informações do audio (nome, anotações)

> ### Possiveis Funcionalidades
> 
> Usar a API [cifraclub-api](https://github.com/code4music/cifraclub-api).
> A ideia é usa-la para apresentar cifras pro usuario enquanto ele grava algo, mas estou vendo se nessa versão vai dar tempo 

## Protótipos de tela

O Desing das três telas que possuo até o momento podem ser encontrada no [Figma](https://www.figma.com/design/dYXCACjfGhCD6eFqzoFpME/ToNote?node-id=69-9480&t=T8dDGtEqx2YNbeil-0)

>
> Também coloquei em uma [pasta do pinterest](https://br.pinterest.com/dasilvafadelfelipe/demo) algumas inspirações para aumentar o design futuramente
>

## Modelagem do banco

![Schema do banco de dados](https://i.pinimg.com/736x/db/c0/21/dbc021f87488b5930c377e9c98df3dd4.jpg)

Ainda não tenho certeza se o banco será remoto ou local, mas acredito que as gravações colocarei no FireBase e os detalhes em algo não relacional como em um sistema de arquivos JSON
O esquema se dará assim:


## Planejamento de sprints
