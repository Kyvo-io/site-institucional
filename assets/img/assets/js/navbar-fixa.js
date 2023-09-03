window.onscroll = function(){grudarNavBar()};

// obtendo a navbar
var navbar = document.getElementById("headerNavbar")

var grudado = navbar.offsetTop;

function grudarNavBar() {
    if(window.pageYOffset >= grudado){
        navbar.classList.add("grudado");
        
    }else{
        navbar.classList.remove("grudado");
    }
}