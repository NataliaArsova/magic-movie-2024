const mongoose = require("mongoose");

const castSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 99,
  },
  born: {
    type: String,
    required: true,
  },
  nameInMovie: {
    type: String,
    required: true,
  },
  castImage: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return /^https?:\/\//.test(value);
      },
      message: (props) =>
        `${props.value} is not a valid url for the castImage!`,
    },
  },
});

const Cast = mongoose.model("Cast", castSchema);

module.exports = Cast;
