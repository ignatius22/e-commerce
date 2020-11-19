const User = require('../model/user');

module.exports = {
  create: async (req, res) => {
    const { firstName, lastName, email,password } = req.body;
    const user = await User.create({
      firstName,
      lastName,
			email,
			password
    });

    return res.json(user);
  },

  find: async (req, res) => {
    const user = await User.find();
    return res.send(user);
  }
};
