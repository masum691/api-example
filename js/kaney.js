// const loadQuotes = () => {
//     fetch('https://api.kanye.rest/')
//     .then(res => res.json())
//     .then(data => displayQuote(data));
// }

// const displayQuote = q => {
//     const quoteElement = document.getElementById('quote');
//     quoteElement.innerText = q.quote;
// }


const randomQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => updateQuotes(data))
}
function updateQuotes(quotes){
    const quote = document.getElementById('kanye-quotes');
    quote.innerText = quotes.quote;
}