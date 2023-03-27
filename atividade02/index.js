// ITEM 01
const buttonYes = document.querySelector(".botaoYes")

buttonYes.addEventListener("click", () => {

    console.log("Exclusäo dos dados confirmada!")
})

const buttonNo = document.querySelector(".botaoNao")

buttonNo.addEventListener("click", () => {

    console.log("Exclusão dos dados NÃO confirmada")
})



// ITEM 02

let listaAtividades = [];

const atividade2 = document.getElementById("formAtividade2")

const rows = document.getElementById('list-contacts')



atividade2.addEventListener("submit", (ev) => {
    ev.preventDefault();




    const name = document.getElementById("nomeAtividade").value;
    const description = document.getElementById("descricaoAtividade").value;

    const existe = listaAtividades.some((valor) => valor.name === name)

    if (existe) {
        alert("Você já cadastrou essa atividade")
        return
    }

    const novaAtividade = {
        id: new Date().getTime(),
        name,
        description,

    }

    listaAtividades.push(novaAtividade);
    addAtividade(novaAtividade);
    atividade2.reset();



})

function addAtividade(novaAtividade) {
    const row = document.createElement('div')
    row.setAttribute('class', 'row mt-5')

    const col = document.createElement('div')
    col.setAttribute('class', 'col-12')

    const accordion = document.createElement('div')
    accordion.setAttribute('class', 'accordion')
    accordion.setAttribute('id', 'accordionExample')

    const accordionItem = document.createElement('div')
    accordionItem.setAttribute('class', 'accordion-item')

    const h2Header = document.createElement('div')
    h2Header.setAttribute('class', 'accordion-header')
    h2Header.setAttribute('id', 'headingOne')

    const buttonText = document.createElement('button')
    buttonText.setAttribute('class', 'accordion-button')
    buttonText.setAttribute('type', 'button')
    buttonText.setAttribute('data-bs-toggle', 'collapse')
    buttonText.setAttribute('data-bs-target', '#collapseOne')
    buttonText.setAttribute('aria-expanded', 'true')
    buttonText.setAttribute('aria-controls', 'collapseOne')
    buttonText.innerHTML = novaAtividade.name


    const divText = document.createElement('div')
    divText.setAttribute('id', 'collapseOne')
    divText.setAttribute('class', 'ccordion-collapse collapse show')
    divText.setAttribute('aria-labelledby', 'headingOne')
    divText.setAttribute('data-bs-parent', '#accordionExample')

    const divMsg = document.createElement('div')
    divMsg.setAttribute('class', 'accordion-body')
    divMsg.innerHTML = novaAtividade.description


    h2Header.appendChild(buttonText)
    divText.appendChild(divMsg)

    accordionItem.appendChild(h2Header)
    accordionItem.appendChild(divText)

    accordion.appendChild(accordionItem)

    col.appendChild(accordion)

    row.appendChild(col)

    rows.appendChild(row)



}

// ATIVIDADE 3

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}


const toastTrigger1 = document.getElementById('liveToastBtn1')
const toastLiveExample1 = document.getElementById('liveToast1')
if (toastTrigger1) {
    toastTrigger1.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample1)

        toast.show()
    })
}
