//Query that holds series of methods used in typeDef file
const { User, Thought } = require('../models');

const resolvers = {
    Query: {
      //pass parent as more of a placeholder
      thoughts: async (parent, { username }) => {
        //const params to accept parameter for specific user
        const params = username ? { username } : {};

        return Thought.find().sort({ createdAt: -1 });
      },
      // place this inside of the `Query` nested object right after `thoughts` 
    thought: async (parent, { _id }) => {
     return Thought.findOne({ _id });
    },
    // get all users
    users: async () => {
      return User.find()
      .select('-__v -password')
      .populate('friends')
      .populate('thoughts');
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    }
    }
  };
  
  module.exports = resolvers;

  //revolver can accept 4 arguments: parent, args, context, and info