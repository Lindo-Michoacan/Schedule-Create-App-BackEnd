const { Schema, model } = require('mongoose');

const yearSchema = new Schema(
 {
  year: {
    type: Number,
    require: true
  },
  months: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Month'
    }
  ],
  weeks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Week'
    }
  ]
 }
);

const Year = model('Year', yearSchema);

module.exports = Year