const views = document.querySelectorAll("[data-view]");
const cards = document.querySelectorAll("[data-card]");
const simboloCoracao = document.querySelectorAll(".heart-icon");

simboloCoracao.forEach(icon => icon.addEventListener('click', ()=> {
    icon.classList.toggle("bi-heart");
    icon.classList.toggle("bi-heart-fill");
}
))

views.forEach(view => view.addEventListener('click', () =>{
    const valueView = view.dataset.view;

    for(let i=0; i< views.length; i++){
        if(views[i].classList[1]){
            views[i].classList.remove("active");
        }
    }

    view.classList.add("active");

    filtrarItens(valueView);
}))

function filtrarItens(valueView){

    cards.forEach(card => {
        card.classList.remove('hide');

        if(valueView == "all"){
            card.classList.remove('hide');
        }
        else if(card.dataset.card !== valueView){
            card.classList.add('hide');
        }
    })

}