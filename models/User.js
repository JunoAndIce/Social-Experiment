const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username:
    {
      type: String,
      unique: true,
      required: true,
      trimmed: true
    },
    email:
    {
      type: String,
      unique: true,
      required: true,
      match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, 'Please fill a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      }],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      }],
  },
  {
    toJSON: {
      // Include virtuals on conversion.
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `fullName` that gets and sets the user's full name
userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;