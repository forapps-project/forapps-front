const express = require('express')
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

app.get('/',function(req,res){
    res.sendFile(path.join(_dirname + '/react/public/index.html'));
})

app.get('/product',function(req,res){
    res.json({name:'black shoes'});
})
