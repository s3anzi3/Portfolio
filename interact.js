function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const backToTopButton = document.getElementById("backToTop");
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(window.scrollY > 400){
        if(!backToTopButton.classList.contains("backToTopEntrance")){
        backToTopButton.classList.remove("backToTopExit");
        backToTopButton.classList.add("backToTopEntrance");
        }
    }
    else{
        if(!backToTopButton.classList.contains("backToTopExit")){
        backToTopButton.classList.remove("backToTopEntrance");
        backToTopButton.classList.add("backToTopExit");
    }
    }
}