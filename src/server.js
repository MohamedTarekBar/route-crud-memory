const express = require("express");
const config = require("./config");
const errorMiddlewere = require("./Middleware/error.middleware");
const route = require("./Routes/api");

const app = express();
const PORT = config.port || 3000;

app.use(express.json());
app.use("/api", route);


app.use(() => {
  throw Error
});
app.use(errorMiddlewere);

app.listen(PORT, () => {
  console.log(`app is runing in port ${PORT}`);
});
