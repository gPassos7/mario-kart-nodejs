# 🏁 Projeto Mario Kart - Simulador de Corrida

Este projeto foi desenvolvido como desafio de lógica de programação da **DIO**.  
A proposta é simular uma corrida inspirada no universo do Mario Kart, utilizando JavaScript para trabalhar conceitos como:

- estruturas condicionais
- funções
- objetos
- laços de repetição
- cálculos de pontuação
- organização da lógica do programa

---

## 🎮 Sobre o projeto

O jogo simula uma corrida entre dois personagens, onde cada rodada sorteia um tipo de bloco da pista:

- **RETA** → usa o atributo de **VELOCIDADE**
- **CURVA** → usa o atributo de **MANOBRABILIDADE**
- **CONFRONTO** → usa o atributo de **PODER**

A cada rodada, os jogadores rolam um dado e somam o valor ao atributo correspondente.  
Dependendo do tipo de bloco, o jogador pode ganhar pontos ou até fazer o adversário perder pontos.

No final, quem tiver mais pontos vence a corrida.

---

## 👥 Jogadores

Atualmente o projeto utiliza dois jogadores:

- **Mario**
- **Luide**

Cada jogador possui os seguintes atributos:

- `NOME`
- `VELOCIDADE`
- `MANOBRABILIDADE`
- `PODER`
- `PONTOS`

---

## 🧠 Estrutura da lógica

O projeto foi dividido em funções para deixar o código mais organizado e fácil de entender.

### `main()`
Função principal do jogo.  
Ela inicia a corrida e chama as funções responsáveis pela execução das rodadas e pela declaração do vencedor.

### `playerEngineStart(character1, character2)`
É a função principal da lógica do jogo.  
Responsável por:

- executar as rodadas
- sortear o tipo de bloco
- rolar os dados
- calcular o resultado de cada jogador
- atualizar a pontuação
- mostrar os acontecimentos no console

### `declareWinner(character1, character2)`
Responsável por exibir o placar final e informar quem venceu a corrida.

### Funções auxiliares
- `getRandomBlock()` → sorteia o tipo de pista
- `rollDice()` → gera um número aleatório de 1 a 6
- `logRollResult()` → exibe os resultados no console

---

## ⚙️ Tecnologias utilizadas

- **JavaScript**
- **Node.js**


## 📌 Exemplo de saída no console

```bash
🏁🚨 Corrida entre Mario e Luide começando...

🏁 Rodada 1
BLOCO: RETA
Mario 🎲 rolou um dado de VELOCIDADE 4 + 4 = 8
Luide 🎲 rolou um dado de VELOCIDADE 2 + 3 = 5
Mario marcou um ponto!
-----------------------------------------------
```

---

## 🚀 Aprendizados

Com este projeto, foi possível treinar:

- criação e uso de objetos
- separação de responsabilidades em funções
- uso de lógica condicional
- manipulação de variáveis
- simulação com números aleatórios
- organização da execução do programa

---

## 📚 Objetivo do desafio

Esse projeto foi criado com foco em praticar **lógica de programação** e melhorar a capacidade de transformar regras de jogo em código.
