const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const restaraunt = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => restaraunt.push(...data));

function findMatches(wordToMatch, restaraunt) {
    return restaraunt.filter(place => {
        // here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.name.match(regex) || place.category.match(regex)
    });
}
// function search() {
//     // Declare variables
//     var input, filter, ul, li, a, i;
//     input = document.getElementById('searchInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("restaraunts");
//     li = ul.getElementsByTagName('li');

//     if (input.value.length == 0) {
//         ul.style.display = "none";
//         return;
//     } else {
//         ul.style.display = "block";

//         if (document.GetElementById('searchInput').value == '')
//             for (i = 0; i < li.length; i++) {
//                 a = li[i].getElementsByTagName("a")[0];
//                 if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//                     li[i].style.display = "block";
//                 }
//             } else {
//             li[i].style.display = "none";
//         }
//     }
// }

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const matchArray = findMatches(this.value, restaraunt);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const restarauntName = place.name.replace(regex, `<span class="hl">${this.value}</span>`);
        const categoryName = place.category.replace(regex, `<span class="hl">${this.value}</span>`);
        const address_line_1Name = place.address_line_1.replace(regex, `<span class="hl">${this.value}</span>`);
        var input, filter, ul, li, a, i;
        input = document.getElementById('searchInput');
        if(input.value.length === false) {
            ul.style.displayMatches = "none"
        } else {
            ul.style.displayMatches = "block"
        }
        return `
  
    <li> 
      <span class="name">${restarauntName}</span>
      <br>
      <span> ${categoryName}</span>
      <br>
      <span class="address_line_1Name">${address_line_1Name}</span>
    </li>
   
  `;

    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

