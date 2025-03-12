//ao atingir os 8 digitos automaticamente vai chamar a API e preencher os demais campos do endereço
document.getElementById('cep').addEventListener('input', function() {
    const cepInput = document.getElementById('cep').value.trim();
    
    // Verifica se o CEP tem 8 dígitos e se ele pode ser convertido em numerico antes de realizar a busca
    if (cepInput.length === 8 && isNaN(cepInput)===false) {
        buscarCEP(cepInput);
    }
});



// Função principal para buscar o CEP
function buscarCEP() {
    const cepInput = document.getElementById('cep').value.trim();   
    const cidade = document.getElementById('cidade')
    const logradouro = document.getElementById('logradouro')
    const uf = document.getElementById('uf')
    const bairro = document.getElementById('bairro')   

    // URL da API ViaCEP
    const url = `https://viacep.com.br/ws/${cepInput}/json/`;


    // Faz a requisição à API
    fetch(url)
        // then: Executa se a Promise for realizada com sucesso
        .then(response => response.json()) //experando os dados
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado!")
            } else {
                // Cria elementos para exibir os dados
                cidade.value = data.localidade
                logradouro.value = data.logradouro
                uf.value = data.uf
                bairro.value = data.bairro           
            
            }
        })
        //catch: Executa se a Promise for rejeitada
        .catch(error => {
            alert("Aconteceu um erro inesperado!")
        });
}

function limparCampo(){
    //limpando os campos com base em seus ids
    document.getElementById('nome').value = '' 
    document.getElementById('cpf').value = '' 
    document.getElementById('cep').value = ''  
    document.getElementById('logradouro').value = ''  
    document.getElementById('cidade').value = '' 
    document.getElementById('bairro').value = ''  
    document.getElementById('uf').value = ''     
}


