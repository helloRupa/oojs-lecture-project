let objectType;

document.addEventListener('click', e => {
  const parent = e.target.parentElement;

  if (parent && parent.id) {
    objectType = parent.id;
  }

  console.log(e.clientX, e.clientY)
  new Controller(e.clientX, e.clientY, 1, 'down', './assets/bjork.png');
});