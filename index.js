let headerCentered = false;

function toglePicture(){
    let img = document.getElementById("bild");

    //changing dice picture to 6 if it is 4
    if(img.src.endsWith("img/Face4.png")){
        img.src = "img/Face6.png";
    }

    //changing dice picture to 4 if it is 6
    else{
        img.src = "img/Face4.png";
    }
}

function getTime(){
    document.getElementById("tid").innerHTML = Date();

}

function togleDisplay(id){

    let element = document.getElementById(id)

    //hiding html if its shown
    if(element.style.display == "block"){
        element.style.display = "none"
    } 

    //Showbing html if it is hidden
    else{
        element.style.display = "block"
    }
}

function hideElementById(id){
    document.getElementById(id).style.display = "none"
}

function showElementById(id){
    document.getElementById(id).style.display = "block"
}

function togleBgColour(){
    let body = document.body;

    //changing colour of the background to aqua if the background colour is white or blank as it is by default 
    if(body.style.backgroundColor == "white" || body.style.backgroundColor == "")
        body.style.backgroundColor = "aqua";

    //changng the background colour to white if it is aqua
    else{
        body.style.backgroundColor = "white";
    }
}

function centerHeader(){
    let header = document.getElementById("header");
    let img = document.getElementById("imgAlign");

    if(headerCentered == false){
        header.style.backgroundColor = "gray";

        //center text
        header.style.textAlign = "center";

        //center img
        img.style.justifyContent = "center"

        headerCentered = true;
    }
    else{
        header.style.backgroundColor = "white";

        //move text left
        header.style.textAlign = "left";

        //move  img left
        img.style.justifyContent = "flex-start"

        headerCentered = false;
    }
        
}