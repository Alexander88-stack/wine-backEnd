const User = require('../models/user.model');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


async function signup(req,res,next) {
    
    const salt = await bycrypt.genSalt(10);
    hashpassword = await bycrypt.hash(req.body.password,salt)
    
    const emailExist = await User.findOne({email: req.body.email})

    if(emailExist) {
        res.status(400).json({'error':'Este email ya existe, elige otro'})
    }


    const user = new User ({
        email: req.body.email,
        password: hashpassword
    })
    try{
        const userSignup = await user.save()
        const payload = {
            user: {
                id: userSignup.id
            }
        };
        jwt.sign(payload,'anystring',{expiresIn: 10000}, function(err,token){
            if(err) {
                res.send(err)
            }
            res.status(200).json({
                token,
                userSignup
            })
        })
    }
    catch(err) {
        res.status(400).json({'error' :err})
    }
};

// Aqui se le da la funcionalidad al login
// Vamos creando una funcion asincrona
// Dentro de esta funcion voy mirando si el mail 
// que esta metiendo existe ya 
// Vamos tambien comparando si el password coincide con el que tengo en la base de datos
// en la ultima parte se genera JWT token y lo mandamos al user

async function login(req,res,next){
    const emailExist = await User.findOne({email: req.body.email})
    if(!emailExist){
      res.status(400).json({error:"Email not Found"})
    }
    const checkpassword = await bycrypt.compare(req.body.password,   emailExist.password)
    if(!checkpassword){
      res.status(400).json({error:"Password mismatch"})
    }
    const token = jwt.sign({id: emailExist.id},'anystring')
    res.header('auth-token',token).json({'Token':token})
  };


   // Aqui estamos creando una funcion que devuelve los detalles del usuario
   // Esto funcionara si el token sera valido y solo para los que esten logados
   async function getCurrentUser(req,res){
    try {
      const user = await User.findById(req.user._id);
      res.json(user);
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
  };

    
module.exports = {
    signup,
    login,
    getCurrentUser,
}



