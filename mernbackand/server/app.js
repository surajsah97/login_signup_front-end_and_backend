
const express=require("express")
const path=require("path")
const bodyParser=require("body-parser")
const hbs=require("hbs")
const cookieParser=require("cookie-parser")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {generateAuthToken,accessToken}=require("../auth/jwt")
const sql=require("mysql");
const db=require("../server/db/db");
const app=express();
require("dotenv").config()
app.use(cookieParser());
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
app.get("/home",accessToken,(req,res)=>{
    const token= jwt.verify(req.cookies.suraj,"sunlight")
    res.render("index")
});
app.get("/register",(req,res)=>{
    res.render("register")
});
app.post("/register",(req,res)=>{
    var data={"firstname":req.body.firstname,"lastname":req.body.lastname,"username":req.body.username}
    db('user_databoxs').where({"username":req.body.username}).then((da)=>{
        if(da.length>0){
            res.send("already registered")
        }
    else{
    if(req.body.pass===req.body.conf_pass){
        const secure=async(password)=>{
            const pass_hass=await bcrypt.hash(password,10);
            data["password"]=pass_hass;
            db('user_databoxs').insert(data).then((sdata)=>{
                res.redirect("login")
                res.send("successfully registered");
            }).catch((err)=>{
                console.log(err);
            })
        }
        secure(req.body.pass)
        data["password"]=pass_hass;
    
}
 else{
     res.render("register")
     res.send("please enter correct password")
 } 
    }
})
});
app.get("/login",(req,res)=>{
    try{
        const token=jwt.verify(req.cookies.suraj,"sunlight")
        console.log(token);
        res.redirect("home")
    }
    catch(err){

    res.render("login")
    }
})
app.post("/login",(req,res)=>{
    try{
    data={"username":req.body.username,"password":req.body.password}
    db.select('password').from('user_databoxs').where({"username":req.body.username}).then((da)=>{
        console.log(da[0]["password"]);
        const secure=async(password)=>{
        const pass_dec=await bcrypt.compare(password,da[0]["password"])
            // const Token= generateAuthToken(data)
            if (pass_dec==true){
           const token=await generateAuthToken(req.body.username)
           res.cookie("suraj",token)
           console.log(token);
            res.status(201).redirect("home")
            

        }
        else{
            res.redirect("login")
            
            
        }
    }
    secure(req.body.password)
    })}
    catch (error){
        res.status(400).send(error)
    }
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
