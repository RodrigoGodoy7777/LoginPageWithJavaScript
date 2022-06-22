const buttonLogin = document.querySelector('#optionButton1')
const buttonCad = document.querySelector('#optionButton2')

let divLogin = document.querySelector('#loginDiv')
let divCad = document.querySelector('#cadDiv')

let menuLoginHidden = true
let menuCadHidden = true

buttonLogin.onclick = function(){
    
    if (menuLoginHidden === true){
        menuLoginHidden = false
        divLogin.classList.remove('hidden')       
    } else if (menuLoginHidden === false){
        menuLoginHidden = true
        divLogin.classList.add('hidden')
    }
    
    if (menuCadHidden === false){
        menuCadHidden = true

        divCad.classList.add('hidden')
    }
}

buttonCad.onclick = function(){

    if (menuCadHidden === true){
        menuCadHidden = false
        divCad.classList.remove('hidden')
    } else if (menuCadHidden === false){
        menuCadHidden = true
        divCad.classList.add('hidden')
    }
    
    if (menuLoginHidden === false){
        menuLoginHidden = true

        divLogin.classList.add('hidden')
    }
}