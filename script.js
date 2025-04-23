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
