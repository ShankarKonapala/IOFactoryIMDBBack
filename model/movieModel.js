const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true,
    },
    releaseYear: {
        type: Number,
        required: true,
    },
    plot: {
        type: String,
        required: true
    },
    movieActors: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Actor"
    }],
    producer: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Producer', required: true 
    }
});
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;