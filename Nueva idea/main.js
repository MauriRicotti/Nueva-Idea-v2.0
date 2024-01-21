
//ANIMACIONES DE LA PAGINA

let tl = gsap.timeline({
    repeat: 0,
    delay: 0.3,
});

tl.to('.gsap-bar', {
    duration: 1,
    opacity: 1,
});

tl.to('.gsap-principal', {
    duration: 1,
    opacity: 1,
},
'-=0.6');

tl.to('.gsap-proyectos', {
    duration: 1,
    opacity: 1,
},
'-=0.6');

tl.to('.gsap-card1', {
    duration: 1,
    opacity: 1,
},
'-=0.8');

tl.to('.gsap-card2', {
    duration: 1,
    opacity: 1,
},
'-=0.7');

tl.to('.gsap-card3', {
    duration: 1,
    opacity: 1,
},
'-=0.6');



// DARK-MODE

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    //LocalStorage
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode' , 'true');
    } else{
        localStorage.setItem('dark-mode' , 'false');
    }
});

//Obtener El Modo Actual
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
} else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}

