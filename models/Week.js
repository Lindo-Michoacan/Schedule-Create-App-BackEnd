const { Schema, model } = require('mongoose');

const weekSchema = new Schema (
  {
    weekDate: {
      type: String
    },
    month: {
      type: Schema.Types.ObjectId,
      ref: 'Month'
    },
    year: {
      type: Schema.Types.ObjectId,
      ref: 'Year'
    },
    employees: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
      }
    ],
  }
);

const Week = model('Week', weekSchema);

module.exports = Week;