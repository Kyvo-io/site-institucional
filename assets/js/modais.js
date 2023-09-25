
const fundo = document.getElementById("fundo_modal")
const modalCadastro = document.getElementById("cadastro")
const modalLogin = document.getElementById("login")
const modalSolucao1 = document.getElementById("solucao1")
const modalSolucao2 = document.getElementById("solucao2")

function trocarExibicaoFundo() {
    fundo.classList.toggle("exibir")
}
function trocarExibicaoModalCadastro() {
    trocarExibicaoFundo()
    modalCadastro.classList.toggle("exibir")
}
function trocarExibicaoModalLogin() {
    trocarExibicaoFundo()
    modalLogin.classList.toggle("exibir")
}
