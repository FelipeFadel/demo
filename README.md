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
> Usar a `API` [cifraclub-api](https://github.com/code4music/cifraclub-api).
> A ideia é usa-la para apresentar cifras pro usuario enquanto ele grava algo, mas estou vendo se nessa versão vai dar tempo 

## Protótipos de tela

O Desing das três telas que possuo até o momento podem ser encontrada no [Figma](https://www.figma.com/design/dYXCACjfGhCD6eFqzoFpME/ToNote?node-id=69-9480&t=T8dDGtEqx2YNbeil-0)

>
> Também coloquei em uma [pasta do pinterest](https://br.pinterest.com/dasilvafadelfelipe/demo) algumas inspirações para aumentar o design futuramente
>

## Modelagem do banco

Ainda não tenho certeza se o banco será remoto ou local, mas acredito que as gravações colocarei no FireBase e os detalhes em algo não relacional como em um sistema de arquivos `JSON`
O esquema se dará assim:

![Schema do banco de dados](https://i.pinimg.com/736x/db/c0/21/dbc021f87488b5930c377e9c98df3dd4.jpg)

## Atualizações desde o último checkpoint

### Recursos usados dos módulos
- Usei a biblioteca `React Native Elements` para facilitar o uso de alguns componentes, como `Button`, `Input` e `Card`;
- Até o próximo checkpoint, pretendo utilizar o `NativeWind` para aprimorar o design e deixar a interface mais consistente;
- Utilizei o `Expo Router` em toda a navegação;
- Tentei dividir as *pull requests* da melhor forma possível, mas elas não seguem exatamente as *sprints*;
  - Foram criadas *issues* com algumas *tasks* para cada *pull request*;
  - Uma *PR* que está fechada foi feita diretamente pelo terminal, pois meu GitHub ficou fora do ar por um tempo.

### Boas práticas utilizadas até agora (pretendo aplicar mais até o próximo checkpoint)
- Uso de *mocks* para popular a aplicação;
- Criação de vários componentes personalizados para evitar código poluído;
- Desenvolvimento de um *hook* personalizado para as funções de gravação e reprodução:
  - Usei a biblioteca `expo-av`;
  - O *hook* foi construído com base na documentação oficial da biblioteca;
- Isolamento de componentes repetidos, como os botões da tela inicial.


## Planejamento de sprints

### Sprint 5 (Semana 5)

- [x] Implementar Tela de Detalhes do Áudio (nome + anotações).
- [x] Criar segundo componente custom (ex: `card/list` item de gravação).
- [x] Integrar gravação → salvar → exibir na tela inicial (com dados fake).

### Sprint 6 (Semana 6)

- [x] Finalizar roteamento entre telas.
- [x] Estilizar telas criadas.
- [x] Configurar `headers` e `meta-dados` de navegação.

### Sprint 7 (Semana 7)

- [ ] Implementar fluxo de edição e exclusão de gravações (dados fake).
- [x] Garantir 3 telas populadas com `placeholders`.
- [x] Revisar consistência visual.

### Sprint 8 (Semana 8)

- [x] Revisão geral para Checkpoint.
- [x] Refino de `UI/UX`.
- [x] Atualizar `README.md` com progresso e checklist.

### Sprint 9 (Semana 9 – Checkpoint Parcial)

- [x] Entregar versão parcial
- [x] Expo Router configurado.
- [x] 3 telas criadas, estilizadas e navegáveis.
- [x] 2 componentes custom implementados.
- [x] Telas populadas com dados fake.
- [x] `README.md` atualizado com seção “Atualizações desde o último checkpoint”.

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
