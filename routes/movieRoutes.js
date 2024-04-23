const { addMovie, editMovie, getAllMovies } = require("../controllers/movieController");

const router = require("express").Router();

router.post("/addMovie",addMovie);
router.get("/getAllMovies",getAllMovies)
// router.post("/editMovie",editMovie);

module.exports = router