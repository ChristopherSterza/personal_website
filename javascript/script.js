let scrollLimit = 200;
const arrow1 = document.querySelector('.arrow-first');
const arrow2 = document.querySelector('.arrow-second');

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollLimit) {
    // Above the scroll threshold
    arrow1.classList.add('is-visible');
    arrow2.classList.add('is-visible');
    arrow1.classList.remove('is-hidden');
    arrow2.classList.remove('is-hidden');
  } else {
    // Below the scroll threshold
    arrow1.classList.add('is-hidden');
    arrow2.classList.add('is-hidden');
    arrow1.classList.remove('is-visible');
    arrow2.classList.remove('is-visible');
  }
}

window.addEventListener('scroll', checkPosition);
