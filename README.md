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

### Sprint 5 (Semana 5)

- [ ] Implementar Tela de Detalhes do Áudio (nome + anotações).
- [ ] Criar segundo componente custom (ex: card/list item de gravação).
- [ ] Integrar gravação → salvar → exibir na tela inicial (com dados fake).

### Sprint 6 (Semana 6)

- [ ] Finalizar roteamento entre telas.
- [ ] Estilizar telas criadas.
- [ ] Configurar headers e meta-dados de navegação.

### Sprint 7 (Semana 7)

- [ ] Implementar fluxo de edição e exclusão de gravações (dados fake).
- [ ] Garantir 3 telas populadas com placeholders.
- [ ] Revisar consistência visual.

### Sprint 8 (Semana 8)

- [ ] Revisão geral para Checkpoint.
- [ ] Refino de UI/UX.
- [ ] Atualizar README.md com progresso e checklist.

### Sprint 9 (Semana 9 – Checkpoint Parcial)

- [ ] Entregar versão parcial
- [ ] Expo Router configurado.
- [ ] 3 telas criadas, estilizadas e navegáveis.
- [ ] 2 componentes custom implementados.
- [ ] Telas populadas com dados fake.
- [ ] README.md atualizado com seção “Atualizações desde o último checkpoint”.

### Sprint 10 (Semana 10)

- [ ] Integrar Firebase (upload de áudios reais).
- [ ] Armazenar metadados (nome, anotações, data).
- [ ] Testes de persistência.

### Sprint 11 (Semana 11)

- [ ] Listagem de gravações usando dados reais.
- [ ] Implementar edição de gravações (Firebase).
- [ ] Ajustar fluxo de exclusão no banco.

### Sprint 12 (Semana 12)

- [ ] Testes em dispositivos/emuladores.
- [ ] Correção de bugs.
- [ ] Preparação para build final (APK).

### Sprint 13 (Semana 13)

- [ ] Adicionar validações de entrada (nome, anotações).
- [ ] Exibir feedback visual de erros.
- [ ] Refinar.

### Sprint 14 (Semana 14)

- [ ] Corrigir o nescessario
- [ ] Atualizar README.md com últimas tarefas.

### Sprint 15 (Semana 15 – Entrega Final)

- [ ] Gerar release (APK) no GitHub.
- [ ] Gravar vídeo final.
