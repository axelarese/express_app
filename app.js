const express = require("express");

const app = express();

const welcome = (req, res) => {
    res.send("Welcome to my favourite movie list");
  };

app.get("/", welcome);

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

// Chemin vers "/" 

app.get ("/", (req, res) => {
    res.send("Welcome to my favourite movie list");
});

// Chemin vers "/api/movies"

const getMovies = (req, res) => {
    res.status(200).json(movies);
};

app.get ("/api/movies/", getMovies);

// Chemin vers "/api/movies/:id"

const getID = (req, res) => {
    const id = req.params.id;
    for (i = 0; i < movies.length ; i++) {
        if (id == movies[i].id) {
            return res.status(200).json(movies[i]);
        }
    }
    return res.status(404).send("Not Found");
}

app.get("/api/movies/:id", getID);

module.exports = app;