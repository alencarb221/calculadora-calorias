function calcular() {
    // Capturando valores
    const sexo = document.getElementById("sexo").value;
    const idade = Number(document.getElementById("idade").value);
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);
    const fa = document.getElementById("fa").value;
    const resultado = document.getElementById("resultado");

    // Validação simples
    if (!sexo || !idade || !peso || !altura || !fa || fa === "escolha") {
        resultado.innerHTML = "<p>Preencha todos os campos corretamente.</p>";
        return;
    }

    // ===== Cálculo da TMB (Mifflin-St Jeor) =====
    let tmb;

    if (sexo === "homem") {
        tmb = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
    } else {
        tmb = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
    }

    // ===== Fator de atividade =====
    let fatorAtividade;

    switch (fa) {
        case "sedentario":
            fatorAtividade = 1.2;
            break;
        case "leve":
            fatorAtividade = 1.375;
            break;
        case "moderado":
            fatorAtividade = 1.55;
            break;
        case "intenso":
            fatorAtividade = 1.725;
            break;
        case "muito intenso":
            fatorAtividade = 1.9;
            break;
    }

    // ===== Cálculo do TMT =====
    const tmt = tmb * fatorAtividade;

    // ===== Objetivos =====
    const emagrecer = tmt - 500;
    const manter = tmt;
    const ganhar = tmt + 500;

    // ===== Exibição =====
    resultado.innerHTML = `
        <h3>Resultado</h3> <br>
        <p><strong>TMB:</strong> ${tmb.toFixed(0)} kcal</p> <br>
        <p><strong>TMT (manutenção):</strong> ${manter.toFixed(0)} kcal</p> <br>

        <h4>Objetivos</h4> <br>
        <p>🔻 <strong>Emagrecer:</strong> ${emagrecer.toFixed(0)} kcal/dia</p> <br>
        <p>⚖️ <strong>Manter peso:</strong> ${manter.toFixed(0)} kcal/dia</p> <br>
        <p>🔺 <strong>Ganhar peso:</strong> ${ganhar.toFixed(0)} kcal/dia</p>
    `;
}
