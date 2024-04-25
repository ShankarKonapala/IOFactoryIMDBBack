const { addMovie, getAllMovies, updateMovie } = require("../controllers/movieController");

const router = require("express").Router();

router.post("/addMovie",addMovie);
router.get("/getAllMovies",getAllMovies);
router.put("/updateMovie/:id",updateMovie);

module.exports = router