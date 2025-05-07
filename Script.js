var perso = document.querySelector('.perso');
var obstacle = document.querySelector('.obstacle');

function sauter(){
    // fonction pour faire sauter le personngae 
    if(perso.classList != "animation"){
        perso.classList.add('animation')
    }
    setTimeout(function(){
        perso.classList.remove('animation')
    }, 500);
}

// verification si l'obstacle a été toucher 

var verification = setInterval(function(){
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue('top'));
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

    if(obstaclesLeft<20 && obstaclesLeft> 0 && persoTop>= 130){
        obstacle.style.animation = "none";
        alert("Vous avez perdu")

    }
},1)