var boy = document.getElementById("boy");
idleImageNumber=0
function idleAnimation (){
    idleImageNumber = idleImageNumber = 1 ;
    if (idleImageNumber==10) {
        idleImageNumber = 1 ;
    }


    boy.src = "assets/image/sprites/ninjaadventurenew/png/idle (" + idleImageNumber + ").png";
}