const number = +prompt('Give a positive integer');
const table = document.createElement('table');
numbers = [];
let sum = 0;

for (let i = 1; i <= number; i++) {
  const row = document.createElement('tr');

  for (let j = 1; j <= number; j++) {
    const cell = document.createElement('td');
    cell.textContent = (i * j).toString();
    row.appendChild(cell);
  }
  table.appendChild(row);
}
document.body.appendChild(table);
