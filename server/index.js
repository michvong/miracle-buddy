const express = require("express");
const app = express();
const cors = require("cors");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");
// const bodyParser = require('body-parser');

const locationRouter = require("./routes/location-route");
const serviceRouter = require("./routes/service-route");
const warehouseRouter = require("./routes/warehouse-route");
const eventRouter = require("./routes/event-route")
const companyRouter = require("./routes/company-route");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json());

app.use(cors());

app.use(locationRouter);
app.use(serviceRouter);
app.use(warehouseRouter);
app.use(eventRouter);
app.use(companyRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});
app.use(errorHandler);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;