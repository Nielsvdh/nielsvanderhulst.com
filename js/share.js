/* -------------------- share --------------------  */
console.log("TEST: share.js");
document.addEventListener('DOMContentLoaded', function() {
  testShareFunctionaliteit();
}, false);

function testShareFunctionaliteit() {
  console.log("begin testSharing");

  /*hier wordt gechecked of de browser de web share API kent*/
  if ("share" in navigator) {
    console.log("sharing wordt ondersteund");
    klikEventsKoppelen();
  } else {
    console.log("sharing wordt niet ondersteund");
    //Bericht aan de gebruiker dat sharing niet wordt ondersteund en verbergen van share knoppen.
    document.getElementById("shareOndersteuning").innerHTML += '<p>Helaas de share functie wordt niet ondersteund door deze browser...</p>';
    document.getElementById("paginaDelen").style.visibility = 'hidden';
  }
}

function klikEventsKoppelen() {

  document.getElementById("paginaDelen").addEventListener("click", function(ev) {

    navigator.share({
      title: "Bookfinder project",
      text: "Check Bookfinder!",
      url: "https://brightspace.avans.nl/d2l/le/lessons/86886/topics/730891"
    })
    .then(console.log('Share is gelukt!'))
    .catch(function(error) {
      console.log("Fout! " + error)
    })

  });
}
