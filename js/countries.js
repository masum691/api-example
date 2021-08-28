
const allCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}
// allCountries();

const displayCountries = countries => {
    // console.log(countries);
    // for(const country of countries){
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        console.log(country)
        // console.log(country.area);
        // console.log(country.name);
        const div = document.createElement('div');
        div.classList.add('country')
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        h3.innerText = country.name;
        p.innerText = country.area;
        // p.innerText = country.resion;
        div.appendChild(p);
        div.appendChild(h3);
        countriesDiv.appendChild(div);
    })
}