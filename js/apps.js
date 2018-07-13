var search = document.getElementById("searchbar");
var container = document.querySelector(".gallery");
var photoNotes = container.querySelectorAll("a");




search.addEventListener('keyup', () => {
  var userInput = search.value.toLowerCase();
  for ( i = 0; i < photoNotes.length; i++ ) {
    var notes = photoNotes[i].getAttribute("data-title");
    if (notes.includes(userInput)) {
      photoNotes[i].style.display="";

    } else {
      photoNotes[i].style.display="none";
    }
    console.log();
  }
});

// FIND OUT WHY CERTAIN WORDS (LIKE SUNSET AND I) ARE NOT BEING INCLUDED IN FILTER
