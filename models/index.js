const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter new workout type",
      },
      type: {
        type: String,
        required: "type of work out",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter new workout type",
      },
      duration: {
        type: Number,
        required: "Enter the duration of workout",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],

  day: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
