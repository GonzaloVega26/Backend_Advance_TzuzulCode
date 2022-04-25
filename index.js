const express = require('express')
const PORT = 4000
const app = express()

app.get('/', (req,resp)=>{
    return resp.json({
        'name': 'Gonzalo',
        'mail': '31gonzalovega@gmail.co'
    })
})



app.listen(PORT,()=>{
    console.log('App is listening in http:/localhost:'+PORT)
})