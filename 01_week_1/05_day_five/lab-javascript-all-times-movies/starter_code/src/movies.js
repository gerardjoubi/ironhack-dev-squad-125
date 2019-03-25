/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map(function(movie) { // return final map result array !!!
    const m = Object.assign({}, movie); // copy current movie in a new object literal
    if (m.duration) { // check if duration property exists
      let hours = m.duration.match(/\d+h/); // match one or more digit(s) followed by h. ex: 2h || 10h ... and so on
      hours = hours ? Number(hours[0].match(/\d+/)[0]) : 0; // ex match 1 in 1h ...
      let mins = m.duration.match(/\d+min/); // match one or more digit(s) followed by min. ex: 23min || 1min ...
      mins = mins ? Number(mins[0].match(/\d+/)[0]) : 0; // ex match 1 in 1min ...
      m.duration = (Number(hours) * 60) + mins; // sumup
    }
    return m; // return copied movie object in the returned map array
  });
}

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  const sum = movies.reduce((acc, movie) => (acc += Number(movie.rate)), 0);
  return Number((sum / movies.length).toFixed(2));
}

// Get the average of Drama Movies
function getMoviesByGenre(movies, genre) {
  return movies.filter(function(movie) {
    return movie.genre.includes(genre);
  });
}

function getMoviesByDirector(movies, director) {
  return movies.filter(function(movie) {
    return movie.director === director;
  });
}

function dramaMoviesRate(movies) {
  const dramas = getMoviesByGenre(movies, "Drama");
  return !dramas.length ? undefined : ratesAverage(dramas);
}

// Order by time duration, in growing order

function orderByDuration(movies) {
  function compare(a, b) {
    var tmp;
    if (a.duration === b.duration) tmp = a.title > b.title ? 1 : -1;
    else tmp = a.duration > b.duration ? 1 : a.duration < b.duration ? -1 : 0;
    return tmp;
  }

  return movies.length === 1 ? movies : movies.sort(compare);
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  const director = "Steven Spielberg";
  if (movies.length === 0) return;
  const dramas = getMoviesByDirector(
    getMoviesByGenre(movies, "Drama"),
    director
  );
  return `${director} directed ${dramas.length} drama movies!`;
}

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  var limit = 20,
    sorted;

  const sort = function(collection) {
    return collection.sort(function(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  };

  const format = function(collection) {
    return collection.reduce(function(acc, el) {
      acc.push(el.title);
      return acc;
    }, []);
  };

  sorted = sort(movies);

  if (movies.length === 1) return (res = movies[0].title);
  else if (!movies.length || movies.length < limit) return format(movies);

  return format(sorted.slice(0, 20));
}

// Best yearly rate average
function bestYearAvg(movies) {
  if (!movies.length) return;

  function sortByYear(movies) {
    
    const find = (stacked, year) => stacked.find((mov) => mov.year === year);

    return movies.reduce(function(acc, movie) {
      let found = find(acc, movie.year);
      if (found) found.movies.push(movie);
      else acc.push({ year: movie.year, avg: null, movies: [movie] });
      return acc;
    }, []);
  }

  function sortByAverage(years) {
    return years.sort(function(a, b) {
      return a.avg > b.avg ? -1 : a.avg < b.avg ? 1 : 0;
    });
  }

  const sortedByYear = sortByYear(movies);

  sortedByYear.forEach(function(year) {
    year.avg = ratesAverage(year.movies);
  });

  const sortedByAvg = sortByAverage(sortedByYear);

  const bestYear = sortedByAvg[0].avg;

  const tieds = sortedByAvg.filter(function(year) {
    return year.avg === bestYear;
  }).sort(function (a, b) {
    return Number(a.year) > Number(b.year)
      ? 1
      : Number(a.year) < Number(b.year) ? -1 : 0;
  });

  const res = tieds.length < 2 ? sortedByAvg[0] : tieds[0];

  return `The best year was ${res.year} with an average rate of ${res.avg}`;
}
