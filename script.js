// Cria variável do tipo array
var dadosLista = [];

function salvarDados(){
    let Descricao = document.getElementById("descricao").value; // Pega o valor do campo de texto
    if(Descricao == ""){ // Verifica se o campo está vazio
        alert("Campo vazio!"); // Alerta o usuário
            return; // Retorna para não executar o restante do código
        } else {
            dadosLista.push(Descricao); // Adiciona o valor do campo de texto no array
            document.getElementById("descricao").value = ""; // Limpa o campo de texto
            console.log(dadosLista); // Mostra o array atualizado no console
            criaLista(); // Chama a função para preencher a lista de cadastro
        }
    let Valor = document.getElementById("valor").value; // Pega o valor do campo de texto
    if(Valor == ""){ // Verifica se o campo está vazio
        alert("Campo vazio!"); // Alerta o usuário
            return; // Retorna para não executar o restante do código
        } else {
            dadosLista.push(Valor); // Adiciona o valor do campo de texto no array
            document.getElementById("valor").value = ""; // Limpa o campo de texto
            console.log(dadosLista); // Mostra o array atualizado no console
            criaLista(); // Chama a função para preencher a lista de cadastro
        }
    let Categoria = document.getElementById("categoria").value; // Pega o valor do campo de texto
    if(Categoria == ""){ // Verifica se o campo está vazio
        alert("Campo vazio!"); // Alerta o usuário
            return; // Retorna para não executar o restante do código
        } else {
            dadosLista.push(Categoria); // Adiciona o valor do campo de texto no array
            document.getElementById("categoria").value = ""; // Limpa o campo de texto
            console.log(dadosLista); // Mostra o array atualizado no console
            criaLista(); // Chama a função para preencher a lista de cadastro
        }
}
// Função para preencher a lista de cadastro

function criaLista(){
    let tabela = "<tr><td>Descrição</th><th>Valor</td><td>Categoria</th></tr>";
    for(let i = 0; i <= dadosLista.length-1; i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button onclick='limparTabela(this.parentNode.parentNode.rowIndex)'>limpar Lista</button><button' onclick='adicionar(this.parentNode.parentNode.rowIndex)'>adicionar</button></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }
}
// Função para calcular e exibir o total gasto
function atualizarTotal() {
    const tbody = document.getElementById('gastos-tbody');
    const linhas = tbody.getElementsByTagName('tr');
    let total = 0;

    // Itera pelas linhas da tabela e soma os valores
    for (let i = 0; i < linhas.length; i++) {
        const valorCelula = linhas[i].getElementsByTagName('td')[1].innerText; // Obtém o valor da segunda célula
        const valorNumerico = parseFloat(valorCelula.replace('R$', '').replace(',', '.')); // Remove "R$" e converte para número
        total += valorNumerico;
    }

    // Atualiza o elemento que exibe o total
    document.getElementById('total-gasto').innerText = `Total Gasto: R$ ${total.toFixed(2).replace('.', ',')}`;
}
// Função para adicionar um gasto à tabela
function adicionar() {
    const descricao = document.getElementById('descricao').value;
    const valor = document.getElementById('valor').value;
    const categoria = document.getElementById('categoria').value;

    if (descricao && valor && categoria) {
        const tbody = document.getElementById('gastos-tbody');
        const novaLinha = document.createElement('tr');

        // Verifica se o valor é maior que 100 para aplicar a classe
        const valorNumerico = parseFloat(valor);
        const classeValor = valorNumerico > 100 ? 'valor-alto' : '';

        novaLinha.innerHTML = `
            <td>${descricao}</td>
            <td class="${classeValor}">R$ ${valorNumerico.toFixed(2).replace('.', ',')}</td>
            <td>${categoria}</td>
            <td><button class="btn-excluir" onclick="excluirGasto(this)">Excluir</button></td>
        `;

        tbody.appendChild(novaLinha);

        // Limpa os campos do formulário
        document.getElementById('descricao').value = '';
        document.getElementById('valor').value = '';
        document.getElementById('categoria').value = 'Alimentação';

        // Atualiza o total gasto
        atualizarTotal();
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}
// Função para excluir um gasto específico
function excluirGasto(botao) {
    const linha = botao.parentNode.parentNode; // Obtém a linha correspondente ao botão
    linha.remove(); // Remove a linha da tabela

    // Atualiza o total gasto
    atualizarTotal();
}