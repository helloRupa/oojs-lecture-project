class Bjork extends Controller {
  constructor({ x, y }) {
    super({ x, y, velocity: 1, img: './assets/bjork.png', dir: 'down' });
    this.addCustomAction();
  }

  static makeChoice(limit) {
    return Math.floor(Math.random() * limit);
  }

  addCustomAction() {
    this.element.addEventListener('click', () => {
      const directions = ['up', 'down', 'left', 'right'];
      const bjork = new Bjork({ x: this.x, y: this.y });
      const choice = Bjork.makeChoice(directions.length);
      console.log('clicked', Math.random())

      bjork.setDirection(directions[choice]);
      bjork.velocity = Bjork.makeChoice(4) + 1;
    });
  }
}