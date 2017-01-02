(function() {
  'use strict';

  var movies = [
    {
      title: "Avatar",
      category: "space"
    },
    {
      title: "Star Wars",
      category: "space"
    },
    {
      title: "Gravity",
      category: "space"
    },
    {
      title: "Wall-E",
      category: "animated"
    },
    {
      title: "Up",
      category: "animated"
    },
    {
      title: "Finding Nemo",
      category: "animated"
    },
    {
      title: "Inside Out",
      category: "animated"
    }
  ];

  function getSimilarMovie(originalMovieTitle) {
    var originalMovie = movies.find(function(movie) {
      return movie.title === originalMovieTitle;
    });

    var originalMovieCategory = originalMovie.category;
    console.log(originalMovieCategory);

    var similarMovies = [];

    movies.forEach(function(movie) {
      if (movie.category === originalMovieCategory) {
        similarMovies.push(movie);
      }
    });

    var similarRandomMovie = similarMovies[Math.floor(Math.random()*similarMovies.length)];
    console.log(similarRandomMovie);

    return similarRandomMovie.title;
  }

  

  document.getElementById("get-similar-movie").addEventListener('click', function() {
    var movieTitle = document.getElementById('seen-movie').value;
    console.log(movieTitle);
    var result = getSimilarMovie(movieTitle);

    addLargeText('Du borde se: ' + result);
  });

})();





