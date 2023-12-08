function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")  // entende que se tiver o light ele tira mas se nao tiver ele addiciona o "light" automaticamente 
                                    // perfeito para botoes simples 

    //if (html.classList.contains("light")){
        //html.classList.remove("light")
    //} 
    //else {
    //   html.classList.add("light")
    //}


    //pegar a img
    const img = document.querySelector(".perfil img")

    //substituir a img
    if (html.classList.contains("light")){
        img.setAttribute("src", "avatarOculos.png") // modificar um atributo
    } 
    else {
        img.setAttribute("src", "avatar.png")  
    }

  

}