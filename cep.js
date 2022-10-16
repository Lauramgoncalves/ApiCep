const InputCep = document.getElementById('cep');
const buscar = document.getElementById('buscar');
const resultado = document.querySelector('.resultado');

buscar.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    const cep = InputCep.value;
    buscaCep(cep)
    
}

function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.text())
    .then(body => {
        resultado.innerText = body;
})
}


