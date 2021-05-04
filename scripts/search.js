function search(e) {
    if (e.code === "Enter") {
        var searchBar = document.getElementById("search-bar");
        var queryString = searchBar.value;
        searchBar.value = '';
        window.open('https://duckduckgo.com/?q=' + queryString, '_self');
    }
}