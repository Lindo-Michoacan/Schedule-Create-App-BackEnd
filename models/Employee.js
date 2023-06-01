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
    schedule: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Week'
      }
    ]
  }
);

const Employee = model('Employee', employeeSchema);

module.exports = Employee;