const { Schema, model } = require('mongoose');

const monthSchema = new Schema(
  {
    monthName: {
      type: String,
      require: true
    },
    monthNumber: {
      type: Number,
      require: true
    },
    weeks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Week'
      }
    ],
  }
);

const Month = model('Month', monthSchema);

module.exports = Month;