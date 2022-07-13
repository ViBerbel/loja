var botaoCadastrar = document.querySelector("#botao--cadastro")

botaoCadastrar.addEventListener('click', function(event){
  event.preventDefault();
  
  var form = document.querySelector("#form")
  
  var cadastro = obtemCadastro(form)
  
  var cadastroTr = montaTr(cadastro)
  
  var listaCadastro = document.querySelector("#lista--cadastro")

  listaCadastro.appendChild(cadastroTr)

  form.reset()
})


  function obtemCadastro(form){

    var cadastro = {
      nome: form.nome.value,
      cep: form.cep.value,
      endereco: form.endereco.value,
      cidade: form.cidade.value,
      estado: form.estado.value
    } 
    return cadastro
  }

  function montaTr(cadastro){
    var cadastroTr = document.createElement("tr");
    cadastroTr.classList.add("cadastro");

    cadastroTr.appendChild(montaTd(cadastro.nome, "nome"));
    cadastroTr.appendChild(montaTd(cadastro.cep, "cep"));
    cadastroTr.appendChild(montaTd(cadastro.endereco, "endereco"));
    cadastroTr.appendChild(montaTd(cadastro.cidade, "cidade"));
    cadastroTr.appendChild(montaTd(cadastro.estado, "estado"));

    return cadastroTr
  }

  function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}