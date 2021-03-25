 async function fetchMeals() {
  const meals = await fetch('/apiRoutes');
  const data = await meals.json();
  return data;
}

async function windowActions() {
  await fetchMeals(data);
}
window.onload = windowActions;