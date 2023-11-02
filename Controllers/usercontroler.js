const User = require("../models/usersmodel");


exports.register = async (req,res)=>{
   try{
     const {name,email,password} = req.body;
     const namecheck = await User.findOne({name});
     if(namecheck)   
     return res.json({msg:"Username already used",status:false});


     const emailcheck = await User.findOne({email});
      if(emailcheck)
      return res.json({msg:"Email is already used", status:false});




    const user = await User.create({name,email,password});
    return res.status(200).json({
         status:true,
        message:"Entry Created Successfully",
        user
    });


   }
   catch(err){
   console.log(err)
   res.status(500)
   .json({
    success:false,
    message:"Internal server error",
   
   })
   }
}



// for login 
exports.login = async (req,res)=>{

try{
const {name,password} = req.body;
const user = await User.findOne({name});
if(!user)
  return res.json({
    msg:"Incorrect username and password",
    status:false
  })


  const ispasswordvalid = await user.findOne({password});
  if(!ispasswordvalid)
  return res.json({
mag:"Incorrect username and password",
status:false})

return res.json({
  status:true,
  user
})

}
catch(err){
  console.log(err)
 res.status(500)
.json({
 success:false,
 message:"Internal server error",

})
}

}
