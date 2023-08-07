const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Year {
    _id: ID
    year: Int
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

  type Weeks {
    weeks: [Week]
  }

  type Week {
    _id: ID
    weekDays: WeekDays
  }

  type WeekDays {
    monday: MondayWeek
    tuesday: TuesdayWeek
    wednesday: WednesdayWeek
  }

  type MondayWeek {
    mondayDayDate: Int
    mondayMonth: Int
    mondayYear: Int
  }

  type TuesdayWeek {
    tuesdayDayDate: Int
    tuesdayMonth: Int
    tuesdayYear: Int
  }

  type WednesdayWeek {
    wednesdayDayDate: Int
    wednesdayMonth: Int
    wednesdayYear: Int
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

  type Monday {
    mondayCashRegister: Int
    mondayBeginningTime: Int
    mondayEndingTime: Int
  }

  type Tuesday {
    tuesdayCashRegister: Int
    tuesdayBeginningTime: Int
    tuesdayEndingTime: Int
  }

  type Schedule {
    _id: ID
    scheduleDate: String!
    monday: Monday
    tuesday: Tuesday
  }


  type Query {
    years: [Year]
    year(_id: ID!): Year
    months: [Month]
    month(_id: ID!): Month
    weeks: [Week]
    employees: [Employee]
    employee(_id: ID!): Employee
    schedule(_id: ID!): Schedule
  }

  type Mutation {
    addYear(year: Int!): Year
    addMonth(monthName: String!, monthNumber: Int!, yearId: ID!): Month 
    addWeek(mondayDayDate: Int, mondayMonth: Int, mondayYear: Int, tuesdayDayDate: Int, tuesdayMonth: Int, tuesdayYear: Int,wednesdayDayDate: Int, wednesdayMonth: Int, wednesdayYear: Int, monthId: ID!, yearId: ID!): Week
    addEmployee(firstName: String!, lastName: String!): Employee
    addSchedule(employeeId: ID!, scheduleDate: String!, mondayCashRegister: Int, mondayBeginningTime: Int, mondayEndingTime: Int, tuesdayCashRegister: Int, tuesdayBeginningTime: Int, tuesdayEndingTime: Int): Schedule
  }
`

module.exports = typeDefs;







// type Wednesday {
//   wednesdayCashRegister: Int
//   wednesdayBeginningTime: Int
//   wednesdayEndingTime: Int
// }