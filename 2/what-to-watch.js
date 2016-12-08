(function(){
  'use strict';

  var movies = [
    {
      title: "Avatar",
      rating: 10,
      category: "space"
    },
    {
      title: "Star Wars",
      rating: 7,
      category: "space"
    },
    {
      title: "Star Wars 2",
      rating: 7,
      category: "space"
    },
    {
      title: "Star Wars 4",
      rating: 7,
      category: "space"
    }
  ];

  function findSimilarMovie(originalMovieTitle) {

    var originalMovie = movies.find(function(movie){
      return movie.title === originalMovieTitle;
    });

    var originalMovieCategory = originalMovie.category;
    var similarMovies = [];

    movies.forEach(function(movie) {
      if (movie.category === originalMovieCategory && movie.title !== originalMovieTitle) {
        similarMovies.push(movie);
      }
    });

    var similarRandomMovie = similarMovies[Math.floor(Math.random() * similarMovies.length)];

    return similarRandomMovie.title;
  }

  document.getElementById("send-movie").addEventListener("click", function() {
    var movieTitle = document.getElementById("movie-title-input").value;
    var result = findSimilarMovie(movieTitle);
    addSmallText("Du borde se");
    addLargeText(result);
  });
})();
