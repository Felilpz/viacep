let consult = document.querySelector('#consultar')

consult.addEventListener('click', () => {
    let cep = document.querySelector('#cep').value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data)

                let body = document.querySelector('#resultado')
                let p = document.createElement('p')

                p.innerHTML = `
                <p>Bairro: ${data.bairro}</p>
                <p>Cidade: ${data.localidade}</p>
                <p>Cep: ${data.cep}</p>
                <p>Logradouro: ${data.logradouro}</p>
                <p>UF: ${data.uf}</p>
                `

                body.appendChild(p)
            })
        })
})