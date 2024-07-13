const express = require("express");
const app = express();
require('dotenv').config()
const ArticleRouter = require("./src/routes/article/routes")
const AuthRouter = require("./src/routes/auth/routes")

app.use(express.json())
app.use(express.urlencoded({extended : ture}))

app.use("/api/courses",ArticleRouter)
app.use("/api/auth",authRouter)

const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})