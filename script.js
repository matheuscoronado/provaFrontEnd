// Cria variável do tipo array
var dadosLista = [];

function salvarDados(){
    let Descricao = document.getElementById("nameUser").value; // Pega o valor do campo de texto
    if(Descricao == ""){ // Verifica se o campo está vazio
        alert("Campo vazio!"); // Alerta o usuário
            return; // Retorna para não executar o restante do código
        } else {
            dadosLista.push(Descricao); // Adiciona o valor do campo de texto no array
            document.getElementById("nameUser").value = ""; // Limpa o campo de texto
            console.log(dadosLista); // Mostra o array atualizado no console
            criaLista(); // Chama a função para preencher a lista de cadastro
        }
}