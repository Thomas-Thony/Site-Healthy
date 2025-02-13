const form = document.querySelector('#recipe-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = form.elements['recipe-title'].value;
  const ingredients = form.elements['recipe-ingredients'].value;
  const quantities = form.elements['recipe-quantities'].value;
  const instructions = form.elements['recipe-instructions'].value;
  const prepTime = form.elements['recipe-prep-time'].value;
  const cookTime = from.elements['recipe-cook-time'].value;
});
