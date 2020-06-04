function populateUfs(){
    const ufSelect = document.querySelector('select[name=uf]')
    console.log('teste')

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estudos')
    .then(res => res.json() )
    .then( states =>{
         
        for(const state of states ){
            ufSelect.innerHTML += `<option value= "${state.id}">${state.nome}</option>`
        }
    })
}

populateUfs()


document
    .querySelector("select[name=uf]")
    .addEventListener("change", () => {
        Console.loge("oi")
    })