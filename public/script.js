async function getData() {
  const request = await fetch('/api/dining');
  const json = await request.json();
  const table = document.querySelector('tbody');

  diningHalls = json.data;

  diningHalls.forEach((element) => {
    const row = document.createElement('tr');
    const hallName = element.hall_name;
    const hallAddress = element.hall_address;
    row.innerHTML = `<td>${hallName}</td> <td>${hallAddress}</td>`;
    table.append(row);
  });
}

async function windowActions() {
  await getData();
}
window.onload = windowActions;
