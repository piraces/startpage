function search(e) {
    if (e.code === "Enter") {
        var searchBar = document.getElementById("search-bar");
        var queryString = searchBar.value;
        var queryStringEncoded = encodeURI(queryString);
        window.open('https://duckduckgo.com/?q=' + queryStringEncoded, '_self');
    }
}