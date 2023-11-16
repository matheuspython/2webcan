const botao = document.querySelector(".change-data")

const url = new URL(window.location.href); // Obtém a URL da página atual
const params = new URLSearchParams(url.search); // Obtém os parâmetros da URL

const login = params.get('login');

botao.addEventListener("click",()=>
  window.location.href = `./mudarDadosMedico.html?login=${login}`
)