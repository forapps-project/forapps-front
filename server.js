const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = process.env.port || 8000;
const cors = require('cors');

const con = mysql.createConnection({
    host:'localhost',
    user:'enrhd',
    password:'1q2w3e',
    port:3306,
    database:'account',
});

let corsOptions = {
    origin: "*", // 출처 허용 옵션
    credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
  };
  
  app.use(cors(corsOptions));

  app.get("/", (req, res) => {
      const q = `insert into user ('id','username', 'password') values (0,'enrhd', '1q2w3e');`
      const values = ["id","username", "password"]
    
      con.query(q, [values], (err, data) => {
        console.log(err);
        res.send('success!');
      })
    })

app.get("/user",(req,res)=>{
        const query = "select * from user"
        con.query(query,(err,data)=>{
            if(err) return res.json(err)
            return res.json(data)
        })
    });


app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
})