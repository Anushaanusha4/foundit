// models/Job.model.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Make sure this exports a Sequelize instance

const Job = sequelize.define("Job", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true, // Optional: if you want this to be the main identifier
  },
  image: { type: DataTypes.STRING, allowNull: false },
  job_title: { type: DataTypes.STRING, allowNull: false },
  salary: { type: DataTypes.STRING, allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
  company_name: { type: DataTypes.STRING, allowNull: false },
  city: { type: DataTypes.STRING, allowNull: false },
  state: { type: DataTypes.STRING, allowNull: false },
  country: { type: DataTypes.STRING, allowNull: false },
  viewed: { type: DataTypes.STRING, allowNull: false },
  applied: { type: DataTypes.STRING, allowNull: false },
  experience: { type: DataTypes.STRING, allowNull: false },
  job_description: { type: DataTypes.STRING, allowNull: false },
  job_type: { type: DataTypes.STRING, allowNull: false },
  industry: { type: DataTypes.STRING, allowNull: false },
  functions: { type: DataTypes.STRING, allowNull: false },
  roles: { type: DataTypes.STRING, allowNull: false },
  skills: { type: DataTypes.STRING, allowNull: false },
  education: { type: DataTypes.STRING, allowNull: false },
  post_date: { type: DataTypes.STRING, allowNull: false },
  company_description: { type: DataTypes.STRING, allowNull: false },
  is_remote: { type: DataTypes.STRING, allowNull: false },
  has_expired: { type: DataTypes.STRING, allowNull: false },
}, {
  tableName: "jobs", // optional: define table name
  timestamps: false, // disable createdAt/updatedAt unless you need them
});

module.exports = Job;
