 async function fetchMeals() {
  const meals = await fetch('/api');
  const data = await meals.json();
  return data;
}

async function windowActions() {
  await fetchMeals(data);
}
window.onload = windowActions;