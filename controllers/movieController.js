const Movie = require("../model/movieModel");

module.exports.addMovie = async (req, res, next) => {
    try {
        const { movieName,releaseYear, plot, movieActors, producer } = req.body;
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

// module.exports.editMovie = async (req, res, next) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.json({ msg: "Incorrect email or password", status: false });
//         }
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             return res.json({ msg: "Incorrect email or password", status: false });
//         }
//         delete user.password;
//         return res.json({ status: true, user });
//     } catch (exception) {
//         next(exception)
//     }
// }

// module.exports.getAllMovies = async (req, res, next) => {
//     try {
//         const movies = await Movie.find({})
//         .populate('movieActors')
//         .select('movieName releaseYear plot producer movieActors _id');

//     return res.json(movies);
//     } catch (ex) {
//       next(ex);
//     }
//   };

module.exports.getAllMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find({})
            .populate({
                path: 'movieActors',
                select: 'actorName',
            })
            .populate({
                path: 'producer',
                select: 'producerName'
            })
            .select('movieName releaseYear plot producer movieActors _id');

        return res.json(movies);
    } catch (error) {
        next(error);
    }
};