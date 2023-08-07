const { Employee, Schedule, Year, Month, Week } = require('../models');

const resolvers = {
  Query: {
    years: async () => {
      return await Year.find({}).populate('months').populate('weeks');
    },
    year: async (parent, args) => {
      return await Year.findById(args._id).populate('months').populate({
        path: 'months.weeks',
        populate: 'weeks'
      });
    },
    months: async () => {
      return await Month.find({}).populate('weeks');
    },
    month: async (args) => {
      return await Month.findById(args.id).populate('weeks');
    },
    weeks: async () => {
      return Week.find({});
    },
    employees: async () => {
      return await Employee.find({}).populate('schedules');
    },
    employee: async (args) => {
      return await Employee.findById(args.id).populate('schedules');
    },
    // schedules: async () => {
    //   return await Schedule.find({});
    // },
    schedule: async (args) => {
      return Schedule.findById(args.id);
    }
  },
  Mutation: {
    addYear: async (parent, { year }) => {
      return await Year.create({ year });
    },
    addMonth: async (parent, { monthName, monthNumber, yearId }) => {
      const month = Month.create({ monthName, monthNumber });

      await Year.findByIdAndUpdate(
        yearId,
        {
          $push: { months: (await month).id},
        }
      );

      return month
    },
    addWeek: async (parent, { mondayDayDate, mondayMonth, mondayYear, tuesdayDayDate,tuesdayMonth, tuesdayYear, wednesdayDayDate,wednesdayMonth, wednesdayYear , monthId, yearId }) => {
      const week = Week.create(
        {
        weekDays:[
          {
            monday: {
              mondayDayDate: mondayDayDate,
              mondayMonth: mondayMonth,
              mondayYear: mondayYear
            }
          },
          {
            tuesday: {
              tuesdayDayDate: tuesdayDayDate,
              tuesdayMonth: tuesdayMonth,
              tuesdayYear: tuesdayYear
            }
          },
          {
            wednesday: {
              wednesdayDayDate: wednesdayDayDate,
              wednesdayMonth: wednesdayMonth,
              wednesdayYear: wednesdayYear
            }
          }
        ]
       }
       );

      await Month.findByIdAndUpdate(
        monthId,
        {
          $push: { weeks: (await week).id },
        }
      );

      await Year.findByIdAndUpdate(
        yearId,
        {
          $push: { weeks: (await week).id },
        }
      );

      return week;
    },
    addEmployee: async (parent, { firstName, lastName }) => {
      return await Employee.create({ firstName, lastName });
    },
    addSchedule: async (parent, { employeeId, scheduleDate, mondayCashRegister,mondayBeginningTime, mondayEndingTime }) => {
      const schedule = Schedule.create({
        scheduleDate: scheduleDate,
        monday: {
          mondayCashRegister: mondayCashRegister,
          mondayBeginningTime: mondayBeginningTime,
          mondayEndingTime: mondayEndingTime
        }
        // tuesday: {
        //   cashRegister: tuesdayCashRegister,
        //   beginningTime: tuesdayBeginningTime,
        //   endingTime: tuesdayEndingTime
        // },
        // wednesday: {
        //   cashRegister: wednesdayCashRegister,
        //   beginningTime: wednesdayBeginningTime,
        //   endingTime: wednesdayEndingTime
        // },
        // monday: {
        //   cashRegister: props.cashRegister,
        //   beginningTime: props.beginningTime,
        //   endingTime: props.endingTime
        // },
        // monday: {
        //   cashRegister: props.cashRegister,
        //   beginningTime: props.beginningTime,
        //   endingTime: props.endingTime
        // },
        // monday: {
        //   cashRegister: props.cashRegister,
        //   beginningTime: props.beginningTime,
        //   endingTime: props.endingTime
        // },
        // monday: {
        //   cashRegister: props.cashRegister,
        //   beginningTime: props.beginningTime,
        //   endingTime: props.endingTime
        // }
      });

      await Employee.findByIdAndUpdate(
        employeeId,
        {
          $push: {schedules: (await schedule).id},
        }
      )

      return schedule
    }
  },
};

module.exports = resolvers;