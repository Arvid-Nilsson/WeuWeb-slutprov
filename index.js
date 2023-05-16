function toglePicture(){
    let x = document.getElementById("bild");

    if(x.src.endsWith("img/Face4.png")){
        x.src = "img/Face6.png";
    }

    else{
        x.src = "img/Face4.png";
    }
}

function getTime(){
    document.getElementById("tid").innerHTML = Date();

}