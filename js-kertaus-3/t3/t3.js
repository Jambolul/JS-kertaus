const userAgent = navigator.userAgent;

monitorSize = window.screen.width + ' x ' + window.screen.height;

availableSize = window.screen.availWidth + ' x ' + window.screen.availHeight;

const currentDate = new Date();
console.log(currentDate);
let options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};
formattedDate = currentDate.toLocaleDateString('fi-FI', options);
console.log(formattedDate);

items = [userAgent, monitorSize, availableSize, formattedDate];

for (let i = 0; i < items.length; i++) {
  const itemP = document.createElement('p');
  itemP.textContent = items[i];
  target = document.querySelector('#target');
  target.appendChild(itemP);
}
