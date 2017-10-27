$(document).ready(function(){
  var Quote;
  var randomNum;
  var author;
function getQuotes(){

  var quotes = ['"If you want something you\'ve never had, you got to do something you\'ve never done."', '"Just because my path is different doesn\'t mean I\'m lost."', '"If you can dream it you can do it"', '"To a great mind nothing is little."','"Mediocrity knows nothing higher but itself... but talent instantly recognizes genius."','"It is not true that people stop pursuing dreams because they grow old, they grow old because they stop pursuing dreams."', '"What matters in life is not what happens to you but what you remember and how you remember it."', '"Man is an idiot. He doesn\’t know how to do anything without copying, without imitating, without plagiarizing, without aping. It might even have been that man invented generation by coitus after seeing the grasshopper copulate."' ,'"Modern man likes to pretend that his thinking is wide-awake. \But this wide-awake thinking has led us into the mazes of a nightmare in which the torture chambers are endlessly repeated in the mirrors of reason."' , '\"A woman who writes has power, and a woman with power is feared."', '"Everytime someone gives you a formula for what you should be and what you should do, you should know they\'re giving you a pait of handcuffs."','"You can\'t use up creativity. The more you use, the more you have."', '"Be a first-rate version of yourself, instead of a second-rate version of somebody else."', '"Imperfecion is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring."', '"Don\'t mistake politeness for a lack of strength."'];


  var author = ["-Thomas Jefferson", "unknown", "-Walt Disney","-Sherlock Holmes","-Sherlock Holmes","-Gabriel García Márquez","-Gabriel García Márquez", "-Augusto Roa Bastos","-Octavio Paz", "-Junot Diaz","-Maya Angelou","-Judy Garland", "-Marilyn Monroe", "-Sonya Sotomayor"];

randomNum = Math.floor(Math.random()*quotes.length);
 Quote = quotes[randomNum];
 Author = author[randomNum];

$(".quote").text(Quote);
$(".author").text(Author);

}

$("#get-quote").on("click", function(e) {
  e.preventDefault();
    getQuotes();
  });

  $("#share-quote").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" +Quote +Author);
});
});
