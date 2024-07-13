const express = require("express");
const app = express();
require('dotenv').config()
const ArticleRouter = require("./src/routes/article/routes")

app.use(express.json())
app.use(express.urlencoded({extended : ture}))

app.use("/api/courses",ArticleRouter)

const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})