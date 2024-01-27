// ==============People Data============
let apiUrlPeople = 'https://swapi.dev/api/people/';
let fetchButtonPeople = document.getElementById('fetchButtonPeople');
let nextButtonPeople = document.getElementById('nextButtonPeople');
let prevButtonPeople = document.getElementById('prevButtonPeople');
let navigationContainerPeople = document.getElementById('navigationButtonContainerPeople');
let peopleTableBody = document.getElementById('peopleTableBody');
let peopleTable = document.getElementById('peopleTable');
let currentPagePeople = 1;

fetchButtonPeople.addEventListener('click', () => {
    resetShipsData();
    fetchPeople();
});
nextButtonPeople.addEventListener('click', fetchNextPeople);
prevButtonPeople.addEventListener('click', fetchPreviousPeople);

function fetchPeople() {
    fetch(apiUrlPeople + `?page=${currentPagePeople}`)
        .then(response => response.json())
        .then(data => {
            displayPeople(data.results);
            updateNavigationButtons(data.next, nextButtonPeople, data.previous, prevButtonPeople, navigationContainerPeople);
            peopleTable.style.display = 'table';
            shipsTable.style.display = 'none';
            navigationContainerShips.style.display = 'none';
        })
        .catch(error => console.error('Error fetching people:', error));
}

function fetchNextPeople() {
    currentPagePeople++;
    fetchPeople();
}

function fetchPreviousPeople() {
    currentPagePeople--;
    fetchPeople();
}

function displayPeople(people) {
    peopleTableBody.innerHTML = '';
    people.forEach(person => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${person.name}</td>
            <td>${person.height} cm</td>
            <td>${person.mass} kg</td>
            <td>${person.gender}</td>
            <td>${person.birth_year}</td>
            <td>${person.films.length}</td>
        `;
        peopleTableBody.appendChild(row);
    });
}

function resetPeopleData() {
    peopleTable.style.display = 'none';
    currentPagePeople = 1;
}




// ================Ships Data============
let apiUrlShips = 'https://swapi.dev/api/starships/';
let fetchButtonShips = document.getElementById('fetchButtonShips');
let nextButtonShips = document.getElementById('nextButtonShips');
let prevButtonShips = document.getElementById('prevButtonShips');
let navigationContainerShips = document.getElementById('navigationButtonContainerShips');
let shipsTableBody = document.getElementById('shipsTableBody');
let shipsTable = document.getElementById('shipsTable');
let currentPageShips = 1;

fetchButtonShips.addEventListener('click', () => {
    resetPeopleData();
    fetchShips();
});
nextButtonShips.addEventListener('click', fetchNextShips);
prevButtonShips.addEventListener('click', fetchPreviousShips);

function fetchShips() {
    fetch(apiUrlShips + `?page=${currentPageShips}`)
        .then(response => response.json())
        .then(data => {
            displayShips(data.results);
            updateNavigationButtons(data.next, nextButtonShips, data.previous, prevButtonShips, navigationContainerShips);
            shipsTable.style.display = 'table';
            peopleTable.style.display = 'none';
            navigationContainerPeople.style.display = 'none';
        })
        .catch(error => console.error('Error fetching ships:', error));
}

function fetchNextShips() {
    currentPageShips++;
    fetchShips();
}

function fetchPreviousShips() {
    currentPageShips--;
    fetchShips();
}

function displayShips(ships) {
    shipsTableBody.innerHTML = '';
    ships.forEach(ship => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${ship.name}</td>
            <td>${ship.model}</td>
            <td>${ship.manufacturer}</td>
            <td>${ship.cost_in_credits}</td>
            <td>${ship.crew} - ${ship.passengers}</td>
            <td>${ship.starship_class}</td>
        `;
        shipsTableBody.appendChild(row);
    });
}

function resetShipsData() {
    shipsTable.style.display = 'none';
    currentPageShips = 1;
}


function showButton(url, button) {
    button.style.display = url ? 'block' : 'none';
}
function updateNavigationButtons(nextUrl, nextButton, prevUrl, prevButton, navigationContainer) {
    nextButton.style.display = nextUrl ? 'block' : 'none';
    prevButton.style.display = prevUrl ? 'block' : 'none';
    navigationContainer.style.display = (nextUrl || prevUrl) ? 'block' : 'none';
}