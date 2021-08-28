
const countriesApi = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => apiUpdate(data))
}
const apiUpdate = countries => {
    // console.log(countries);
    const countryDiv = document.getElementById('country-div');
    for(const country of countries){
        console.log(country)
        const div = document.createElement('div');
        div.classList.add('country')
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        h3.innerText = country.name;
        p.innerText = country.population;
        div.appendChild(h3);
        div.appendChild(p);
        countryDiv.appendChild(div);
    }
}