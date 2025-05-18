require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db"); // Sequelize instance

const { userController } = require("./Routes/User.route");
const { adminController } = require("./Routes/Admin.route");
const { jobController } = require("./Routes/Job.route");
const { crudController } = require("./Routes/Admincrud.route");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the app");
});

// API Routes
app.use("/user", userController);
app.use("/admin", adminController);
app.use("/job", jobController);
app.use("/registeredusers", crudController);

// Sequelize DB Connection
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to SQL database");

    // Sync models if needed (optional)
    // await sequelize.sync({ alter: true }); // Use cautiously in production

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Unable to connect to SQL database:", error);
  }
};

startServer();
