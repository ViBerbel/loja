var cadastro = document.querySelectorAll(".cadastro");

var listaCadastro = document.querySelector("#lista--cadastro");

listaCadastro.addEventListener("dblclick", function(event) {
    event.target.classList.add("fadeOut");

    setTimeout(function() {
        event.target.remove();
    }, 500);

});
