const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const restaraunt = [];
fetch(endpoint)
.then(blob => blob.json())
.then(data => restaraunt.push(...data));

function findMatches(wordToMatch, restaraunt) {
return restaraunt.filter(place => {
  // here we need to figure out if the city or state matches what was searched
  const regex = new RegExp(wordToMatch, 'gi');
  return place.name.match(regex) || place.zip.match(regex)
});
}

function numberWithCommas(x) {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
const matchArray = findMatches(this.value, cities);
const html = matchArray.map(place => {
  const regex = new RegExp(this.value, 'gi');
  const restarauntName = place.name.replace(regex, `<span class="hl">${this.value}</span>`);
  const zipName = place.zip.replace(regex, `<span class="hl">${this.value}</span>`);
  return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
  `;
}).join('');
suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);



