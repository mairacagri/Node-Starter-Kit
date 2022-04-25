const express = require('express');
const app = express()

const PORT= 9002;





// const helloWorldHandler = (req, res) => {
//     res.send(data);
//  }

app.get('/api/users', (req,res) => {
    res.send(data)
}) 

// app.get('/api/users', helloWorldHandler)

app.listen(PORT, () => {
    console.log(`My server is running on ${PORT}`)
})