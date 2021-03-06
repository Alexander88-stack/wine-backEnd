const express = require('express');
const authController = require('../controllers/auth.controller');
const auth = require('../middleware/auth');


const router = express.Router();


router.post('/users', authController.addUserAuth);
router.get('/users/me', auth, authController.getUserAuth);
router.post('/users/login', auth, authController.postUserAuth);
router.post('/users/me/logout', auth, authController.logOutAuth);
router.post('/users/me/logout', auth, authController.logOutAllAuth);

// router.delete('/', authController.dropUserAuth);



module.exports = router; 




















// const express = require('express');
// const User = require('../models/user.model');
// const auth = require('../middleware/auth');


// mongoose.connect(

//     `mongodb+srv://ClientDb:${process.env.MATLASPASS}@cluster0.otj84.mongodb.net/BBDD?retryWrites=true&w=majority`
// ,
//     { useNewUrlParser: true, useUnifiedTopology:true}
// );

// // const router = express.Router();

//     // Create a new user
// router.post('/users', async (req, res) => {

//     try {
//         const user = new User(req.body)
//         await user.save()
//         const token = await user.generateAuthToken()
//         res.status(201).send({ user, token })
//     } catch (error) {
//         res.status(400).send(error)
//     }
// });

//   //Login a registered user
// router.post('/users/login', async(req, res) => {
  
//     try {
//         const { email, password } = req.body
//         const user = await User.findByCredentials(email, password)
//         if (!user) {
//             return res.status(401).send({error: 'Login failed! Check authentication credentials'})
//         }
//         const token = await user.generateAuthToken()
//         res.send({ user, token })
//     } catch (error) {
//         res.status(400).send(error)
//     }

// });

//    // View logged in user profile
// router.get('/users/me', auth, async(req, res) => {
 
//     res.send(req.user)
// });

//  // Log user out of the application
// router.post('/users/me/logout', auth, async (req, res) => {
   
//     try {
//         req.user.tokens = req.user.tokens.filter((token) => {
//             return token.token != req.token
//         })
//         await req.user.save()
//         res.send()
//     } catch (error) {
//         res.status(500).send(error)
//     }
// });

//   // Log user out of all devices
// router.post('/users/me/logoutall', auth, async(req, res) => {
  
//     try {
//         req.user.tokens.splice(0, req.user.tokens.length)
//         await req.user.save()
//         res.send()
//     } catch (error) {
//         res.status(500).send(error)
//     }
// });

// module.exports = router;