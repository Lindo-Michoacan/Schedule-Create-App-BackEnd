const { Schema, model } = require('mongoose');

const weekSchema = new Schema (
  {
    // weekDate: {
    //   type: String,
    //   trim: true,
    //   require: true,
    //   unique: true
    // },
    weekDays:[
      {
        monday:
          {
            mondayDayDate: {
              type: Number,
            },
            mondayMonth: {
              type: Number,
            },
            mondayYear:{
              type: Number
            }
          }
      },
      {
        tuesday:
        {
          tuesdayDayDate: {
            type: Number,
          },
          tuesdayMonth: {
            type: Number
          },
          tuesdayYear:{
            type: Number
          }
        }
      },
      {
      wednesday:
        {
          wednesdayDayDate: {
            type: Number
          },
          wednesdayMonth: {
            type: Number
          },
          wednesdayYear:{
            type: Number
          }
        }
      }
    ],
    // month: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Month',
    //   require: true
    // },
    // year: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Year',
    //   require: true
    // },
    // schedules: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Schedules'
    //   }
    // ],
  }
);

const Week = model('Week', weekSchema);

module.exports = Week;



      // thursday:
      //   {
      //     dayDate: {
      //       type: Number,
      //     },
      //     month: {
      //       type: Schema.Types.ObjectId,
      //       ref: 'Month',
      //       require: true
      //     },
      //     year:{
      //       type: Schema.Types.ObjectId,
      //       ref: 'Year',
      //       require: true
      //     }
      //   },
      // friday:
      //   {
      //     dayDate: {
      //       type: Number,
      //     },
      //     month: {
      //       type: Schema.Types.ObjectId,
      //       ref: 'Month',
      //       require: true
      //     },
      //     year:{
      //       type: Schema.Types.ObjectId,
      //       ref: 'Year',
      //       require: true
      //     }
      //   },
      // saturday:
      //   {
      //     dayDate: {
      //       type: Number,
      //     },
      //     month: {
      //       type: Schema.Types.ObjectId,
      //       ref: 'Month',
      //       require: true
      //     },
      //     year:{
      //       type: Schema.Types.ObjectId,
      //       ref: 'Year',
      //       require: true
      //     }
      //   },
      // sunday:
      //   {
      //     dayDate: {
      //       type: Number,
      //     },
      //     month: {
      //       type: Schema.Types.ObjectId,
      //       ref: 'Month',
      //       require: true
      //     },
      //     year:{
      //       type: Schema.Types.ObjectId,
      //       ref: 'Year',
      //       require: true
      //     }
      //   },