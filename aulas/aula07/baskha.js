let proximoId = 1

function adicionarBaskha(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var linhas = document.getElementById('tabelaValores');
    var Id = linhas.getElementsByTagName('tr');
    var n = Id.length;
    var x1;
    var x2;
    var delta = ((b*b) - (4*a*c));
    if(a === '' || b === '' || c === '')
        window.alert("Preencha Todos os Valores do Formulário!");
    else if(delta<0){
        alert("O valor de delta é incompativel com a equação de segundo grau!");
    }
    else{
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
    }
    const tabela = document.getElementById('tabelaValores').getElementsByTagName('tbody') [0];

const blinha = tabela.insertRow();

const celn = blinha.insertCell(0);
const cela = blinha.insertCell(1);
const celb = blinha.insertCell(2);
const celc = blinha.insertCell(3);
const celx = blinha.insertCell(4);

celn.innerHTML = n;
cela.innerHTML = a;
celb.innerHTML = b;
celc.innerHTML = c;
celx.innerHTML = `x1: ${x1}<br> x2: ${x2}`;

proximoId++

document.getElementById("FormBaskha").reset();
}
