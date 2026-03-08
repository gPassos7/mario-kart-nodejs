const Player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const Player2 = {
    NOME: "Luide",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
            break;
    }

    return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(
        `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`
    );
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function playerEngineStart(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        let block = await getRandomBlock();
        console.log(`BLOCO: ${block}`);

        let rollDice1 = await rollDice();
        let rollDice2 = await rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === "RETA") {
            totalTestSkill1 = rollDice1 + character1.VELOCIDADE;
            totalTestSkill2 = rollDice2 + character2.VELOCIDADE;

            await logRollResult(character1.NOME, "VELOCIDADE", rollDice1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "VELOCIDADE", rollDice2, character2.VELOCIDADE);
        }

        else if (block === "CURVA") {
            totalTestSkill1 = rollDice1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = rollDice2 + character2.MANOBRABILIDADE;

            await logRollResult(character1.NOME, "MANOBRABILIDADE", rollDice1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "MANOBRABILIDADE", rollDice2, character2.MANOBRABILIDADE);
        }

        else if (block === "CONFRONTO") {
            let powerResult1 = rollDice1 + character1.PODER;
            let powerResult2 = rollDice2 + character2.PODER;

            console.log("==================== VS ====================");
            console.log(`${character1.NOME} confrontou ${character2.NOME}`);
            console.log("============================================");

            await logRollResult(character1.NOME, "PODER", rollDice1, character1.PODER);
            await logRollResult(character2.NOME, "PODER", rollDice2, character2.PODER);

            if (powerResult1 > powerResult2) {
                if (character2.PONTOS > 0) {
                    character2.PONTOS--;
                    console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto.`);
                } else {
                    console.log(`${character1.NOME} venceu o confronto, mas ${character2.NOME} não tinha pontos para perder.`);
                }
            } else if (powerResult2 > powerResult1) {
                if (character1.PONTOS > 0) {
                    character1.PONTOS--;
                    console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto.`);
                } else {
                    console.log(`${character2.NOME} venceu o confronto, mas ${character1.NOME} não tinha pontos para perder.`);
                }
            } else {
                console.log("Confronto empatado! Nenhum ponto foi perdido.");
            }
        }

        if (block !== "CONFRONTO") {
            if (totalTestSkill1 > totalTestSkill2) {
                console.log(`${character1.NOME} marcou um ponto!`);
                character1.PONTOS++;
            } else if (totalTestSkill2 > totalTestSkill1) {
                console.log(`${character2.NOME} marcou um ponto!`);
                character2.PONTOS++;
            } else {
                console.log("Empate na rodada, ninguém pontuou.");
            }
        }

        console.log("-----------------------------------------------");
    }
}

async function declareWinner(character1, character2) {
    console.log("================ Resultado ==================");
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

    if (character1.PONTOS > character2.PONTOS) {
        console.log(`${character1.NOME} venceu a corrida! Parabéns!`);
    } else if (character2.PONTOS > character1.PONTOS) {
        console.log(`${character2.NOME} venceu a corrida!`);
    } else {
        console.log("A corrida empatou!");
    }

    console.log("=============================================");
}

(async function main() {
    console.log(`🏁🚨 Corrida entre ${Player1.NOME} e ${Player2.NOME} começando...\n`);
    await playerEngineStart(Player1, Player2);
    await declareWinner(Player1, Player2);
})();