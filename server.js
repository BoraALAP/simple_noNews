const express = require('express')

const app = express()
const port = 8000

app.get('/', (res, req) => {
    res.send('Hello Bora')
})

app.listen(port, () => {
    console.log(`Server is Listening on port ${port}`);
    
})