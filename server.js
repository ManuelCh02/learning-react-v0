const express = require('express')
const app = express()
const PORT = 6666

app.get('/', (req, res) => {

})

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON http://localhost:${PORT}`)
})
