const { Schema, model } = require('mongoose');

const scheduleSchema = new Schema (
  {
    scheduledDate :{
      type: String
    },
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
    },
    tuesday: {
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
    },
    wednesday: {
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
    },
    thursday: {
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
    },
    friday: {
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
    },
    saturday: {
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
    },
    sunday: {
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
    },
    totalHours: {
      type: Number,
      trim: true
    },
    week: {
      type: Schema.Types.ObjectId,
      ref: 'Week',
      // required: true
    }
  }
);

const Schedule = model('Schedule', scheduleSchema);

module.exports = Schedule;