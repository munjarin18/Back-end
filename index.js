const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('I am from back-endalahjhvfhe')
  })


  const users =[
    {name:"munjarin" , email:"aktermunjarin@gmail.com" ,
     description: "developer"},
    {name:"munjarin" , email:"aktermunjarin@gmail.com" ,
    description: "developer"},
    {name:"munjarin" , email:"aktermunjarin@gmail.com" ,
     description: "developer"},
    {name:"munjarin" , email:"aktermunjarin@gmail.com" ,
     description: "developer"},

  

]





app.get ('/user',(req,res) => {
    res.send(users)

})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
