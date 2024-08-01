import express from 'express'

const app=express()

app.get('/',(req, res)=>{
    res.send('<h3>MR Soft Solutions ')
})
const port=5000
app.listen(port, ()=>{
    console.log("Server is running at : ", port)
})