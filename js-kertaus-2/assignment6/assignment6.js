'use strict';

const movies = [];
let more = true;
while (more) {
  const title = prompt('Syötä elokuvan nimi');
  const rating = prompt('Syötä arvio 1-5');
  const movie = {title, rating};
  movies.push(movie);
  more = confirm('Haluatko syöttää lisää');
}

/*
const movies = [
  {title: 'No country for old men', rating: '4'},
  {title: 'cheeseburger', rating: '5'},
  {title: 'starwars', rating: '1'},
  {title: 'pokemon', rating: '2'},
];
*/
function sortMovies(a, b) {
  const comparison = b.rating - a.rating;
  return comparison;
}

movies.sort(sortMovies);

console.log(movies);
for (const movie of movies) {
  const td1 = document.createElement('td');
  td1.textContent = movie.title;

  const td2 = document.createElement('td');
  td2.textContent = movie.rating;

  const tr = document.createElement('tr');
  tr.append(td1);
  tr.append(td2);

  document.getElementById('kohde').append(tr);
}

const favourite = movies[0];

document.getElementById('fav').textContent = favourite.title;
