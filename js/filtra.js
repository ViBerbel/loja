var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var cadastros = document.querySelectorAll(".cadastro");

    if (this.value.length > 0) {
        for (var i = 0; i < cadastros.length; i++) {
            var cadastro = cadastros[i];
            var tdNome = cadastro.querySelector(".nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                cadastro.classList.add("invisivel");
            } else {
                cadastro.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < cadastros.length; i++) {
            var cadastro = cadastros[i];
            cadastro.classList.remove("invisivel");
        }
    }
});