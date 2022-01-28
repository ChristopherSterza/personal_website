myCard = document.querySelector(".card");
mycb = document.querySelector("#cb1");
myButton = document.querySelector("button");

var numCover = 1;

myCard.onclick = function() {
    mycb.checked = !mycb.checked;
}

myButton.onclick = function() {
    var url = '';
    numCover++;
    if (numCover > 5) numCover = 1;
    switch (numCover){
        case 1:
            url = 'images/romantic.jpg';
            break;
        case 2:
            url = 'images/smokey.png';
            break;
        case 3:
            url = 'images/covid.jpg';
            break;
        case 4:
            url = 'images/injury.jpg';
            break;
        case 5:
            url = 'images/masks.jpg';
            break;
    }
    console.log(url);
    document.querySelector("#cover").src = url;
    console.log(`img url:${document.querySelector("#cover").url}`);
    document.querySelector(".description").innerHTML = `Card Cover ${numCover}`;

}