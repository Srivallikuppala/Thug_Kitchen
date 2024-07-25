import express from 'express';
// import nodemailer from 'nodemailer'
import mongoose from 'mongoose'; 
import bodyParser from 'body-parser';
import cors from "cors"; 
import multer from 'multer';
// import student from './models/student.js';
import register from './models/register.js';
import product from './models/product.js';
import recipe from './models/recipe.js';
import favor from './models/favor.js';
// import regist from './models/regist.js';
// import person from './models/person.js';
const app = express();//express for creating route paths.it will worth
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use('/images',express.static('public/images'));
// mongoose.connect()

mongoose.connect('mongodb+srv://Srivalli:19189valli@cluster0.zwn4tzq.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=AtlasApp')
.then(() => app.listen(5000))
.then(() =>console.log("Connected to Database & Listining to localhost 5000")
)
.catch((err) => console.log(err));
app.post('/addstuden',(req,res,next)=>{
    console.log(req.body.form2data)
    const {email,password}=req.body.form2data
    const studen=new register({
        email,
        password,
    }) 
    try{
        studen.save()
    }catch{
        console.log(err);
    }
    return res.send({msg:'inserted',result:studen})
})

app.get('/getstudens',async(req,res,next)=>{
  let registerdata
  try{
     registerdata = await register.find()
  }
  catch(err){
     console.log(err)
  }
  if(!registerdata){
     console.log("no data found")
  }
  // res.send("success")
  return res.status(200).json({registerdata})

})
app.get('/getstuden',async(req,res,next)=>{
    let logindata
    try{
       logindata = await register.find()
    }
    catch(err){
       console.log(err)
    }
    if(!logindata){
       console.log("no data found")
    }
    // res.send("success")
    return res.status(200).json({logindata})
 
  })

  const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/images')
    },
    filename: function (req, file, callback) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, Date.now()+"_"+file.originalname)
    }
  })
  
const upload = multer({ storage: storage })
  //add product 
  app.post("/addrecipes",upload.single("myfile"),async(req, res, next)=>{
    const productpic=(req.file)? req.file.filename:null
    //console.log(req.body.formdata)
    const {name,procedure,category,area} =req.body
    const prod = new recipe({
        name,
        procedure,
        productpic,
        category,
        area
      })
    try{
        prod.save()//for saving the data into the database
        return res.status(200).json({ message: 'Product added to cart successfully' });
    }catch(err){
           return res.status(400).json({message:"not uploaded"})
    }      
})

app.get('/getallpro',async(req,res,next)=>{
    let productsdata; 
    try{
        productsdata=await recipe.find();
    }catch(err){
        console.log(err);
    }
    if(!productsdata){

        return res.status(404).json({message:"no data found."})

    }
    return res.status(200).json(productsdata)
})
app.post('/addfav',(req,res,next)=>{
  console.log(req.body.form4data)
  const {name,procedure}=req.body.form4data
  const fav=new favor({
      name,procedure
  }) 
  try{
      fav.save()
  }catch{
      console.log(err);
  }
  return res.send({msg:'inserted',result:fav})
})
app.get('/getfav',async(req,res,next)=>{
  let getfavors;
  try{
     getfavors = await favor.find()
     console.log(10)
  }
  catch(err){
     console.log(err)
     console.log(90)
  }
  if(!getfavors){
     console.log("no data found")
  }
  return res.status(200).json(getfavors)

})

  app.post('/addstuds',(req,res,next)=>{
    console.log(req.body.formdatas)
    const {Name,Recipe,Number,branch} = req.body.formdatas
    const studs = new student({
        Name,Recipe,Number,branch
    })
    try{
    studs.save()
    return res.send({msg:"inserted",result:studs})
    }//to save data to database
    catch{
        console.log(err)
        return res.send({msg:"notinserted",result:studs})
    }
    //to respond msg to frontend
    // return res.status(201).json({student})
  })
  
  
  app.get('/getstudents',async(req,res,next)=>{
    let studentdatas
    try{
        studentdatas=await student.find()
    }
    catch(err){
        console.log(err)
    }
  
    if(!studentdatas){
        console.log("no student found")
    }
    return res.status(200).json({studentdatas})
  })
  
  app.put('/updatedata/:id', async (req, res, next)=>{
    const userid = req.params.id
    const {Name , Recipe,Number , branch} = req.body;
    let users;
    try{
        users = await student.findByIdAndUpdate(userid,{
            Name , Recipe,Number , branch
        });
    }catch(err){
        return console.log(err)
    }
    if(!users){
        return res.status(400).json({message:"Unable to update the users."})
    }
    return res.status(200).json({message:'Updated Successfully'})
  })

// n

// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//       callback(null, 'public/images')
//     },
//     filename: function (req, file, callback) {
//       // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       callback(null, Date.now()+"_"+file.originalname)
//     }
//   })
  
//   const upload = multer({ storage: storage })
//   //add product 
//   app.post("/addproduct",upload.single("myfile"),async(req, res, next)=>{
//     const productpic=(req.file)? req.file.filename:null
//     //console.log(req.body.formdata)
//     const {title,price,category} =req.body
//     const prod = new product({
//         title,
//         price,
//         category,
//         productpic,
//       })
//     try{
//         prod.save()//for saving the data into the database
//         return res.status(200).json({ message: 'Product added to cart successfully' });
//     }catch(err){
//            return res.status(400).json({message:"not uploaded"})
//     }      
// })

// app.get('/getallproduts',async(req,res,next)=>{
//     let productsdata; 
//     try{
//         productsdata=await product.find();
//     }catch(err){
//         console.log(err);
//     }
//     if(!productsdata){

//         return res.status(404).json({message:"no student found."})

//     }
//     return res.status(200).json(productsdata)
// })