import { Schema, model, models } from "mongoose";

const MovieSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  downloadLink: {
    type: String,
    required: true,
  },
  trailer: {
    type: String,
    required: true,
  },
  genre: {
    genre1: String,
    genre2: String,
    genre3: String,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  runtime: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  rated: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["movie", "series"],
    required: true,
  },

  creationDateTime: {
    type: Date,
    default: Date.now,
  },
});

MovieSchema.index({ creationDateTime: -1 });

const Movie = models?.Movie || model("Movie", MovieSchema);

export default Movie;
