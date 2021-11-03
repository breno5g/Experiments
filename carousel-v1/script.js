const container = document.querySelector('.card-wrapper');
let pos = 0;

// Volta uma imagem
function previous() {
  pos -= 600;
  if (pos < 0) {
    pos = 3000;
  }
  container.scroll(pos, 0);
}

// Avança uma imagem
function next() {
  pos += 600;
  if (pos >= 3000) {
    pos = 0;
  }
  container.scroll(pos, 0);
}

// Avança depois de 5 segundos
setInterval(next, 5000);

// adiciona os eventos nos botões
document.querySelector('.previous').addEventListener('click', previous);
document.querySelector('.next').addEventListener('click', next);
