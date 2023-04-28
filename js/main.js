const footer__question = document.querySelectorAll(".footer__question");

for (let item of footer__question){
    item.addEventListener("click", function(e){
        let el = e.target;
        console.log(el)
        let maiParentEl = el.closest("div.footer__inner__item");
        maiParentEl.querySelector(".footer__inner__body").classList.toggle("show");
        
    });
}


