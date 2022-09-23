const express = require('express');
const  dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connect = require('./server/database/connect')
const mongoose = require('mongoose')
const RoleModel = require('./server/model/role-model')
const PORT = 3000

const app = express();


dotenv.config({path:'config.env'})
// const PORT = process.env.PORT || 3000


app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")
app.engine('.html', require('ejs').__express);
app.set("views",path.resolve(__dirname,"views"))

//load assets
app.use('/assets', express.static('assets'))
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
//css/style.css

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/', (req, res) => {          
    res.render('login')
})
const main = async() => {
    try {
        await connect()
        app.listen(PORT, () => {
            console.log("Server running at port", PORT);
        })
    } catch (err) {
        console.log(err, 'Fail to connect to db');
    }
}
main()
