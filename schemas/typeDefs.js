const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    _id: ID
    firstName: String!
    lastName: String!
    schedule: [Week]
  }

  type Employees {
    employees: [Employee]
  }

  type Week {
    _id: ID
    monday: Monday
  }

  type Weeks {
    weeks: [Week]
  }

  type Monday {
    cashRegister: Int
    beginningTime: Int
    endingTime: Int
  }


  type Query {
    employees: [Employee]
    employee(_id: ID!): Employee
    weeks: [Week]
    week(_id: ID!): Week
  }

  type Mutation {
    addEmployee(firstName: String!, lastName: String!): Employee
    addSchedule(employeeId: ID, cashRegister: Int!, beginningTime: Int!, endingTime: Int!): Week
  }
`

module.exports = typeDefs;