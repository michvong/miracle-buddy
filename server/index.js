const express = require("express");
const app = express();
const cors = require("cors");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");
// const bodyParser = require('body-parser');

const locationRouter = require("./routes/location-route");
const serviceRouter = require("./routes/service-route");
const regUserRouter = require("./routes/regUser-route");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json());

app.use(cors());

app.use(locationRouter);
app.use(serviceRouter);
app.use(regUserRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});
app.use(errorHandler);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;