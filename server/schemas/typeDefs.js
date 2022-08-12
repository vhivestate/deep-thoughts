// import the gql tagged template function
const { gql } = require('apollo-server-express');
const { User, Thought } = require('../models');

// create our typeDefs
const typeDefs = gql`
type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
  }

  type Query {
    thoughts(username: String): [Thought]
  }
`;

// export the typeDefs
module.exports = typeDefs;