

// const loadBuddies = () => {
//     fetch('https://randomuser.me/api/?results=10')
//         .then(res => res.json())
//         .then(data => displayBuddies(data))
// }

// function displayBuddies(buddie) {
//     const buddies = buddie.results;
//     const buddiesDiv = document.getElementById('buddies')
//     for (const budd of buddies) {
//         const p = document.createElement('p');
//         p.innerText = `
//         ${budd.name.first} ${budd.name.last} ${budd.name.title}
//         Location: ${budd.location.city}
//         `;
//         buddiesDiv.appendChild(p);
//     }
// }



const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(data => updateBuddies(data))
};

function updateBuddies(buddie){
    // console.log(buddie)
    const buddies = buddie.results;
    const buddiesDiv = document.getElementById('buddies');
    for(const budd of buddies){
        console.log(budd);
        const p = document.createElement('p');
        p.innerText = `
            First Name: ${budd.name.first}
            Last Name: ${budd.name.last}
            Genger: ${budd.gender}
            Title: ${budd.name.title}
            Age: ${budd.dob.age}
            Cell: ${budd.cell}
            Mail: ${budd.email}

        `
        buddiesDiv.appendChild(p);
    }
}