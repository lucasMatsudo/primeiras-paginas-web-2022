const shows = document.querySelectorAll("[data-show]");
const cartas = document.querySelectorAll("[data-carta]");

function favoritar1(){
const img = document.getElementById('curtir');
    if (img.src.match("imagens/coracaoVazio.png")) {
        img.src = "imagens/coracaoCheio.png";
    }else{
        img.src = "imagens/coracaoVazio.png";
    }
}

function favoritar2(){
const img = document.getElementById('curtir2');
    if (img.src.match("imagens/coracaoVazio.png")) {
        img.src = "imagens/coracaoCheio.png";
    }else{
        img.src = "imagens/coracaoVazio.png";
    }
}

function favoritar3(){
    const img = document.getElementById('curtir3');
    if (img.src.match("imagens/coracaoVazio.png")) {
        img.src = "imagens/coracaoCheio.png";
    }else{
        img.src = "imagens/coracaoVazio.png";
    }
}

function favoritar4(){
    const img = document.getElementById('curtir4');
    if (img.src.match("imagens/coracaoVazio.png")) {
        img.src = "imagens/coracaoCheio.png";
    }else{
        img.src = "imagens/coracaoVazio.png";
    }
}

function favoritar5(){
    const img = document.getElementById('curtir5');
    if (img.src.match("imagens/coracaoVazio.png")) {
        img.src = "imagens/coracaoCheio.png";
    }else{
        img.src = "imagens/coracaoVazio.png";
    }
}

function favoritar5(){
    const img = document.getElementById('curtir5');
    if (img.src.match("imagens/coracaoVazio.png")) {
        img.src = "imagens/coracaoCheio.png";
    }else{
        img.src = "imagens/coracaoVazio.png";
    }
}

function favoritar6(){
    const img = document.getElementById('curtir6');
    if (img.src.match("imagens/coracaoVazio.png")) {
        img.src = "imagens/coracaoCheio.png";
    }else{
        img.src = "imagens/coracaoVazio.png";
    }
}

function favoritar7(){
    const img = document.getElementById('curtir7');
    if (img.src.match("imagens/coracaoVazio.png")) {
        img.src = "imagens/coracaoCheio.png";
    }else {
        img.src = "imagens/coracaoVazio.png";
    }
}

shows.forEach(show => show.addEventListener('click', () =>{
    const valueShow = show.dataset.show;
    for(let i=0; i< shows.length; i++){
}

filtrarItens(valueShow);

function filtrarItens(valueShow){
    cartas.forEach(carta => {
    carta.classList.remove('hide');
    if(valueShow == "all"){
        carta.classList.remove('hide');
        }else if(carta.dataset.carta !== valueShow){
        carta.classList.add('hide');
        }
}
)
    }
}
)
)
