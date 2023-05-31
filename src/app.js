const express = require("express");
require("../src/db/conn");
const router = require("../src/routers/men");

const MensRanking = require("../src/models/mens");
const { status } = require("express/lib/response");
const { route } = require("express/lib/application");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})