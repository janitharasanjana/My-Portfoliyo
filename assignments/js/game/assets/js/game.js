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


runImageNumber = 0;
runAnimationNumber = 0;

function runAnimation(){
    runImageNumber = runImageNumber + 1 ;

    if (runImageNumber == 10){
        runImageNumber = 0 ;
    }
    boy.src = "assets/image/run(" + runImageNumber + ").png";

}


function runAnimationStart(){
    runAnimationNumber = setInterval(runAnimation,100);
    clearInterval(idelAnimationNumber);

}

function keyCheck(event){

   /* alert(event.which);
    enter = 13*/

    var keyCode = event.which;
    if (keyCode == 13){
        if (runAnimationNumber == 0){
            runAnimationStart();
        }
    }
}