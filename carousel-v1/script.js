let pos = 0;

const container = document.querySelector('.card-wrapper');

function previous() {
  pos -= 600;
  if (pos < 0) {
    pos = 3000;
  }
  container.scroll(pos, 0);
}

function next() {
  pos += 600;
  if (pos >= 3000) {
    pos = 0;
  }
  container.scroll(pos, 0);
}

document.querySelector('.previous').addEventListener('click', previous);
document.querySelector('.next').addEventListener('click', next);
