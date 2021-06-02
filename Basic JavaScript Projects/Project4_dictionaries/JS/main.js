function my_Dictionary() { // Function to be called
    var Anime = { // Dictionary with kvp
        Type: "Shounen",
        Seasons: "2",
        Theme: "Believe it!"
    };
    delete Anime.Type; // Deletes assignment to type
    document.getElementById("Dictionary").innerHTML = Anime.Type;
}