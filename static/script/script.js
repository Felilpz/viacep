let cepInput = document.querySelector('#cep');

cepInput.addEventListener('input', () => {
    let cep = cepInput.value;

    if (cep.length === 8) {
        consultarCEP(cep);
    }
});

function consultarCEP(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data);

                let body = document.querySelector('#resultado');
                let p = document.createElement('p');

                while (body.firstChild) {
                    body.removeChild(body.firstChild)
                }

                p.innerHTML = `
                <p>Bairro: ${data.bairro}</p>
                <p>Cidade: ${data.localidade}</p>
                <p>Cep: ${data.cep}</p>
                <p>Logradouro: ${data.logradouro}</p>
                <p>UF: ${data.uf}</p>
                `;

                body.appendChild(p);
                cepInput.value = ''
            });
        });

}
