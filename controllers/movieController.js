const Movie = require("../model/movieModel");

module.exports.addMovie = async (req, res, next) => {
    try {
        const { movieName, releaseYear, plot, movieActors, producer } = req.body;
        const movieCheck = await Movie.findOne({ movieName });
        if (movieCheck) {
            return res.json({ msg: "Movie name alredy exists", status: false })
        }
        const movie = await Movie.create({
            movieName,
            releaseYear,
            plot,
            movieActors,
            producer
        });
        return res.json({ status: true, movie });
    } catch (exception) {
        next(exception)
    }
}

module.exports.updateMovie = async (req, res, next) => {
    try {
        const id = req.params.id;
        const movieId = id.toString();
        const { movieName, releaseYear, plot, movieActors, producer } = req.body;
        const updatedMovie = await Movie.findByIdAndUpdate(
            movieId,
            {
                movieName,
                releaseYear,
                plot,
                movieActors,
                producer
            },
            { new: true }
        );
        return res.json({ status: true, updatedMovie });
    } catch (exception) {
        next(exception)
    }
};

module.exports.getAllMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find({})
            .populate({
                path: 'movieActors',
                select: 'actorName _id',
            })
            .populate({
                path: 'producer',
                select: 'producerName _id'
            })
            .select('movieName releaseYear plot producer movieActors _id');

        return res.json(movies);
    } catch (error) {
        next(error);
    }
};