const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Year {
    _id: ID
    year: Int!
    months: [Month]
    weeks: [Week]
  }

  type Years { 
    years: [Year]
  }

  type Month {
    _id: ID
    monthName: String!
    monthNumber: Int!
    weeks: [Week]
  }

  type Months { 
    months: [Month]
  }

  type Week { 
    weekDate: String!
    employees: [Employee]
  }

  type Employee {
    _id: ID
    firstName: String!
    lastName: String!
    schedules: [Schedule]
  }

  type Employees {
    employees: [Employee]
  }

  type Schedule {
    _id: ID
    monday: Monday
  }

  type Monday {
    cashRegister: Int
    beginningTime: Int
    endingTime: Int
  }


  type Query {
    years: [Year]
    year(_id: ID!): Year
    months: [Month]
    month(_id: ID!): Month
    employees: [Employee]
    employee(_id: ID!): Employee
    schedule(_id: ID!): Schedule
  }

  type Mutation {
    addYear(year: Int!): Year
    addMonth(monthName: String!, monthNumber: Int!, yearId: ID!): Month 
    addEmployee(firstName: String!, lastName: String!): Employee
    addSchedule(employeeId: ID, cashRegister: Int!, beginningTime: Int!, endingTime: Int!): Schedule
  }
`

module.exports = typeDefs;