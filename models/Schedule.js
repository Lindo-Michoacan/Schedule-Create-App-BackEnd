const { Schema, model } = require('mongoose');

const scheduleSchema = new Schema (
  {
    scheduleDate :{
      type: String,
      require: true,
      unique: true
    },
    monday: {
      mondayCashRegister: {
        type: Number,
      },
      mondayBeginningTime: {
        type: Number,
      },
      mondayEndingTime: {
        type: Number,
      },
    },
    // tuesday: {
    //   cashRegister: {
    //     type: Number,
    //     default: 0
    //   },
    //   beginningTime: {
    //     type: Number,
    //     default: 0
    //   },
    //   endingTime: {
    //     type: Number,
    //     default: 0
    //   },
    // },
    // wednesday: {
    //   cashRegister: {
    //     type: Number,
    //     default: 0
    //   },
    //   beginningTime: {
    //     type: Number,
    //     default: 0
    //   },
    //   endingTime: {
    //     type: Number,
    //     default: 0
    //   },
    // },
    // thursday: {
    //   cashRegister: {
    //     type: Number,
    //     default: 0
    //   },
    //   beginningTime: {
    //     type: Number,
    //     default: 0
    //   },
    //   endingTime: {
    //     type: Number,
    //     default: 0
    //   },
    // },
    // friday: {
    //   cashRegister: {
    //     type: Number,
    //     default: 0
    //   },
    //   beginningTime: {
    //     type: Number,
    //     default: 0
    //   },
    //   endingTime: {
    //     type: Number,
    //     default: 0
    //   },
    // },
    // saturday: {
    //   cashRegister: {
    //     type: Number,
    //     default: 0
    //   },
    //   beginningTime: {
    //     type: Number,
    //     default: 0
    //   },
    //   endingTime: {
    //     type: Number,
    //     default: 0
    //   },
    // },
    // sunday: {
    //   cashRegister: {
    //     type: Number,
    //     default: 0
    //   },
    //   beginningTime: {
    //     type: Number,
    //     default: 0
    //   },
    //   endingTime: {
    //     type: Number,
    //     default: 0
    //   },
    // },
    // totalHours: {
    //   type: Number,
    //   default: 0
    // },
    // week: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Week',
    //   // required: true
    // }
  }
);

const Schedule = model('Schedule', scheduleSchema);

module.exports = Schedule;