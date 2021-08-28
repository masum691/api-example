
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
        // console.log(country);
        // console.log(country.area);
        // console.log(country.name);
        const div = document.createElement('div');
        div.classList.add('country')
        // const h3 = document.createElement('h3');
        // const p = document.createElement('p');
        // h3.innerText = country.name;
        // p.innerText = country.area;
        // // p.innerText = country.resion;
        // div.appendChild(p);
        // div.appendChild(h3);
        div.innerHTML = `
            <h3> ${country.name} </h3>
            <p> ${country.area} </p>
            <button onclick="loadCountry('${country.name}')"> Details </button>
        `
        countriesDiv.appendChild(div);
    })
}
const loadCountry = name => {
    const ulr = `https://restcountries.eu/rest/v2/name/${name}`
    // console.log(ulr)
    fetch(ulr)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = country => {
    console.log(country)
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h4>${country.name}</h4>
        <p> ${country.area}</p>
        <p> ${country.capital}</p>
        <p> ${country.population}</p>
        <p> ${country.alpha3Code}</p>
        <img width="200px" src="${country.flag}">
    `
    document.getElementById('country-detail').style.display = 'block';
}