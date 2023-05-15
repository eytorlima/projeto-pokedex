//alert("Andressa, te amo!");

const botaoAlterarTema = document.getElementById("botao-alterar-tema"); //recebe o elemento no js a partir do html (botão)

const body = document.querySelector("body"); //recebe o elemento no js a partir do html (body)

const imgBotaoTrocaTema = document.querySelector(".img-botao"); //recebe a classe do botão no js a partir do html

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroOn = body.classList.contains("modo-escuro"); // adiciona a verificação de atividade do modo escuro à uma variável

    body.classList.toggle("modo-escuro"); //faz com que a classe do body alterne entre os estados

    if (modoEscuroOn) {
        imgBotaoTrocaTema.setAttribute("src", "./src/imgs/sun.png"); //transforma a imagem de lua em uma imagem de sol
    }

    else {
        imgBotaoTrocaTema.setAttribute("src", "./src/imgs/moon.png"); //transforma a imagem de sol em uma imagem de lua
    }
}); //pega o click do usuário, dentro da função está a ação.
