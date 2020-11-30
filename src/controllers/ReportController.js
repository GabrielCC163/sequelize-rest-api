const User = require("../models/User");
const { Op } = require("sequelize");

module.exports = {
  //show all users with email ends with @rocketseat.com.br
  //from them, show only those who live on the street "Rua Guilherme Gembala"
  //from them, show only the techs that starts with "React"
  async show(req, res) {
    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@rocketseat.com.br",
        },
      },
      include: [
        {
          association: "addresses",
          where: { street: "Rua Guilherme Gembala" },
        },
        {
          association: "techs",
          required: false,
          where: {
            name: {
              [Op.iLike]: "React%",
            },
          },
        },
      ],
    });

    return res.json(users);
  },
};
