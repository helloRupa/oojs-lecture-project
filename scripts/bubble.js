class Bubble extends Controller {
  constructor({ x, y }) {
    super({ x, y, velocity: 0.5, img: './assets/bubble.png', dir: 'up' });
  }

  cleanUp() {
    super.cleanUp();
    if (this.outOfBounds()) {
      const bubbleSound = new Sound('./assets/pop.wav');

      setTimeout(() => {
        bubbleSound.sound.remove();
      }, 1000);
    }
  }
}

class Sound {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.sound.play();
  }
}