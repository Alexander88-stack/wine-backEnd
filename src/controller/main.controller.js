const mongoose = require('mongoose');

const Client = require('../models/client.model');

mongoose.connect(

    'mongodb+srv://Alexander88-stack:${process.env.MATLASPASS}@cluster0.g0ded.mongodb.net/matchEnd?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology:true}
);

module.exports = {
    getClient: async function (_req, res){

        try {

            const clientList = await Client.find();
            console.log('Respuesta del BBDD', clientList);

            res.json(clientList);
            
        } catch (e) {
            send.status(500);
        }
        
    },
    updateClient: async function (req, res) {
        
        try {
            
            await Client.updateOne({
            
                nameId:req.body.nameId,
                name:req.body.name,
                lastName:req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                numberPhone: req.body.numberPhone,
                age:req.body.age,
                
            });
    
            res.status(200).send('Usuario modificado');
        } catch (e) {
            send.status(500);
        }
        
    },
    addClient: async function (req, res) {
       
        try {
            
            const clientToAdd = new Client();

            clientToAdd.nameId =  req.body.nameId;
            clientToAdd.name =  req.body.name;
            clientToAdd.lastName = req.body.lastName;
            clientToAdd.email = req.body.email,
            clientToAdd.password = req.body.password,
            clientToAdd.numberPhone = req.body.numberPhone,
            clientToAdd.age = req.body.age;
                            
            
            await clientToAdd.save();
            res.status(200).send(`El usuario, ${req.body.name} ${req.body.lastName} ha sido agregado.`);
        } catch (e) {
            send.status(500);
        }
        
    }, 
    dropClient: async function (req, res) {

        try {

            await Client.deleteOne({
            
                nameId:req.body.nameId,
                name:req.body.name,
                lastName:req.body.lastName
            });
            res.status(200).send(`Ha sido dado baja en el usuario ${req.body.name} ${req.body.lastName}.`);
            
        } catch (e) {
            send.status(500);
        }
        
    } 
};