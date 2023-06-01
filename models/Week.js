const { Schema, model } = require('mongoose');

const weekSchema = new Schema (
  {
    monday: {
      cashRegister: {
        type: Number,
        require: true,
        trim: true
      },
      beginningTime: {
        type: Number,
        require: true,
        trim: true
      },
      endingTime: {
        type: Number,
        require: true,
        trim: true
      },
    }
  }
);

const Week = model('Week', weekSchema);

module.exports = Week;