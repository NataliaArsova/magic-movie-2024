const movies = [
  {
    _id: 1,
    title: "Jungle Cruise",
    genre: "adventure",
    director: "Jack",
    date: "2022",
    imageUrl: "/img/jungle-cruise.jpeg",
    rating: "6.7",
    description: "great movie",
  },
];
exports.getAll = () => {
  return movies.slice();
};

exports.create = (movieData) => {
  movieData._id = movies;
  movies.push(movieData);
};
