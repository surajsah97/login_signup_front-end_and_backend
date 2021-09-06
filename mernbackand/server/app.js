
const express=require("express")
const path=require("path")
const bodyParser=require("body-parser")
const hbs=require("hbs")
const sql=require("mysql");
const db=require("../server/db/db");
const app=express();
const port=process.env.PORT || 3000
const static_path=path.join(__dirname,"../client/public");
//         db.query("INSERT INTO student set ?",
const template_path=path.join(__dirname,"../client/templates/views");
const partials_path=path.join(__dirname,"../client/templates/partials");
app.use(express.static(static_path));
hbs.registerPartials(partials_path);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine", "hbs");
app.set("views",template_path);
app.get("/home",(req,res)=>{
    res.render("index")
});
app.get("/register",(req,res)=>{
    res.render("register")
});
app.post("/register",(req,res)=>{
    var data={"firstname":req.body.firstname,"lastname":req.body.lastname,"username":req.body.username,"password":req.body.pass ,"confirm_password":req.body.conf_pass}
    db('users_data').where({"username":req.body.username}).then((da)=>{
        if(da.length>0){
            res.send("already registered")
        }
    else{
    if(req.body.pass===req.body.conf_pass){
    db('users_data').insert(data).then((sdata)=>{
        res.redirect("login")
        res.send("successfully registered");
    }).catch((err)=>{registered
        console.log(err);
    })
}
 else{
     res.render("register")
     res.send("please enter correct password")
 } 
    }
})
});
app.get("/login",(req,res)=>{req.body.password
    res.render("login")
})
app.post("/login",(req,res)=>{
    data={"username":req.body.username,"passwod":req.body.password}
    db.select('password').from('users_data').where({"username":req.body.username}).then((da)=>{
        console.log(da[1]["password"]);
        if(da[1]["password"]===req.body.password){
            res.redirect("home")
        }
        else{

            res.send("sorry wrong username or password")
        }

    })
//     try{
//         db.query("INSERT INTO student set ?",
//         db.query("INSERT INTO student set ?",data,(err,rows)=>{
//             if(!err){
//                 res.send("inserted");
//             }
//             else
//             console.log(err);
//         })
        
//     }catch(error){
//         res.status(400).send(error)
//     }
})
app.get("/",(req,res)=>res.send("hello server"));
app.listen(port,()=>console.log((`connected with ${port}`)))
