const { Schema, model } = require('mongoose');

const employeeSchema = new Schema(
  {
    firstName: {
      type: String,
      require: true,
      trim: true
    },
    lastName: {
      type: String,
      require: true,
      trim: true
    },
    schedules: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Schedule'
      }
    ]
  }
);

const Employee = model('Employee', employeeSchema);

module.exports = Employee;