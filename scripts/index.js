let objectType;

document.addEventListener('click', e => {
  const parent = e.target.parentElement;

  if (parent && parent.id) {
    objectType = parent.id;
  }

  new Bjork({ x: e.clientX, y: e.clientY });
});