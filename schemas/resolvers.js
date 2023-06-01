const e = require('express');
const { Employee, Week } = require('../models');

const resolvers = {
  Query: {
    employees: async () => {
      return await Employee.find({}).populate('schedule');
    },
    employee: async (args) => {
      return await Employee.findById(args.id).populate('schedule');
    },
    weeks: async () => {
      return await Week.find({});
    },
    week: async (args) => {
      return Week.findById(args.id);
    }
  },
  Mutation: {
    addEmployee: async (parent, { firstName, lastName }) => {
      return await Employee.create({ firstName, lastName });
    },
    addSchedule: async (parent, { employeeId, cashRegister, beginningTime, endingTime }) => {
      const schedule = Week.create({
        monday: {
          cashRegister: cashRegister,
          beginningTime: beginningTime,
          endingTime: endingTime
        }
      });

      await Employee.findByIdAndUpdate(
        employeeId,
        {
          $push: {schedule: (await schedule).id},
        }
      )

      return schedule
    }
  },
};

module.exports = resolvers;