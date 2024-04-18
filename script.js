let nomeInput = document.getElementById('nome');
let telefoneInput = document.getElementById('telefone');
let tabelaContatos = document.getElementById('tabelaContatos').getElementsByTagName('tbody')[0];

function AdicionarNome() {
    let nomeValor = nomeInput.value.trim();
    if (nomeValor !== '') {
        let novaLinha = tabelaContatos.insertRow();
        let celulaNome = novaLinha.insertCell(0);
        let celulaTelefone = novaLinha.insertCell(1);
        celulaNome.textContent = nomeValor;
        nomeInput.value = '';
    } else {
        alert('Por favor, preencha o campo nome antes de adicionar à tabela.');
    }
}

function AdicionarTelefone() {
    let telefoneValor = telefoneInput.value.trim();
    if (telefoneValor !== '') {
        let ultimaLinha = tabelaContatos.rows[tabelaContatos.rows.length - 1];
        let celulaTelefone = ultimaLinha.insertCell(1);
        celulaTelefone.textContent = telefoneValor;
        telefoneInput.value = '';
    } else {
        alert('Por favor, preencha o campo telefone antes de adicionar à tabela.');
    }
}