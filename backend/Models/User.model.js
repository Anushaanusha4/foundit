// models/User.model.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // This should be your Sequelize instance

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [4], // Minimum 4 characters
    },
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  work_status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "fresher",
  },
}, {
  tableName: "users",
  timestamps: false,
});

module.exports = User;
