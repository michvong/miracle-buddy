const express = require("express");
const app = express();
const cors = require("cors");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");

const locationRouter = require("./routes/location-route");
const serviceRouter = require("./routes/service-route")

app.use(locationRouter);
app.use(serviceRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});
app.use(errorHandler);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;