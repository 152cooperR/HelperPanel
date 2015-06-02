setInterval(function(){

    var ign = document.getElementById("ign");
    var skin = document.getElementById("skin");


    if(ign.value == ""){
        skin.src = "https://minotar.net/body/Steve/100.png";

    }else{
        skin.src = "https://minotar.net/body/" + ign.value + "/100.png";

    }

}, 250);