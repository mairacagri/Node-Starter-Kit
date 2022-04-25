const express = require('express');
const app = express();

const PORT= 9004;

const data=[
    {id:2,
     name: "Maira",
     last: "Rakhimbayeva",

    },
    {  
     id:1,
    name: "Mohammed",
    last: "Lastname",

}]

app.get('/api/users', (req,res) => {
    res.send(data)
}) 

app.listen(PORT, () => {
    console.log(`llalalalla on http://localhost:${PORT}`);
})