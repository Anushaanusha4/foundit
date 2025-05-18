// models/Admin.model.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Make sure this points to your Sequelize setup

const Admin = sequelize.define("Admin", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Optional: ensures email is not duplicated
    validate: {
      isEmail: true, // Optional: validate email format
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [4], // Equivalent to min: 4
    },
  },
}, {
  tableName: "admins", // Optional: name of the table in your DB
  timestamps: false,   // Optional: disable createdAt/updatedAt fields
});

module.exports = Admin;
