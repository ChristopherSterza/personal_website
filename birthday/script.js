myCard = document.querySelector('.card');
mycb = document.querySelector('#cb1');
myButton = document.querySelector('#heart');
images = [];

var numCover = 0;

window.onload = function (e) {
  images = document.getElementsByClassName('coverImg');
  for (const el of images) {
    el.classList.remove('in');
  }
  numCover = images.length - 1;
  images[numCover].classList.add('in');
};

myCard.onclick = function (e) {
  if (e.target != myButton) {
    if (mycb.checked) {
      myButton.style.display = 'block';
    } else {
      myButton.style.display = 'none';
    }
    mycb.checked = !mycb.checked;
  }
};

myButton.onclick = function (e) {
  images[numCover].classList.remove('in');
  numCover++;
  if (numCover >= images.length) numCover = 0;
  images[numCover].classList.add('in');
};
