
//DOM js.
const input = document.querySelector(".inputValue");
const btnPlus = document.querySelector(".addBtn");
const listaCompleta = document.querySelector(".lista");

let myTarefas = [];//array.

// Adiciona tarefa no array e chama a próxima function.
function adicionar(){
    myTarefas.push(input.value);
    input.value = '';
    creatorTarefas();
    console.log("Adicionar");
}

//Criar as tarefas e mostrar na tela e colocar um evento onclick="remover()",chamando a próxima function.
function creatorTarefas(){ 
    var criarLi = "";
    myTarefas.forEach((elemento, index) =>{
        criarLi += `<li>
                        <h3 class="nTarefa">${elemento}</h3>
                        <button class="remover" onclick="remover(${index})">Remover</button>
                    </li>`;
    })

    listaCompleta.innerHTML = criarLi;
   
    console.log("criar");
}

// remover a tarefa de acordo com o index.
function remover(index){
    myTarefas.splice(index, 1);
    creatorTarefas();
    console.log("remover");
}

btnPlus.addEventListener("click", adicionar)// Evento inicial de adicionar tarefa


