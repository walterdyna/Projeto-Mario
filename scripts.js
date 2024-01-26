/* 3 - JEITOS DE CRIAR UMA VARIAVEL
        -   VAR - / JEITO ANTIGO  -- NÃO USAR
        -   LET - VOCÊ PODE ALTERAR O VALOR DEPOIS
        - CONST - CONSTANTE... 
        -----------------------------------------------
        */


const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");

function mostarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}


console.log (" funcionando")














