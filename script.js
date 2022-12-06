const buscaCnpj = () => {
    cnpj = document.getElementById('cnpj').value
    const settings = {
        "dataType": "jsonp",
        "url": "https://receitaws.com.br/v1/cnpj/" + cnpj,
        "type": "GET"
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        document.getElementById('nome_empresa').innerHTML = response.nome + '; <b>CNPJ:</b> ' + response.cnpj 
                                + '; <b>situada na</b> ' + response.logradouro + ', Nº ' + response.numero
                                + ', ' + response.complemento + ', ' + response.bairro + ', ' + response.municipio + ' - ' + response.uf
                                + '; <b>Representada pelo Sr(a):</b> XXXXXXXXXXXXXXXXX; <b>CPF:</b> XXXXXXXXXXXX';
      });
}


document.querySelector('#busca').addEventListener('click', buscaCnpj)

