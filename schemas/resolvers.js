const { Employee, Schedule, Year, Month, Week } = require('../models');

const resolvers = {
  Query: {
    years: async () => {
      return await Year.find({}).populate('months');
    },
    year: async (args) => {
      return await Year.findById(args.id).populate('months')
    },
    months: async () => {
      return await Month.find({});
    },
    month: async (args) => {
      return await Month.findById(args.id).populate('weeks');
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
    addEmployee: async (parent, { firstName, lastName }) => {
      return await Employee.create({ firstName, lastName });
    },
    addSchedule: async (parent, { employeeId, cashRegister, beginningTime, endingTime }) => {
      const schedule = Schedule.create({
        monday: {
          cashRegister: cashRegister,
          beginningTime: beginningTime,
          endingTime: endingTime
        }
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