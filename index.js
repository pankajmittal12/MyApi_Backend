const express = require('express');

const app = express();

const indexRouter = require("./Routers/router");

app.use(express.json());

app.use('/root', indexRouter);

app.listen(1000, () => {
    console.log("Server is running on port 1000");
})