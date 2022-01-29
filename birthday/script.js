myCard = document.querySelector(".card");
mycb = document.querySelector("#cb1");
myButton = document.querySelector("#heart");

var numCover = 1;

myCard.onclick = function(e) {
    if (e.target != myButton){
        if (mycb.checked){
            myButton.style.display = "block";
        } else {
            myButton.style.display = "none";
        }
        mycb.checked = !mycb.checked;
    }
}

myButton.onclick = function(e) {
    var url = '';
    numCover++;
    if (numCover > 5) numCover = 1;
    switch (numCover){
        case 1:
            url = 'images/romantic.png';
            break;
        case 2:
            url = 'images/smokey.png';
            break;
        case 3:
            url = 'images/covid.png';
            break;
        case 4:
            url = 'images/injury.png';
            break;
        case 5:
            url = 'images/masks.png';
            break;
    }
    document.querySelector("#cover").src = url;
}