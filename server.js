/* const express = require('express')
const app = express()
const path = require('path')
const _dirname = path.resolve();

app.listen(8080, function(){
    console.log('listening on 8080')
})

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(_dirname + 'react/build')));

app.get('/', function(req,res){
    res.sendFile(path.join(_dirname + '/react/public/index.html'));
})

app.get('/product', function(req,res){
    res.json({name:'black shoes'});
})
 */


//박세화
const express = require("express");
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 5000;
app.listen(port);

app.post("/", (req,res)=>{
    const email = req.body.email;
    res.send(`your email is ${email}`) 
    //이 부분에 이메일이 DB에 있는지 확인하는 코드 작성하시면 됩니다
})

console.log(`server running at http ${port}`);