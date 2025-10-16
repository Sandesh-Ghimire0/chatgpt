import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log("Chat-auth service is running at port ",process.env.PORT)
})