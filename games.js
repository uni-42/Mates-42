// games.js

// Sample games data
const games = [
    { id: 1, name: 'Chess', category: 'Board' },
    { id: 2, name: 'Fortnite', category: 'Action' },
    { id: 3, name: 'Monopoly', category: 'Board' },
    { id: 4, name: 'The Witcher 3', category: 'RPG' },
    { id: 5, name: 'Overcooked', category: 'Party' }
];

// Function to search games by name
function searchGames(query) {
    return games.filter(game => game.name.toLowerCase().includes(query.toLowerCase()));
}

// Function to filter games by category
function filterGamesByCategory(category) {
    return games.filter(game => game.category === category);
}

// Dynamically load games based on search or category filter
function loadGames(query = '', category = '') {
    let filteredGames = games;

    // Apply filtering
    if (category) {
        filteredGames = filterGamesByCategory(category);
    } else if (query) {
        filteredGames = searchGames(query);
    }

    // Render games (to be implemented based on your UI)
    console.log('Loaded Games:', filteredGames);
}

// Example usage
loadGames(); // Load all games
loadGames('chess'); // Search for Chess
loadGames('', 'Board'); // Filter by Board category
