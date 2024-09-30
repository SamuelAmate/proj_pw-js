let proximoId = 1

function adicionarLinha(){
    //Entrada de valores do formulário
    const idis = document.getElementById("idis").value;
    const nome = document.getElementById("nome").value;
    const marca = document.getElementById("marca").value;
    const segmento = document.getElementById("segmento").value;
    const preco = document.getElementById("preco").value;
    const venda = document.getElementById("venda").value;

    //Se for preenchido vazio
    if(idis === '' || nome === '' || marca === ''|| segmento === '' || preco === ''|| venda === '')
        alert("Preencha os valores do formulário!")
    else {
        //Cria uma linha na tabela se não existir
const tabela = document.getElementById("tabelaDados") .getElementsByTagName('tbody') [0];
//Inserindo uma nova linha
const novalinha = tabela.insertRow();

//Inserindo os valores da linha
const celId = novalinha.insertCell(0);
const celNome = novalinha.insertCell(1);
const celMarca= novalinha.insertCell(2);
const celSegmento = novalinha.insertCell(3);
const celPreco = novalinha.insertCell(4);
const celVenda = novalinha.insertCell(5);

//Inserindo os valores dentro das celulas
celId.innerHTML = idis;
celNome.innerHTML = nome;
celMarca.innerHTML = marca;
celSegmento.innerHTML = segmento;
celPreco.innerHTML = preco;
celVenda.innerHTML = venda;

proximoId++

//Limpar formulário 
document.getElementById("linhaForm").reset();
    }
}
