const movies = [
  {
    title: "Jungle",
    genre: "adventure",
    director: "Jack",
    date: "2022",
    imageUrl: "/image/jungle.jpeg",
    rating: "6.7",
    description: "great movie",
  },
];
exports.getAll = () => {
  return movies.slice();
};

exports.create = (movieData) => {
  movies.push(movieData);
};
