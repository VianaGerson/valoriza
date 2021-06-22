import express from "express"

const app = express()

app.get("/test", (req, res) => {
  return res.send("Ola mundo")
})

app.listen(3000, () => {
  console.log("Server is running")
})