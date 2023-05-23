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

function togleDisplay(id){

    let x = document.getElementById(id)

    //hiding html if its shown
    if(x.style.display == "block"){
        x.style.display = "none"
    } 

    //Showbing html if it is hidden
    else{
        x.style.display = "block"
    }
}

function hideElementById(id){
    document.getElementById(id).style.display = "none"
}

function showElementById(id){
    document.getElementById(id).style.display = "block"
}

function togleBgColour(){
    let x = document.body;

    //changing colour of the background to aqua if the background colour is white or blank as it is by default 
    if(x.style.backgroundColor == "white" || x.style.backgroundColor == "")
        x.style.backgroundColor = "aqua";

    //changng the background colour to white if it is aqua
    else{
        x.style.backgroundColor = "white";
    }
}

function centerHeader(){
    let x = document.getElementById("header");

    if(x.style.textAlign == "left" || x.style.textAlign == ""){
        x.style.textAlign = "center";
        x.style.backgroundColor = "gray";
    }
    else{
        x.style.textAlign = "left";
    }
        
}