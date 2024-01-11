const input = document.querySelector(".input");
const form = document.querySelector('.form')
const btn = document.querySelector('.btn');
const listaTarefas = document.querySelector(".listadetarefas");

function criali(){
    const li = document.createElement('li')
    li.setAttribute('class','flex')
    return li

}
function criainput(li){
    const inp = document.createElement('input')
    inp.setAttribute('type','checkbox')
    inp.setAttribute('class','check')
    li.appendChild(inp)
    
    
}

function criabutton(li){
    const btnremove = document.createElement('button')
    btnremove.innerHTML = '<span class="icon-cancel-circle">'
    btnremove.setAttribute('class','apagar')
    li.appendChild(btnremove)

    

}
function criaLabel(text){
    const label = document.createElement('label')

    label.innerText = text
    return label
}
form.addEventListener('submit',function(evento){
    evento.preventDefault()
    if(!input.value) return;
    criarTarefa(input.value)
    
})
function limpa(){
    input.value = ''
    input.focus()
}
function criarTarefa(tarefa){
    const t = criaLabel(tarefa);
    const li= criali()
    listaTarefas.appendChild(li)
    criainput(li)
    li.appendChild(t)
    criabutton(li)
    limpa()
    salvar()


}
function salvar(){
    const tarefas = document.querySelectorAll('li')
    const listaDeTarefas = []

    for (const t of tarefas) {
        let tarefaTEXT = t.innerText
        listaDeTarefas.push(tarefaTEXT)
    }
    const TarefaJSON= JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas',TarefaJSON)
    
}
addTarefas()

function addTarefas(){
    const t =localStorage.getItem('tarefas');
    const a =JSON.parse(t)
    for (const i of a) {
        criarTarefa(i)
        document.addEventListener('click', function(e) {
    const el = e.target;


    if (el.type === 'checkbox') {
        const sibling = el.nextElementSibling;

        if (sibling) {
            if (el.checked) {
                sibling.classList.add('risco');
                
            } else {
                sibling.classList.remove('risco');
                
            }
        }
    }
});
    }
}
document.addEventListener('click',function(e){
    const el = e.target
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvar()
    }
})
document.addEventListener('click', function(e) {
    const el = e.target;


    if (el.type === 'checkbox') {
        const sibling = el.nextElementSibling;

        if (sibling) {
            if (el.checked) {
                sibling.classList.add('risco');
                
            } else {
                sibling.classList.remove('risco');
                
            }
        }
    }
});