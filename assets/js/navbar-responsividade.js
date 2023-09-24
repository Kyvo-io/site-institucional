function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-el a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Impedir o comportamento padrão do link

            const targetId = link.getAttribute("href").substring(1);

            // Ocultar todas as seções de conteúdo
            const sections = document.querySelectorAll(".containerHome, .containerSobreNos, .containerIntegrantes, .containerSolucao, .containerContato");
            sections.forEach((section) => {
                section.style.display = "none";
            });

            // Exibir a seção correspondente
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = "flex";

                
            }
        });
    });
});