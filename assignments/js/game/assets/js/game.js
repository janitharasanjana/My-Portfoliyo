var boy = document.getElementById("boy");


idleImageNumber= 0
idelAnimationNumber = 0


function idleAnimation (){
    idleImageNumber = idleImageNumber + 1 ;
    if (idleImageNumber == 10) {
        idleImageNumber = 0 ;
    }


    boy.src = "assets/image/idle(" + idleImageNumber + ").png";
}


function idleAnimationStart(){
    idelAnimationNumber = setInterval(idleAnimation,50);
}
