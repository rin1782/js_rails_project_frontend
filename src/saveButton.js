function saveButton() {
    var likes = document.getElementById("foster");
    var favs = likes.innerHTML;

    ++favs;

    console.log(favs);
    document.getElementById("foster").innerHTML = favs;
}