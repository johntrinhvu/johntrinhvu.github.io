var canvas = document.querySelector('canvas'), ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var letters = '0101010101010101010101010101001010101010101010101010101010101010';
letters = letters.split('');

var fontSize = 10,
    columns = canvas.width / fontSize;

var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0498b3';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .975) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 30);