document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-bar').value;
    fetch(`https://www.googleapis.com/customsearch/v1?q=${searchTerm}&key=YOUR_API_KEY&cx=YOUR_CX`)
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('search-results');
            resultsContainer.innerHTML = '';
            data.items.forEach(item => {
                const result = document.createElement('div');
                result.innerHTML = `<h3>${item.title}</h3><p>${item.snippet}</p>`;
                resultsContainer.appendChild(result);
            });
        })
        .catch(error => console.error('Error:', error));
});
