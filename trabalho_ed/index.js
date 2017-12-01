const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require("mongoose")
mongoose.Promise = global.Promise
const bodyParser = require("body-parser")


const index = require("./routes/index")

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', index)


mongoose.connect('mongodb://localhost/trabalho', {useMongoClient: true})
        .then(() => {
         
            app.listen(port, () => console.log('server running on port ' + port))
           
        })
        .catch(e=>console.log(e.getMessage()))